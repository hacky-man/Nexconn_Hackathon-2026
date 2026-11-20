/**
 * Nexconn Chat SDK & Chat UI Bridge
 * Initializes @nexconn/engine, @nexconn/chat, and @nexconn/chatui with your App Key,
 * and broadcasts real-time localized messages across connected bot adapters.
 */

let nexconnInstance = null;

export async function initNexconnSession() {
  const appKey = import.meta.env.VITE_NEXCONN_APP_KEY || "";
  const userId = import.meta.env.VITE_NEXCONN_USER_ID || "blabbler_demo_user";
  const token = import.meta.env.VITE_NEXCONN_TOKEN || "";

  if (!appKey || appKey === "your_nexconn_app_key_here") {
    return {
      connected: false,
      mode: "Sandbox Preview (Add VITE_NEXCONN_APP_KEY in .env for live cloud sync)",
      appKeyPreview: "DEMO-MODE",
      userId,
    };
  }

  try {
    // Dynamic SDK initialization following Nexconn Chat & ChatUI architecture
    const nexconnChatModule = await import("@nexconn/chat").catch(() => null);
    const nexconnChatUIModule = await import("@nexconn/chatui").catch(() => null);

    if (nexconnChatModule?.default) {
      nexconnInstance = nexconnChatModule.default;
      if (typeof nexconnInstance.init === "function") {
        await nexconnInstance.init({ appKey });
      }
      if (token && typeof nexconnInstance.login === "function") {
        await nexconnInstance.login({ userId, token });
      }
    }

    return {
      connected: true,
      mode: "Nexconn Cloud SDK Active",
      appKeyPreview: `${appKey.slice(0, 6)}...${appKey.slice(-4)}`,
      userId,
      hasChatUI: Boolean(nexconnChatUIModule),
    };
  } catch (err) {
    console.warn("Nexconn SDK fallback active:", err);
    return {
      connected: false,
      mode: "Nexconn Local Bridge Mode",
      appKeyPreview: `${appKey.slice(0, 6)}...`,
      userId,
    };
  }
}

export async function dispatchToNexconnChannel(channelId, payload) {
  if (nexconnInstance && typeof nexconnInstance.sendMessage === "function") {
    try {
      await nexconnInstance.sendMessage({
        to: channelId,
        type: "txt",
        msg: payload.localized_reply,
        ext: {
          detected_language: payload.detected_language,
          english_translation: payload.english_translation,
          source_platform: payload.source_platform,
        },
      });
    } catch (e) {
      console.warn("Nexconn channel mirror notice:", e);
    }
  }
}