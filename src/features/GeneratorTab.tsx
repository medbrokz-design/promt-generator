import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { Button } from '../components/ui/Button';
import { PromptEngineV6 } from '../engine/PromptEngineV6';
import { generateWithGemini, NANOBANANA_SYSTEM_INSTRUCTION, AIResponse } from '../services/geminiService';
import { generateWithGroq } from '../services/groqService';
import { Wand2, Copy, Star, Check, AlertCircle, Image as ImageIcon, Tag, BrainCircuit } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const GeneratorTab = () => {
  const { 
    apiKey, groqKey, provider,
    activeBrandId, brands, 
    addToHistory, 
    isGenerating, 
    setIsGenerating 
  } = useAppStore();

  const [input, setInput] = useState('');
  const [platform, setPlatform] = useState('instagram');
  const [generatedResult, setGeneratedResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const activeBrand = brands.find(b => b.id === activeBrandId);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setIsGenerating(true);
    setError(null);
    setGeneratedResult(null);

    try {
      const brandContext = activeBrand 
        ? `BRAND CONTEXT: Name: ${activeBrand.name}. Tone: ${activeBrand.toneOfVoice}. Style: ${activeBrand.visualStyle}. Colors: ${activeBrand.colors.primary}, ${activeBrand.colors.secondary}.` 
        : '';
      
      const systemPrompt = `${NANOBANANA_SYSTEM_INSTRUCTION}\nPLATFORM: ${platform}\n${brandContext}`;
      let aiData: AIResponse;

      if (provider === 'groq') {
        aiData = await generateWithGroq(groqKey, input, systemPrompt);
      } else {
        aiData = await generateWithGemini({ apiKey, prompt: input, systemInstruction: systemPrompt });
      }

      const result = {
        id: Date.now().toString(),
        input,
        prompt: aiData.prompt,
        aiData: aiData,
        ctr: PromptEngineV6.predictCTR(aiData.prompt),
        viral: PromptEngineV6.calculateViralScore(aiData.prompt),
        timestamp: Date.now(),
        platform,
        isFavorite: false,
      };

      setGeneratedResult(result);
      addToHistory(result);

    } catch (err: any) {
      setError(err.message || "Generation failed");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="О чем будет креатив? (например: Химчистка штор в Астане)"
          className="w-full h-32 p-4 rounded-xl border-2 border-gray-50 dark:border-gray-900 bg-gray-50 dark:bg-gray-900 focus:border-amber-500 focus:ring-0 resize-none transition-all text-lg"
        />
        
        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-4">
          <select 
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 font-bold text-xs"
          >
            <option value="instagram">📸 INSTAGRAM</option>
            <option value="tiktok">🎵 TIKTOK</option>
            <option value="youtube">▶️ YOUTUBE</option>
          </select>

          <Button onClick={handleGenerate} isLoading={isGenerating} size="lg" icon={<Wand2 className="h-5 w-5" />}>
            Generate with {provider.toUpperCase()}
          </Button>
        </div>
        
        {error && <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg">{error}</div>}
      </div>

      <AnimatePresence>
        {generatedResult && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-xl p-4 flex items-start gap-3">
                <BrainCircuit className="h-5 w-5 text-amber-600 shrink-0" />
                <div>
                    <h4 className="text-sm font-bold text-amber-800 dark:text-amber-300">Deep Reasoning ({provider})</h4>
                    <p className="text-sm text-amber-700 dark:text-amber-400 italic">"{generatedResult.aiData.reasoning}"</p>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">{generatedResult.ctr.grade}</div>
                        <h3 className="font-bold">Generated Prompt</h3>
                    </div>
                    <Button variant="secondary" size="sm" onClick={() => navigator.clipboard.writeText(generatedResult.prompt)} icon={<Copy className="h-4 w-4"/>}>Copy</Button>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl font-mono text-sm">
                    {generatedResult.prompt} {generatedResult.aiData.parameters}
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold mb-4 flex items-center gap-2"><ImageIcon className="h-5 w-5 text-amber-500" /> AI Preview</h3>
                <img 
                    src={`https://image.pollinations.ai/prompt/${encodeURIComponent(generatedResult.prompt)}?nologo=true`} 
                    className="w-full rounded-xl shadow-inner"
                    alt="Preview"
                />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};