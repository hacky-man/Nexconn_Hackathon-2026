import os
import re
import time
from typing import Literal
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="BhashaBridge AI - Nexconn Localization Engine", version="1.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Request & Response Schemas ---
class ChatRequest(BaseModel):
    message: str
    sender_name: str = "Guest User"
    source_platform: Literal["nexconn", "slack", "discord", "webapp"] = "nexconn"
    target_language: Literal["auto", "malayalam", "manglish", "english"] = "auto"
    bot_persona: Literal["support", "community", "sales"] = "support"

class DummyBotEvent(BaseModel):
    platform: Literal["slack", "discord", "webapp"]
    channel_name: str
    user_handle: str
    text: str
    target_language: Literal["auto", "malayalam", "manglish", "english"] = "auto"

# --- Language & Manglish Heuristic Detector ---
MANGLISH_MARKERS = {
    "eda", "edi", "machane", "macha", "cheta", "chetta", "chechi", "entha",
    "enthu", "eppo", "evide", "evde", "engane", "enthina", "alle", "aano",
    "aanu", "undu", "illa", "vendam", "venda", "mathi", "adipoli", "pwoli",
    "sheri", "sari", "namaskaram", "sugham", "sukham", "kittum", "varum",
    "cheyyam", "parayu", "parayamo", "njan", "njn", "ningal", "nammal",
    "ethra", "ethraya", "vila", "sahayam", "pinne", "kuzhappam", "maatti",
    "thakaraaru", "nanni", "samayam", "naale", "innu", "kanikkunnu", "kittiyathu"
}

def detect_language_style(text: str) -> str:
    # Check Unicode range for Malayalam script (U+0D00 to U+0D7F)
    if re.search(r"[\u0D00-\u0D7F]", text):
        return "Malayalam"
    words = set(re.findall(r"[a-zA-Z]+", text.lower()))
    if words.intersection(MANGLISH_MARKERS):
        return "Manglish"
    return "English"

