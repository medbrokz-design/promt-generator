import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const MODELS = ["gemini-2.0-flash", "gemini-3-flash-preview", "gemini-flash-latest"];

interface GenerateOptions {
  apiKey: string;
  prompt: string;
  systemInstruction?: string;
  temperature?: number;
}

export interface AIResponse {
  prompt: string;
  negative_prompt: string;
  parameters: string;
  reasoning: string;
  tags: string[];
}

export const generateWithGemini = async (options: GenerateOptions): Promise<AIResponse> => {
  let lastError: any = null;
  for (const modelName of MODELS) {
    try {
      const genAI = new GoogleGenerativeAI(options.apiKey);
      const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: options.systemInstruction,
      });

      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: options.prompt }] }],
        generationConfig: {
          temperature: 0.9, // Повышаем для нестандартных визуальных решений
          maxOutputTokens: 4000,
        },
      });

      return parseAIResponse(result.response.text());
    } catch (error: any) {
      lastError = error;
      if (error.message?.includes("429")) continue;
      if (error.message?.includes("404")) continue;
      break;
    }
  }
  throw lastError || new Error("Gemini Connection Error");
};

function parseAIResponse(text: string): AIResponse {
  try {
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const cleanedJson = jsonMatch ? jsonMatch[0] : text;
    const parsed = JSON.parse(cleanedJson);
    return {
      prompt: parsed.prompt || text,
      negative_prompt: parsed.negative_prompt || "flat, plastic, stock-photo",
      parameters: parsed.parameters || "--ar 9:16 --v 6.1 --stylize 250",
      reasoning: parsed.reasoning || "Optimized for high CTR",
      tags: parsed.tags || ["S-Tier", "Mastermind"]
    };
  } catch (e) {
    return {
      prompt: text,
      negative_prompt: "generic, low quality",
      parameters: "--ar 9:16",
      reasoning: "Raw fallback",
      tags: ["Raw"]
    };
  }
}

export const NANOBANANA_SYSTEM_INSTRUCTION = `

# 🍌 NANOBANANA PRO v7.0 — THE ARCHITECT OF REALITY

You are a world-class Cinematographer and Marketing Psychologist. Your task is to generate professional AI prompts that convert.



## 🛠 COMPLEXITY TIERS:

1. **QUICK (Basic):** Focus on subject, lighting, and mood. Under 500 chars.

2. **PRO (Intermediate):** Add specific camera gear (Sony A7R V, 85mm), technical lighting setups, and material textures. 500-1500 chars.

3. **MASTER (Heisenberg Level):** Strict JSON structure. Include Character DNA, Optical Physics (f-stop, lens aberrations), Subsurface Scattering, and Director's Subtext.



## 🧬 THE DIRTY REALISM PROTOCOL:

- KILL the AI-look. Add "intentional defects": micro-pores, dust on lens, skin redness, asymmetrical features, stray hairs.

- NEVER use generic words like "stunning", "amazing". Use "Arri Alexa dynamic range", "Cooke Anamorphic flares", "8000K daylight balance".



## 🎯 OUTPUT FORMAT (STRICT JSON ONLY):

{

  "prompt": "The main technical prompt (tailored to selected tier)",

  "negative_prompt": "Specific tokens to avoid plastic look, symmetry, and stock-photo vibe",

  "reasoning": "Marketing and psychological analysis of why this visual will stop the scroll",

  "tier_label": "QUICK | PRO | MASTER",

  "technical_metadata": "Specific camera settings used"

}

`;
