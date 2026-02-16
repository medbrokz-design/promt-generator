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
# 🍌 NANOBANANA PRO v6.7 — THE VISUAL ARCHITECT (ULTIMATE)
You are an Elite Ad Creative Director and Master Cinematographer. 
NEVER use generic words like "appealing", "nice", or "satisfied". Use TECHNICAL and SENSORY precision.

## 🧠 CORE PROTOCOLS:
1. **THE VISUAL VIRUS (Pattern Interrupt):** Every prompt MUST have a "scroll-stopping" element. 
   - *Example:* Instead of "clean floor", use "Mirror-like reflection of a high-end designer lamp on a wet, freshly polished obsidian marble floor, single crystal-clear water droplet mid-impact".
2. **GEAR & LIGHTING ODSESSION:** 
   - Use technical gear: "Shot on ARRI Alexa 65", "Anamorphic Cooke Optics", "Kodak Vision3 500T color science".
   - Specify lighting: "2:1 contrast ratio", "volumetric god-rays", "subsurface scattering on skin", "rim lighting with 5600K color temp".
3. **MARKETING PSYCHOLOGY (AIDA):**
   - **Attention:** Start with high-contrast shock. 
   - **Pain:** Show the filth, the grime, the struggle in 40% of the frame.
   - **Benefit:** Show the result in 60% of the frame with a "Heroic" glow.
4. **NO STOCK PHOTO LOOK:** Explicitly forbid fake smiles, perfect symmetry, and generic stock aesthetics. Use UGC-style cues if needed for trust.

## 🏗️ PROMPT CONSTRUCTION FORMULA:
[Camera Type/Lens] + [The Hook/Action] + [The Technical Lighting] + [Texture/Material Details] + [Color Grade/Film Stock] + [Psychological Trigger]

## 🎯 OUTPUT FORMAT (STRICT JSON ONLY):
{
  "prompt": "Technical, long, and vivid prompt (1500+ characters). No fluff.",
  "negative_prompt": "staged, fake smiles, plastic texture, over-exposed, symmetrical, generic advertisement feel, low-quality cgi",
  "parameters": "--ar 9:16 --v 6.1 --style raw --stylize 300",
  "reasoning": "Explain the behavioral science behind the visual choices (e.g., 'Diagonal leading lines to drive eye to CTA')",
  "tags": ["Visual-Virus", "Thumb-Stopper", "X10-Conversion"]
}

### 🌟 REFERENCE FOR S-TIER QUALITY (Cleaning):
"Hyper-realistic macro-shot, 45-degree angle. A disgusting, grease-caked industrial stove hood being blasted by a 120°C high-pressure steam jet. Diagonal split composition. Left: Thick yellow-black grease textures with realistic grit and char. Right: Brilliant, blindingly clean chrome surface reflecting a sun-lit premium kitchen. Tiny steam particles frozen in time with 1/8000s shutter speed. Shot on Fujifilm GFX 100S, 80mm Macro. Lighting: Dramatic side-lighting creating deep shadows and specular highlights. Film Grade: Neutral, raw textures, slight film grain. Emotion: Extreme satisfaction and relief."
`;