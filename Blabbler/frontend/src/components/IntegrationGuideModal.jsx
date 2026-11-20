import React, { useState } from "react";
import { X, Copy, Check, Terminal, Globe, Webhook } from "lucide-react";

export default function IntegrationGuideModal({ isOpen, onClose, appKeyPreview }) {
  const [activeTab, setActiveTab] = useState("web");
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const snippets = {
    web: `<!-- Paste before </body> in ANY HTML, WordPress, Shopify, or React App -->
<script
  src="https://cdn.blabbler.ai/nexconn-plugin.min.js"
  data-nexconn-app-key="${appKeyPreview || "YOUR_NEXCONN_APP_KEY"}"
  data-default-lang="malayalam,manglish,english"
  data-theme="midnight"
  async>
</script>`,
    react: `// 1. Install Nexconn SDKs: npm install @nexconn/engine @nexconn/chat @nexconn/chatui
import { BlabblerNexconnWidget } from "./components/NexconnChatPanel";

export default function CustomerSupportPage() {
  return (
    <BlabblerNexconnWidget
      nexconnAppKey="${appKeyPreview || "YOUR_NEXCONN_APP_KEY"}"
      allowedDialects={["malayalam", "manglish", "english"]}
      webhookEndpoint="http://localhost:8000/api/chat/localize"
    />
  );
}`,
    webhook: `# Point your Slack Outgoing Webhook or Discord Bot Event URL to:
POST http://localhost:8000/api/webhooks/dummy-bot
Content-Type: application/json

{
  "platform": "discord",
  "channel_name": "general-malayalam",
  "user_handle": "james_kochi",
  "text": "Eda, ee feature engane work cheyyum?",
  "target_language": "auto"
}`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
      <div className="w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
          <div>
            <h3 className="text-base font-bold text-white">
              Integrate Blabbler + Nexconn Into Any App (30 Seconds)
            </h3>
            <p className="text-xs text-slate-400">
              Drop-in SDK snippet & webhook endpoints for external apps
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-950/60 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab("web")}
            className={`flex items-center gap-1.5 rounded-t-lg px-4 py-2 text-xs font-semibold border-t border-x transition ${
              activeTab === "web"
                ? "border-slate-700 bg-slate-900 text-cyan-300"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Globe className="h-3.5 w-3.5" />
            <span>1. Any Website (HTML Script)</span>
          </button>
          <button
            onClick={() => setActiveTab("react")}
            className={`flex items-center gap-1.5 rounded-t-lg px-4 py-2 text-xs font-semibold border-t border-x transition ${
              activeTab === "react"
                ? "border-slate-700 bg-slate-900 text-cyan-300"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Terminal className="h-3.5 w-3.5" />
            <span>2. React / Next.js SDK</span>
          </button>
          <button
            onClick={() => setActiveTab("webhook")}
            className={`flex items-center gap-1.5 rounded-t-lg px-4 py-2 text-xs font-semibold border-t border-x transition ${
              activeTab === "webhook"
                ? "border-slate-700 bg-slate-900 text-cyan-300"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Webhook className="h-3.5 w-3.5" />
            <span>3. Slack / Discord Webhook</span>
          </button>
        </div>

        {/* Code Display */}
        <div className="p-6 space-y-4">
          <div className="relative rounded-xl border border-slate-800 bg-slate-950 p-4">
            <button
              onClick={handleCopy}
              className="absolute right-3 top-3 flex items-center gap-1.5 rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-indigo-600 transition"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? "Copied!" : "Copy Code"}</span>
            </button>
            <pre className="overflow-x-auto text-xs text-cyan-200 leading-relaxed pt-6 sm:pt-0">
              <code>{snippets[activeTab]}</code>
            </pre>
          </div>

          <div className="rounded-xl bg-indigo-500/10 border border-indigo-500/20 p-3.5 text-xs text-indigo-200 leading-relaxed">
            <strong>How it works:</strong> Any message sent from your website, Slack, or Discord hits{" "}
            <code className="text-cyan-300">/api/chat/localize</code>, gets translated/localized by LangChain, and mirrors live inside your{" "}
            <strong>Nexconn Chat UI</strong> workspace.
          </div>
        </div>
      </div>
    </div>
  );
}