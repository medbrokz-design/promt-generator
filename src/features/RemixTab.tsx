import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { Button } from '../components/ui/Button';
import { RefreshCcw, Sparkles, Copy, ArrowRight } from 'lucide-react';
import { generateWithGemini, NANOBANANA_SYSTEM_INSTRUCTION } from '../services/geminiService';
import { motion, AnimatePresence } from 'framer-motion';

export const RemixTab = () => {
  const { apiKey, setIsGenerating, isGenerating } = useAppStore();
  const [input, setInput] = useState('');
  const [result, setResult] = useState<any>(null);

  const handleRemix = async () => {
    if (!input || !apiKey) return;
    setIsGenerating(true);
    try {
      const systemPrompt = `${NANOBANANA_SYSTEM_INSTRUCTION}\n\nTASK: Take the user's weak or basic prompt and REMIX it into an S-Tier version. Improve lighting, composition, and psychological triggers.`;
      const data = await generateWithGemini({
        apiKey,
        prompt: `Remix this prompt: ${input}`,
        systemInstruction: systemPrompt
      });
      setResult(data);
    } catch (err) {
      alert("Error during remix. Check API Key.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <RefreshCcw className="h-5 w-5 text-amber-500" />
            Smart Prompt Remix
        </h2>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Вставьте сюда слабый промпт или просто сырую идею..."
          className="w-full h-32 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-amber-500 resize-none mb-4"
        />
        <Button onClick={handleRemix} isLoading={isGenerating} icon={<Sparkles className="h-4 w-4"/>}>
            Улучшить до S-Tier
        </Button>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold">✨ Ремикс-версия</h3>
                    <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(result.prompt)} icon={<Copy className="h-4 w-4"/>} />
                </div>
                <p className="text-sm font-mono text-gray-600 dark:text-gray-400 leading-relaxed">
                    {result.prompt} {result.parameters}
                </p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/30">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2">🤔 Что изменилось?</h3>
                <p className="text-sm text-amber-700 dark:text-amber-400 italic mb-4">
                    {result.reasoning}
                </p>
                <div className="flex flex-wrap gap-2">
                    {result.tags.map((tag: string) => (
                        <span key={tag} className="px-2 py-1 bg-white/50 dark:bg-black/20 rounded text-[10px] font-bold uppercase">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
