	import React, { useState, useEffect } from "react";
import { Sparkles, ShieldCheck, Activity, Layers, BookOpen } from "lucide-react";
import NexconnChatPanel from "./components/NexconnChatPanel";
import DummyBotSimulator from "./components/DummyBotSimulator";
import IntegrationGuideModal from "./components/IntegrationGuideModal";
import { initNexconnSession, dispatchToNexconnChannel } from "./services/nexconnClient";

const INITIAL_MESSAGES = [
  {
    id: "welcome_1",
    source_platform: "nexconn",
    sender_name: "Myself (Kochi)",
    original_message: "Namaskaram! Ee plugin Malayalam & Manglish randum handle cheyyumo?",
    detected_language: "Manglish",
    localized_reply:
      "Namaskaram! തീർച്ചയായും—Malayalam script-ilum Manglish-ilum English-ilum ningalkku samsarikkam. Slack, Discord, allenkil ningalude web app-ilekku 1-click-il connect cheyyam!",
    english_translation:
      "Greetings ! Definitely—you can chat in Malayalam script, Manglish, or English, and connect to Slack, Discord, or your web app in 1 click.",
    latency_ms: 42.5,
  },
];

export default function App() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [isLoading, setIsLoading] = useState(false);
  const [targetLanguage, setTargetLanguage] = useState("auto");
  const [botPersona, setBotPersona] = useState("support");
  const [sdkStatus, setSdkStatus] = useState({
    connected: false,
    mode: "Initializing Nexconn SDK...",
    appKeyPreview: "...",
  });
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const apiBase = import.meta.env.VITE_API_BASE_URL ?? (import.meta.env.DEV ? "http://localhost:8000" : "");

  useEffect(() => {
    initNexconnSession().then(setSdkStatus);
  }, []);

  const handleSendMessage = async (text, platform = "nexconn", senderName = "Live Tester") => {
    setIsLoading(true);
    try {
      const response = await fetch(`${apiBase}/api/chat/localize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          sender_name: senderName,
          source_platform: platform,
          target_language: targetLanguage,
          bot_persona: botPersona,
        }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, data]);
      await dispatchToNexconnChannel("kerala-vernacular-hub", data);
    } catch (error) {
      // Graceful offline fallback if backend isn't started yet
      setMessages((prev) => [
        ...prev,
        {
          id: `local_${Date.now()}`,
          source_platform: platform,
          sender_name: senderName,
          original_message: text,
          detected_language: "Manglish",
          localized_reply:
            "Backend server offline aanu! `uvicorn main:app --reload` start cheyyu—appo full LangChain AI live aakum.",
          english_translation:
            "Backend server is currently offline. Start FastAPI (`uvicorn main:app --reload`) to enable live LangChain responses.",
          latency_ms: 5.0,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950 text-slate-100">
      {/* Top Navbar */}
      <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl sticky top-0 z-30">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-cyan-500 to-emerald-400 text-slate-950 font-black shadow-lg shadow-indigo-500/30">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold tracking-tight text-white">
                  Blabbler AI
                </h1>
                <span className="rounded-md bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 px-2 py-0.5 text-[11px] font-semibold text-cyan-300 border border-cyan-500/30">
                  Nexconn Build Challenge 2026
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Omni-Channel Vernacular Chat Plugin • FastAPI + LangChain + Nexconn Chat UI
              </p>
            </div>
          </div>

          {/* Live Nexconn Telemetry Pill */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-3.5 py-1.5 text-xs">
              <span
                className={`h-2 w-2 rounded-full ${
                  sdkStatus.connected ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                }`}
              />
              <span className="text-slate-300 font-medium">{sdkStatus.mode}</span>
              <span className="text-slate-500">|</span>
              <span className="font-mono text-indigo-300">{sdkStatus.appKeyPreview}</span>
            </div>

            <button
              onClick={() => setIsGuideOpen(true)}
              className="flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/15 px-3.5 py-2 text-xs font-semibold text-white border border-white/10 transition"
            >
              <BookOpen className="h-3.5 w-3.5 text-cyan-300" />
              <span>Integration Docs</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace Grid */}
      <main className="mx-auto max-w-7xl px-6 py-6 space-y-6">
        {/* Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/50 px-4 py-3">
            <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
            <div>
              <p className="text-xs text-slate-400">Active Vernacular Engines</p>
              <p className="text-sm font-semibold text-white">
                Malayalam (മലയാളം) • Manglish • English
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/50 px-4 py-3">
            <Layers className="h-5 w-5 text-indigo-400 shrink-0" />
            <div>
              <p className="text-xs text-slate-400">Connected Bot Bridges</p>
              <p className="text-sm font-semibold text-white">
                Nexconn UI + Discord + Slack + Web SDK
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/50 px-4 py-3">
            <Activity className="h-5 w-5 text-cyan-400 shrink-0" />
            <div>
              <p className="text-xs text-slate-400">Total Localized Messages</p>
              <p className="text-sm font-semibold text-white">
                {messages.length} Real-Time Exchanges
              </p>
            </div>
          </div>
        </div>

        {/* Two-Column Interactive Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8">
            <NexconnChatPanel
              messages={messages}
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
              targetLanguage={targetLanguage}
              setTargetLanguage={setTargetLanguage}
              botPersona={botPersona}
              setBotPersona={setBotPersona}
            />
          </div>

          <div className="lg:col-span-4">
            <DummyBotSimulator
              isLoading={isLoading}
              onOpenGuide={() => setIsGuideOpen(true)}
              onTriggerBotMessage={(text, platform, handle) =>
                handleSendMessage(text, platform, handle)
              }
            />
          </div>
        </div>
      </main>

      <IntegrationGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        appKeyPreview={sdkStatus.appKeyPreview}
      />
    </div>
  );
}