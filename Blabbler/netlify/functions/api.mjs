const MANGLISH_MARKERS = new Set([
  "eda", "edi", "machane", "macha", "cheta", "chetta", "chechi", "entha",
  "enthu", "eppo", "evide", "evde", "engane", "enthina", "alle", "aano",
  "aanu", "undu", "illa", "vendam", "venda", "mathi", "adipoli", "pwoli",
  "sheri", "sari", "namaskaram", "sugham", "sukham", "kittum", "varum",
  "cheyyam", "parayu", "parayamo", "njan", "njn", "ningal", "nammal",
  "ethra", "ethraya", "vila", "sahayam", "pinne", "kuzhappam", "maatti",
  "thakaraaru", "nanni", "samayam", "naale", "innu", "kanikkunnu", "kittiyathu"
]);

function detectLanguageStyle(text) {
  if (/[\u0D00-\u0D7F]/.test(text)) return "Malayalam";
  const words = (text.toLowerCase().match(/[a-zA-Z]+/g) || []);
  for (const w of words) {
    if (MANGLISH_MARKERS.has(w)) return "Manglish";
  }
  return "English";
}

function capitalize(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "English";
}

function generateFallbackLocalization(message, detected, target, persona) {
  const effectiveLang = target === "auto" ? detected : capitalize(target);
  const msgLower = message.toLowerCase();

  const hasAny = (keywords) => keywords.some((k) => msgLower.includes(k));

  let replies;
  let engSummary;
  let intent;

  if (hasAny(["refund", "return", "wrong", "damage", "maatti", "thakaraaru", "തിരികെ", "റീഫണ്ട്", "മാറ്റി", "തകരാർ"])) {
    replies = {
      Malayalam: "വിഷമിക്കേണ്ട! നിങ്ങളുടെ റീഫണ്ട് / എക്സ്ചേഞ്ച് അപേക്ഷ സ്വീകരിച്ചിട്ടുണ്ട്. 24 മണിക്കൂറിനുള്ളിൽ പിക്കപ്പ് ഉണ്ടായിരിക്കുന്നതാണ്, തുക 2 പ്രവൃത്തി ദിവസത്തിനുള്ളിൽ അക്കൗണ്ടിൽ എത്തും.",
      Manglish: "Pedikkanda machane! Ningalude refund & exchange request register cheythittundu. 24 hours-nullil pickup nadakkum, paisa 2 working days-il account-il ethum.",
      English: "No worries! Your refund/exchange request is registered. Pickup will happen within 24 hours, and the amount will reflect in your account within 2 working days."
    };
    engSummary = "Initiated return pickup within 24 hours and 2-day bank refund.";
    intent = "Refund & Return";
  } else if (hasAny(["error", "bug", "issue", "cors", "api", "down", "crash", "fix", "kanikkunnu", "പ്രശ്നം", "വർക്ക്"])) {
    replies = {
      Malayalam: "സാങ്കേതിക സഹായത്തിനായി നന്ദി! നിങ്ങളുടെ Nexconn App Key-യും CORS സെറ്റിംഗ്സും പരിശോധിക്കുക. ഞങ്ങളുടെ എഞ്ചിനീയറിംഗ് ടീം ഈ പ്രശ്നം ഇപ്പോൾ തന്നെ പരിഹരിക്കുന്നതാണ്.",
      Manglish: "Chetta, tension aavanda! Ningalude Nexconn App Key-um CORS settings-um onnu check cheyyu. Nammude tech team ee issue ippo thanne fix cheyyunnundu!",
      English: "Thanks for flagging this! Please verify your Nexconn App Key and CORS settings—our engineering team is actively resolving the issue."
    };
    engSummary = "Provided API/CORS troubleshooting guidance and escalated to tech team.";
    intent = "Technical Support";
  } else if (hasAny(["book", "slot", "appointment", "demo", "meeting", "schedule", "samayam", "naale", "സമയം", "ബുക്ക്"])) {
    replies = {
      Malayalam: "നിങ്ങളുടെ ലൈവ് ഡെമോ സ്ലോട്ട് നാളെ രാവിലെ 11:00 മണിക്ക് ബുക്ക് ചെയ്തിട്ടുണ്ട്. Nexconn Chat വഴി മീറ്റിംഗ് ലിങ്ക് അയച്ചിട്ടുണ്ട്!",
      Manglish: "Done! Ningalude live demo slot naale ravile 11:00 AM-nu book cheythittundu. Meeting link ippo thanne Nexconn Chat vazhi ayachittundu!",
      English: "Confirmed! Your live demo slot is booked for tomorrow at 11:00 AM. The meeting link has been shared right here in Nexconn Chat."
    };
    engSummary = "Booked live demo slot for tomorrow at 11:00 AM and sent link.";
    intent = "Slot Booking";
  } else if (hasAny(["discord", "slack", "plugin", "integrate", "install", "website", "connect", "add", "ചേർക്കാൻ", "പ്ലഗിൻ", "വെബ്സൈറ്റ്"])) {
    replies = {
      Malayalam: "വളരെ എളുപ്പമാണ്! മുകളിലുള്ള 'Integration Docs' ബട്ടൺ ക്ലിക്ക് ചെയ്ത് 3 വരി HTML സ്ക്രിപ്റ്റ് കോപ്പി ചെയ്ത് നിങ്ങളുടെ വെബ്സൈറ്റിലോ Discord/Slack വെബ്ഹുക്കിലോ പേസ്റ്റ് ചെയ്യുക.",
      Manglish: "Valare simple aanu! Mukalile 'Integration Docs' button click cheythu aa 3-line HTML script copy cheythu ningalude website-ilo Discord/Slack webhook-ilo paste cheythal mathi!",
      English: "Super easy! Click 'Integration Docs' at the top, copy the 3-line HTML script or webhook URL, and paste it directly into your website, Discord, or Slack app."
    };
    engSummary = "Guided user to copy the 3-line embed script/webhook from Integration Docs.";
    intent = "Plugin Integration";
  } else if (hasAny(["price", "ethra", "ethraya", "vila", "plan", "cost", "free", "trial", "വില", "പ്ലാൻ", "സൗജന്യ"])) {
    replies = {
      Malayalam: "നമസ്കാരം! ഞങ്ങളുടെ സ്റ്റാർട്ടർ പ്ലാൻ പൂർണ്ണമായും സൗജന്യമാണ് (10,000 ഉപയോക്താക്കൾ വരെ). പ്രോ പ്ലാനിന് പ്രതിമാസം ₹999 മാത്രമാണ്.",
      Manglish: "Machane, nammude Starter plan totally FREE aanu (10,000 users vare)! Pro plan venamenkil ₹999/month aanu rate.",
      English: "Hello! Our Starter plan is completely free up to 10,000 active users, and the Pro plan is ₹999/month."
    };
    engSummary = "Shared pricing details: Free Starter tier up to 10,000 users; Pro tier at ₹999/month.";
    intent = "Pricing Inquiry";
  } else if (hasAny(["order", "delivery", "evide", "evde", "track", "hub", "cod", "ഓർഡർ", "ഡെലിവറി", "എവിടെ"])) {
    replies = {
      Malayalam: "നിങ്ങളുടെ ഓർഡർ ഇപ്പോൾ കൊച്ചി ഹബ്ബിൽ എത്തിയിട്ടുണ്ട്. ഇന്ന് വൈകുന്നേരം 6 മണിക്ക് മുമ്പ് ഡെലിവറി ലഭിക്കുന്നതാണ് (Cash on Delivery സൗകര്യവും ലഭ്യമാണ്)!",
      Manglish: "Pedikkanda! Ningalude order ippo Kochi hub-il ethiyittundu. Innu vaikitt 6 PM-nu munne delivery kittum (COD-um available aanu)!",
      English: "Your order has arrived at the Kochi hub and is scheduled for delivery before 6:00 PM today (Cash on Delivery is available)."
    };
    engSummary = "Order status update: Reached Kochi hub, arriving before 6:00 PM today.";
    intent = "Order Tracking";
  } else if (hasAny(["thanks", "thank", "nanni", "adipoli", "pwoli", "super", "great", "awesome", "നന്ദി", "അടിപൊളി", "നന്നായിട്ടുണ്ട്"])) {
    replies = {
      Malayalam: "വളരെ നന്ദി! നിങ്ങളെ സഹായിക്കാൻ കഴിഞ്ഞതിൽ സന്തോഷമുണ്ട്. ഇനിയും എന്തെങ്കിലും ആവശ്യമുണ്ടെങ്കിൽ ചോദിക്കൂ!",
      Manglish: "Valare nanni ketto! Ningalkku upakarapettathil orupadu santhosham. Iniyum enthenkilum sahayam venamenkil chodikku!",
      English: "Thank you so much! Glad I could help. Let me know anytime if you need anything else!"
    };
    engSummary = "Acknowledged user appreciation and offered continued assistance.";
    intent = "Positive Feedback";
  } else if (hasAny(["help", "sahayam", "hi", "hello", "namaskaram", "sugham", "sukham", "സഹായം", "നമസ്കാരം", "സുഖം"])) {
    replies = {
      Malayalam: "നമസ്കാരം! ഞാൻ ഭാഷാബ്രിഡ്ജ് AI അസിസ്റ്റന്റാണ്. മലയാളത്തിലോ മംഗ്ലീഷിലോ ഇംഗ്ലീഷിലോ നിങ്ങൾക്ക് എന്ത് സഹായമാണ് വേണ്ടത്?",
      Manglish: "Namaskaram! Njan BhashaBridge AI aanu. Malayalam, Manglish, allenkil English-il enthum chodikku—njan sahayikkam!",
      English: "Hello! I am BhashaBridge AI. Ask me anything in Malayalam, Manglish, or English—I am ready to help!"
    };
    engSummary = "Greeted user and offered multilingual support in Malayalam, Manglish, and English.";
    intent = "General Assistance";
  } else {
    replies = {
      Malayalam: `നിങ്ങളുടെ സന്ദേശം ലഭിച്ചു: '${message}'. Nexconn Chat വഴി ഞങ്ങളുടെ ടീം ഉടൻ തന്നെ മലയാളത്തിൽ മറുപടി നൽകുന്നതാണ്.`,
      Manglish: `Message kitti ketto: '${message}'. Nammude team Nexconn Chat vazhi udane thanne reply tharum!`,
      English: `Got your message: '${message}'. Our team will follow up right here via Nexconn Chat.`
    };
    engSummary = `Acknowledged user query: ${message}`;
    intent = persona === "support" ? "Customer Query" : "Community Interaction";
  }

  return {
    reply: replies[effectiveLang] || replies.English,
    english_translation: engSummary,
    intent
  };
}

