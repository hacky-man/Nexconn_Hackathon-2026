import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Globe2, Bot, User, CheckCheck, Languages } from "lucide-react";

const STARTER_PROMPTS = [
  {
    label: "Manglish Order Query",
    text: "Eda machane, ente order ippo evide ethi? Delivery eppo kittum?",
    platform: "nexconn",
  },
  {
    label: "Malayalam Pricing",
    text: "നമസ്കാരം, ഈ പ്ലാനിന്റെ വില എത്രയാണ്? സൗജന്യ ട്രയൽ ഉണ്ടോ?",
    platform: "nexconn",
  },
  {
    label: "Discord Manglish Ping",
    text: "Chetta, ee bot Discord server-il engane add cheyyam?",
    platform: "discord",
  },
  {
    label: "Slack Support Ticket",
    text: "Namaskaram team, customer support-inu Malayalam reply automatic aayi pokumo?",
    platform: "slack",
  },
];

const PLATFORM_BADGES = {
  nexconn: { label: "Nexconn Chat UI", color: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30" },
  slack: { label: "Slack Dummy Bot", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
  discord: { label: "Discord Dummy Bot", color: "bg-violet-500/20 text-violet-300 border-violet-500/30" },
  webapp: { label: "Custom Web Widget", color: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
};

export default function NexconnChatPanel({
  messages,
  onSendMessage,
  isLoading,
  targetLanguage,
  setTargetLanguage,
  botPersona,
  setBotPersona,
}) {
  const [input, setInput] = useState("");
  const [showTranslations, setShowTranslations] = useState(true);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    onSendMessage(input.trim(), "nexconn");
    setInput("");
  };

  return (
    <div className="flex flex-col h-[640px] rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Nexconn Chat UI Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-b border-slate-800 bg-slate-900/90">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white font-bold shadow-lg shadow-indigo-500/25">
            N
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-slate-900 bg-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-white text-sm sm:text-base">
                #kerala-vernacular-hub
              </h2>
              <span className="rounded-full bg-indigo-500/15 px-2.5 py-0.5 text-[11px] font-medium text-indigo-300 border border-indigo-500/30">
                Nexconn Chat UI
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Auto-detecting Malayalam, Manglish & English in real time
            </p>
          </div>
        </div>

        {/* Dialect & Persona Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowTranslations(!showTranslations)}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium border transition ${
              showTranslations
                ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/30"
                : "bg-slate-800 text-slate-400 border-slate-700"
            }`}
            title="Toggle English Admin Subtitles"
          >
            <Languages className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Admin English</span>
          </button>

          <select
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-1.5 text-xs text-slate-200 focus:border-indigo-500 focus:outline-none"
          >
            <option value="auto">Reply: Auto-Match</option>
            <option value="malayalam">Reply: മലയാളം (Malayalam)</option>
            <option value="manglish">Reply: Manglish</option>
            <option value="english">Reply: English</option>
          </select>

          <select
            value={botPersona}
            onChange={(e) => setBotPersona(e.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-1.5 text-xs text-slate-200 focus:border-indigo-500 focus:outline-none"
          >
            <option value="support">Support Agent</option>
            <option value="community">Community Mod</option>
            <option value="sales">Sales Guide</option>
          </select>
        </div>
      </div>

      {/* Chat Message Stream */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5">
        {messages.map((item) => {
          const badge = PLATFORM_BADGES[item.source_platform] || PLATFORM_BADGES.nexconn;
          return (
            <div key={item.id} className="space-y-3">
              {/* Incoming User Bubble */}
              <div className="flex items-start justify-end gap-3">
                <div className="max-w-[80%] space-y-1 text-right">
                  <div className="flex items-center justify-end gap-2 text-[11px] text-slate-400">
                    <span className={`rounded-full border px-2 py-0.5 font-medium ${badge.color}`}>
                      {badge.label}
                    </span>
                    <span>{item.sender_name}</span>
                  </div>
                  <div className="inline-block rounded-2xl rounded-tr-sm bg-indigo-600 px-4 py-2.5 text-sm text-white shadow-md text-left">
                    {item.original_message}
                  </div>
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                  <User className="h-4 w-4" />
                </div>
              </div>

              {/* Localized AI Reply Bubble */}
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 text-white shadow-md">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="max-w-[82%] space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2 text-[11px]">
                    <span className="font-semibold text-cyan-300">Blabbler AI</span>
                    <span className="rounded bg-slate-800 px-1.5 py-0.5 text-slate-300 border border-slate-700">
                      Detected: {item.detected_language}
                    </span>
                    <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-emerald-300 border border-emerald-500/20">
                      {item.latency_ms} ms
                    </span>
                  </div>

                  <div className="rounded-2xl rounded-tl-sm border border-slate-700/80 bg-slate-800/90 px-4 py-3 text-sm text-slate-100 shadow-lg leading-relaxed">
                    <p>{item.localized_reply}</p>

                    {showTranslations && item.english_translation && (
                      <div className="mt-2.5 flex items-start gap-1.5 border-t border-slate-700/70 pt-2 text-xs text-slate-400">
                        <Globe2 className="h-3.5 w-3.5 shrink-0 text-cyan-400 mt-0.5" />
                        <span>
                          <strong className="text-slate-300">Admin Context:</strong>{" "}
                          {item.english_translation}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <CheckCheck className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Synced via Nexconn Chat SDK</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-3 text-xs text-cyan-300 animate-pulse">
            <Sparkles className="h-4 w-4" />
            <span>LangChain localizing vernacular response...</span>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick Starter Chips (Malayalam & Manglish) */}
      <div className="border-t border-slate-800/80 bg-slate-900/60 px-4 py-2.5">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <span className="shrink-0 text-[11px] font-medium text-slate-400">
            1-Click Test:
          </span>
          {STARTER_PROMPTS.map((chip, idx) => (
            <button
              key={idx}
              type="button"
              disabled={isLoading}
              onClick={() => onSendMessage(chip.text, chip.platform)}
              className="shrink-0 rounded-full border border-slate-700 bg-slate-800/90 px-3 py-1 text-xs text-slate-200 hover:border-indigo-500 hover:bg-indigo-500/15 transition disabled:opacity-50"
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Composer */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-slate-800 bg-slate-950/80 p-3.5"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type in Malayalam (നമസ്കാരം), Manglish (Eda, price ethraya?), or English..."
          className="flex-1 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 hover:from-indigo-500 hover:to-cyan-500 transition disabled:opacity-50"
        >
          <span>Send</span>
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}