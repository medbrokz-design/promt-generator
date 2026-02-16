import { AIResponse } from "./geminiService";

// Список актуальных моделей Groq на начало 2026
const GROQ_MODELS = [
  "deepseek-r1-distill-qwen-32b", 
  "llama-3.3-70b-versatile",
  "llama-3.1-70b-versatile",
  "mixtral-8x7b-32768"
];

export const generateWithGroq = async (
  apiKey: string,
  prompt: string,
  systemInstruction: string
): Promise<AIResponse> => {
  if (!apiKey) throw new Error("Groq API Key is required");

  let lastError: any = null;

  for (const model of GROQ_MODELS) {
    try {
      console.log(`Trying Groq model: ${model}`);
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: model,
          messages: [
            { role: "system", content: systemInstruction },
            { role: "user", content: prompt },
          ],
          response_format: { type: "json_object" }, 
          temperature: 0.7,
        }),
      });

      if (response.status === 404 || response.status === 400) {
        const errData = await response.json();
        if (errData.error?.message?.includes("decommissioned") || errData.error?.message?.includes("not found")) {
          console.warn(`Model ${model} is unavailable, trying next...`);
          continue;
        }
      }

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || `Groq API Error (${response.status})`);
      }

      const data = await response.json();
      const content = data.choices[0].message.content;
      
      return JSON.parse(content) as AIResponse;
    } catch (err: any) {
      lastError = err;
      if (err.message?.includes("unavailable") || err.message?.includes("not found") || err.message?.includes("decommissioned")) {
        continue;
      }
      throw err; // Если ошибка не в модели (например, ключ), пробрасываем дальше
    }
  }

  throw lastError || new Error("All Groq models failed or are decommissioned.");
};