# --- Expanded 8-Intent Offline Localization Engine ---
def generate_fallback_localization(message: str, detected: str, target: str, persona: str) -> dict:
    effective_lang = detected if target == "auto" else target.capitalize()
    msg_lower = message.lower()

    # 1. Refunds, Returns & Damaged Items
    if any(k in msg_lower for k in ["refund", "return", "wrong", "damage", "maatti", "thakaraaru", "തിരികെ", "റീഫണ്ട്", "മാറ്റി", "തകരാർ"]):
        replies = {
            "Malayalam": "വിഷമിക്കേണ്ട! നിങ്ങളുടെ റീഫണ്ട് / എക്സ്ചേഞ്ച് അപേക്ഷ സ്വീകരിച്ചിട്ടുണ്ട്. 24 മണിക്കൂറിനുള്ളിൽ പിക്കപ്പ് ഉണ്ടായിരിക്കുന്നതാണ്, തുക 2 പ്രവൃത്തി ദിവസത്തിനുള്ളിൽ അക്കൗണ്ടിൽ എത്തും.",
            "Manglish": "Pedikkanda machane! Ningalude refund & exchange request register cheythittundu. 24 hours-nullil pickup nadakkum, paisa 2 working days-il account-il ethum.",
            "English": "No worries! Your refund/exchange request is registered. Pickup will happen within 24 hours, and the amount will reflect in your account within 2 working days."
        }
        eng_summary = "Initiated return pickup within 24 hours and 2-day bank refund."
        intent = "Refund & Return"

    # 2. Technical Support, API & Bug Fixes
    elif any(k in msg_lower for k in ["error", "bug", "issue", "cors", "api", "down", "crash", "fix", "kanikkunnu", "പ്രശ്നം", "വർക്ക്"]):
        replies = {
            "Malayalam": "സാങ്കേതിക സഹായത്തിനായി നന്ദി! നിങ്ങളുടെ Nexconn App Key-യും CORS സെറ്റിംഗ്സും പരിശോധിക്കുക. ഞങ്ങളുടെ എഞ്ചിനീയറിംഗ് ടീം ഈ പ്രശ്നം ഇപ്പോൾ തന്നെ പരിഹരിക്കുന്നതാണ്.",
            "Manglish": "Chetta, tension aavanda! Ningalude Nexconn App Key-um CORS settings-um onnu check cheyyu. Nammude tech team ee issue ippo thanne fix cheyyunnundu!",
            "English": "Thanks for flagging this! Please verify your Nexconn App Key and CORS settings—our engineering team is actively resolving the issue."
        }
        eng_summary = "Provided API/CORS troubleshooting guidance and escalated to tech team."
        intent = "Technical Support"

    # 3. Booking Slots & Demo Appointments
    elif any(k in msg_lower for k in ["book", "slot", "appointment", "demo", "meeting", "schedule", "samayam", "naale", "സമയം", "ബുക്ക്"]):
        replies = {
            "Malayalam": "നിങ്ങളുടെ ലൈവ് ഡെമോ സ്ലോട്ട് നാളെ രാവിലെ 11:00 മണിക്ക് ബുക്ക് ചെയ്തിട്ടുണ്ട്. Nexconn Chat വഴി മീറ്റിംഗ് ലിങ്ക് അയച്ചിട്ടുണ്ട്!",
            "Manglish": "Done! Ningalude live demo slot naale ravile 11:00 AM-nu book cheythittundu. Meeting link ippo thanne Nexconn Chat vazhi ayachittundu!",
            "English": "Confirmed! Your live demo slot is booked for tomorrow at 11:00 AM. The meeting link has been shared right here in Nexconn Chat."
        }
        eng_summary = "Booked live demo slot for tomorrow at 11:00 AM and sent link."
        intent = "Slot Booking"

    # 4. Plugin Integration (Discord, Slack & Custom Web Apps)
    elif any(k in msg_lower for k in ["discord", "slack", "plugin", "integrate", "install", "website", "connect", "add", "ചേർക്കാൻ", "പ്ലഗിൻ", "വെബ്സൈറ്റ്"]):
        replies = {
            "Malayalam": "വളരെ എളുപ്പമാണ്! മുകളിലുള്ള 'Integration Docs' ബട്ടൺ ക്ലിക്ക് ചെയ്ത് 3 വരി HTML സ്ക്രിപ്റ്റ് കോപ്പി ചെയ്ത് നിങ്ങളുടെ വെബ്സൈറ്റിലോ Discord/Slack വെബ്ഹുക്കിലോ പേസ്റ്റ് ചെയ്യുക.",
            "Manglish": "Valare simple aanu! Mukalile 'Integration Docs' button click cheythu aa 3-line HTML script copy cheythu ningalude website-ilo Discord/Slack webhook-ilo paste cheythal mathi!",
            "English": "Super easy! Click 'Integration Docs' at the top, copy the 3-line HTML script or webhook URL, and paste it directly into your website, Discord, or Slack app."
        }
        eng_summary = "Guided user to copy the 3-line embed script/webhook from Integration Docs."
        intent = "Plugin Integration"

    # 5. Pricing & Plans
    elif any(k in msg_lower for k in ["price", "ethra", "ethraya", "vila", "plan", "cost", "free", "trial", "വില", "പ്ലാൻ", "സൗജന്യ"]):
        replies = {
            "Malayalam": "നമസ്കാരം! ഞങ്ങളുടെ സ്റ്റാർട്ടർ പ്ലാൻ പൂർണ്ണമായും സൗജന്യമാണ് (10,000 ഉപയോക്താക്കൾ വരെ). പ്രോ പ്ലാനിന് പ്രതിമാസം ₹999 മാത്രമാണ്.",
            "Manglish": "Machane, nammude Starter plan totally FREE aanu (10,000 users vare)! Pro plan venamenkil ₹999/month aanu rate.",
            "English": "Hello! Our Starter plan is completely free up to 10,000 active users, and the Pro plan is ₹999/month."
        }
        eng_summary = "Shared pricing details: Free Starter tier up to 10,000 users; Pro tier at ₹999/month."
        intent = "Pricing Inquiry"

    # 6. Order & Delivery Tracking
    elif any(k in msg_lower for k in ["order", "delivery", "evide", "evde", "track", "hub", "cod", "ഓർഡർ", "ഡെലിവറി", "എവിടെ"]):
        replies = {
            "Malayalam": "നിങ്ങളുടെ ഓർഡർ ഇപ്പോൾ കൊച്ചി ഹബ്ബിൽ എത്തിയിട്ടുണ്ട്. ഇന്ന് വൈകുന്നേരം 6 മണിക്ക് മുമ്പ് ഡെലിവറി ലഭിക്കുന്നതാണ് (Cash on Delivery സൗകര്യവും ലഭ്യമാണ്)!",
            "Manglish": "Pedikkanda! Ningalude order ippo Kochi hub-il ethiyittundu. Innu vaikitt 6 PM-nu munne delivery kittum (COD-um available aanu)!",
            "English": "Your order has arrived at the Kochi hub and is scheduled for delivery before 6:00 PM today (Cash on Delivery is available)."
        }
        eng_summary = "Order status update: Reached Kochi hub, arriving before 6:00 PM today."
        intent = "Order Tracking"

    # 7. Gratitude & Positive Feedback
    elif any(k in msg_lower for k in ["thanks", "thank", "nanni", "adipoli", "pwoli", "super", "great", "awesome", "നന്ദി", "അടിപൊളി", "നന്നായിട്ടുണ്ട്"]):
        replies = {
            "Malayalam": "വളരെ നന്ദി! നിങ്ങളെ സഹായിക്കാൻ കഴിഞ്ഞതിൽ സന്തോഷമുണ്ട്. ഇനിയും എന്തെങ്കിലും ആവശ്യമുണ്ടെങ്കിൽ ചോദിക്കൂ!",
            "Manglish": "Valare nanni ketto! Ningalkku upakarapettathil orupadu santhosham. Iniyum enthenkilum sahayam venamenkil chodikku!",
            "English": "Thank you so much! Glad I could help. Let me know anytime if you need anything else!"
        }
        eng_summary = "Acknowledged user appreciation and offered continued assistance."
        intent = "Positive Feedback"

    # 8. Greetings & General Help
    elif any(k in msg_lower for k in ["help", "sahayam", "hi", "hello", "namaskaram", "sugham", "sukham", "സഹായം", "നമസ്കാരം", "സുഖം"]):
        replies = {
            "Malayalam": "നമസ്കാരം! ഞാൻ ഭാഷാബ്രിഡ്ജ് AI അസിസ്റ്റന്റാണ്. മലയാളത്തിലോ മംഗ്ലീഷിലോ ഇംഗ്ലീഷിലോ നിങ്ങൾക്ക് എന്ത് സഹായമാണ് വേണ്ടത്?",
            "Manglish": "Namaskaram! Njan BhashaBridge AI aanu. Malayalam, Manglish, allenkil English-il enthum chodikku—njan sahayikkam!",
            "English": "Hello! I am BhashaBridge AI. Ask me anything in Malayalam, Manglish, or English—I am ready to help!"
        }
        eng_summary = "Greeted user and offered multilingual support in Malayalam, Manglish, and English."
        intent = "General Assistance"

    # 9. Smart Default Fallback
    else:
        replies = {
            "Malayalam": f"നിങ്ങളുടെ സന്ദേശം ലഭിച്ചു: '{message}'. Nexconn Chat വഴി ഞങ്ങളുടെ ടീം ഉടൻ തന്നെ മലയാളത്തിൽ മറുപടി നൽകുന്നതാണ്.",
            "Manglish": f"Message kitti ketto: '{message}'. Nammude team Nexconn Chat vazhi udane thanne reply tharum!",
            "English": f"Got your message: '{message}'. Our team will follow up right here via Nexconn Chat."
        }
        eng_summary = f"Acknowledged user query: {message}"
        intent = "Customer Query" if persona == "support" else "Community Interaction"

    return {
        "reply": replies.get(effective_lang, replies["English"]),
        "english_translation": eng_summary,
        "intent": intent
    }