async function runLocalizer(message, detected, target, persona) {
  const apiKey = (process.env.OPENAI_API_KEY || "").trim();
  const effectiveLang = target === "auto" ? detected : capitalize(target);

  if (!apiKey) {
    return generateFallbackLocalization(message, detected, target, persona);
  }

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.4,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content: `You are BhashaBridge AI, a warm, culturally fluent Kerala AI assistant integrated into Nexconn Chat UI. Persona: '${persona}'. Respond in '${effectiveLang}' (Malayalam script, natural Kerala Manglish, or Indian English). Return valid JSON with keys: 'reply', 'english_translation', and 'intent'.`
          },
          { role: "user", content: message }
        ]
      })
    });

    const data = await res.json();
    const parsed = JSON.parse(data.choices?.[0]?.message?.content || "{}");
    return {
      reply: parsed.reply || "",
      english_translation: parsed.english_translation || "",
      intent: parsed.intent || "General"
    };
  } catch {
    return generateFallbackLocalization(message, detected, target, persona);
  }
}

export default async (req) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  const url = new URL(req.url);

  if (url.pathname.endsWith("/health")) {
    return new Response(
      JSON.stringify({
        status: "online",
        service: "BhashaBridge AI Netlify Serverless Engine",
        nexconn_configured: Boolean(process.env.VITE_NEXCONN_APP_KEY || process.env.NEXCONN_APP_KEY)
      }),
      { status: 200, headers: corsHeaders }
    );
  }

  if (url.pathname.endsWith("/chat/localize") && req.method === "POST") {
    const start = performance.now();
    const body = await req.json();
    const message = body.message || "";
    const senderName = body.sender_name || "Guest User";
    const sourcePlatform = body.source_platform || "nexconn";
    const targetLanguage = body.target_language || "auto";
    const botPersona = body.bot_persona || "support";

    const detected = detectLanguageStyle(message);
    const aiOutput = await runLocalizer(message, detected, targetLanguage, botPersona);
    const latencyMs = Number((performance.now() - start).toFixed(1));

    return new Response(
      JSON.stringify({
        id: `msg_${Date.now()}`,
        source_platform: sourcePlatform,
        sender_name: senderName,
        original_message: message,
        detected_language: detected,
        output_language: targetLanguage === "auto" ? detected : capitalize(targetLanguage),
        localized_reply: aiOutput.reply,
        english_translation: aiOutput.english_translation,
        intent: aiOutput.intent,
        latency_ms: latencyMs,
        webhook_sync: ["nexconn-chat-ui", `${sourcePlatform}-bridge`]
      }),
      { status: 200, headers: corsHeaders }
    );
  }

  if (url.pathname.endsWith("/webhooks/dummy-bot") && req.method === "POST") {
    const body = await req.json();
    const platform = body.platform || "discord";
    const channelName = body.channel_name || "general";
    const userHandle = body.user_handle || "guest";
    const text = body.text || "";
    const targetLanguage = body.target_language || "auto";

    const detected = detectLanguageStyle(text);
    const aiOutput = await runLocalizer(text, detected, targetLanguage, "community");

    return new Response(
      JSON.stringify({
        status: "dispatched",
        bridge_route: `${platform.toUpperCase()} (#${channelName}) -> Nexconn Chat UI`,
        user: userHandle,
        detected_language: detected,
        bot_response_payload: {
          platform,
          channel: channelName,
          reply_text: aiOutput.reply,
          admin_english_note: aiOutput.english_translation
        }
      }),
      { status: 200, headers: corsHeaders }
    );
  }

  return new Response(JSON.stringify({ error: "Not Found" }), { status: 404, headers: corsHeaders });
};