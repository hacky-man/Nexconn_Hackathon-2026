import React, { useState } from "react";
import { Bot, Power, SendHorizontal, Radio, Code2 } from "lucide-react";

const DUMMY_BOTS = [
  {
    id: "discord",
    name: "Discord Community Bot",
    handle: "@KeralaDevsBot#2026",
    channel: "#general-malayalam",
    sample: "Machane, hackathon submission deadline November 22 alle?",
    accent: "indigo",
  },
  {
    id: "slack",
    name: "Slack Support Bot",
    handle: "@NexconnHelpDesk",
    channel: "#customer-care-kochi",
    sample: "നമസ്കാരം, എന്റെ അക്കൗണ്ട് ആക്ടിവേറ്റ് ചെയ്യാൻ സഹായിക്കാമോ?",
    accent: "emerald",
  },
  {
    id: "webapp",
    name: "Custom E-Commerce Widget",
    handle: "ShopKerala Embedded Chat",
    channel: "checkout-support",
    sample: "Chechi, Cash on Delivery Kochi-yil available aano?",
    accent: "amber",
  },
];

export default function DummyBotSimulator({ onTriggerBotMessage, onOpenGuide, isLoading }) {
  const [activeBots, setActiveBots] = useState({
    discord: true,
    slack: true,
    webapp: true,
  });
  const [customTexts, setCustomTexts] = useState({
    discord: DUMMY_BOTS[0].sample,
    slack: DUMMY_BOTS[1].sample,
    webapp: DUMMY_BOTS[2].sample,
  });

  const toggleBot = (id) => {
    setActiveBots((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-4">
      {/* Header Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              <Radio className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm">
                Instant Dummy Bot Bridge
              </h3>
              <p className="text-xs text-slate-400">
                1-Click Plugin Activation & Webhook Tester
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenGuide}
            className="flex items-center gap-1.5 rounded-xl bg-indigo-500/15 px-3 py-2 text-xs font-semibold text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/25 transition"
          >
            <Code2 className="h-4 w-4" />
            <span>Embed Code</span>
          </button>
        </div>
      </div>

      {/* Dummy Bot Cards */}
      {DUMMY_BOTS.map((bot) => {
        const isOn = activeBots[bot.id];
        return (
          <div
            key={bot.id}
            className={`rounded-2xl border p-4 transition-all ${
              isOn
                ? "border-slate-700/90 bg-slate-900/80 shadow-lg"
                : "border-slate-800/60 bg-slate-950/50 opacity-65"
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2.5">
                <Bot className="h-5 w-5 text-cyan-400" />
                <div>
                  <h4 className="text-sm font-semibold text-white">{bot.name}</h4>
                  <p className="text-[11px] text-slate-400">
                    {bot.handle} • <span className="text-slate-300">{bot.channel}</span>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => toggleBot(bot.id)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold border transition ${
                  isOn
                    ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                    : "bg-slate-800 text-slate-400 border-slate-700"
                }`}
              >
                <Power className="h-3 w-3" />
                <span>{isOn ? "Active" : "Paused"}</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                disabled={!isOn}
                value={customTexts[bot.id]}
                onChange={(e) =>
                  setCustomTexts((prev) => ({ ...prev, [bot.id]: e.target.value }))
                }
                className="flex-1 rounded-xl border border-slate-800 bg-slate-950/90 px-3 py-2 text-xs text-slate-200 focus:border-indigo-500 focus:outline-none disabled:opacity-50"
              />
              <button
                type="button"
                disabled={!isOn || isLoading}
                onClick={() =>
                  onTriggerBotMessage(customTexts[bot.id], bot.id, bot.handle)
                }
                className="flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-indigo-600 px-3.5 py-2 text-xs font-semibold text-white border border-slate-700 hover:border-indigo-500 transition disabled:opacity-40"
              >
                <span>Fire</span>
                <SendHorizontal className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}