# --- LangChain Powered Localization Pipeline ---
async def run_langchain_localizer(message: str, detected: str, target: str, persona: str) -> dict:
    api_key = os.getenv("OPENAI_API_KEY", "").strip()
    effective_lang = detected if target == "auto" else target.capitalize()

    if not api_key:
        return generate_fallback_localization(message, detected, target, persona)

    try:
        from langchain_openai import ChatOpenAI
        from langchain_core.prompts import ChatPromptTemplate
        from langchain_core.output_parsers import JsonOutputParser

        llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.4, api_key=api_key)
        prompt = ChatPromptTemplate.from_messages([
            ("system", (
                "You are BhashaBridge AI, a warm, culturally fluent Kerala AI assistant integrated into Nexconn Chat UI. "
                "Your persona is '{persona}'. "
                "Respond to the user in '{target_lang}'. "
                "If target_lang is 'Malayalam', write natural, conversational Malayalam script. "
                "If target_lang is 'Manglish', write natural Kerala Romanized Malayalam (e.g., 'Machane, ippo sheriyaakkam!'). "
                "If target_lang is 'English', write clear Indian English. "
                "Return ONLY valid JSON with keys: 'reply', 'english_translation', and 'intent'."
            )),
            ("human", "{user_message}")
        ])
        chain = prompt | llm | JsonOutputParser()
        result = await chain.ainvoke({
            "persona": persona,
            "target_lang": effective_lang,
            "user_message": message
        })
        return {
            "reply": result.get("reply", ""),
            "english_translation": result.get("english_translation", ""),
            "intent": result.get("intent", "General")
        }
    except Exception:
        return generate_fallback_localization(message, detected, target, persona)

