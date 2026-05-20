import express from "express";
import path from "path";
import dotenv from "dotenv";
import fs from "fs";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

// Copy generated app logo to public directory for PWA installation features
try {
  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const sourceIcon = path.join(process.cwd(), "src", "assets", "images", "nursing_logo_1779232523458.png");
  if (fs.existsSync(sourceIcon)) {
    fs.copyFileSync(sourceIcon, path.join(publicDir, "logo-192.png"));
    fs.copyFileSync(sourceIcon, path.join(publicDir, "logo-512.png"));
    console.log("Successfully copied PWA app brand logos to public directory!");
  } else {
    console.warn("WARNING: Source PWA icon was not found at:", sourceIcon);
  }
} catch (err) {
  console.error("Failed to copy PWA logos:", err);
}

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client lazily
let aiClient: GoogleGenAI | null = null;
function getGemini(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn("WARNING: GEMINI_API_KEY environment variable is not defined.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key || "",
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// AI Tutor chat proxy endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { history, message } = req.body;
    const ai = getGemini();

    const formattedHistory = (history || []).map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        ...formattedHistory,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: "You are an expert Nursing Professor and academic tutor. You are helping nursing students studying: Pediatric Medicine, Pediatric Nursing (Theory), Developmental Psychology, Evidence Based Nursing, and Skills & Teaching Strategies. Answer concisely, academically, and with empathy. Use Arabic and English translation when explaining complex terms to help Arab students learn faster."
      }
    });

    const reply = response.text || "Could not generate response.";
    res.json({ text: reply });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

// AI Quick Explainer endpoint
app.post("/api/explain", async (req, res) => {
  try {
    const { term, context } = req.body;
    const ai = getGemini();

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `Explain "${term}" with educational bullet points and an Arabic translation specifically for a nursing student, relative to this context: "${context || 'General Nursing context'}"`,
    });

    res.json({ text: response.text || "No explanation available." });
  } catch (error: any) {
    console.error("Gemini Explain Error:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode...");
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