# --- API Endpoints ---
@app.get("/api/health")
async def health_check():
    return {
        "status": "online",
        "service": "BhashaBridge AI FastAPI + LangChain",
        "nexconn_configured": bool(os.getenv("NEXCONN_APP_KEY"))
    }

@app.post("/api/chat/localize")
async def localize_message(req: ChatRequest):
    start_time = time.perf_counter()
    detected = detect_language_style(req.message)
    ai_output = await run_langchain_localizer(
        req.message, detected, req.target_language, req.bot_persona
    )
    latency_ms = round((time.perf_counter() - start_time) * 1000, 1)

    return {
        "id": f"msg_{int(time.time() * 1000)}",
        "source_platform": req.source_platform,
        "sender_name": req.sender_name,
        "original_message": req.message,
        "detected_language": detected,
        "output_language": detected if req.target_language == "auto" else req.target_language.capitalize(),
        "localized_reply": ai_output["reply"],
        "english_translation": ai_output["english_translation"],
        "intent": ai_output["intent"],
        "latency_ms": latency_ms,
        "webhook_sync": ["nexconn-chat-ui", f"{req.source_platform}-bridge"]
    }

@app.post("/api/webhooks/dummy-bot")
async def dummy_bot_webhook(event: DummyBotEvent):
    detected = detect_language_style(event.text)
    ai_output = await run_langchain_localizer(
        event.text, detected, event.target_language, "community"
    )
    return {
        "status": "dispatched",
        "bridge_route": f"{event.platform.upper()} (#{event.channel_name}) -> Nexconn Chat UI",
        "user": event.user_handle,
        "detected_language": detected,
        "bot_response_payload": {
            "platform": event.platform,
            "channel": event.channel_name,
            "reply_text": ai_output["reply"],
            "admin_english_note": ai_output["english_translation"]
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=int(os.getenv("PORT", 8000)), reload=True)