import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { Button } from '../components/ui/Button';
import { PromptEngineV6 } from '../engine/PromptEngineV6';
import { RefreshCcw, Sparkles, Copy, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const RemixTab = () => {
  const { brands, activeBrandId } = useAppStore();
  const [originalPrompt, setOriginalPrompt] = useState('');
  const [preset, setPreset] = useState<'leica' | 'kodak' | 'alexa' | 'macro'>('leica');
  const [remixedResult, setRemixedResult] = useState('');

  const activeBrand = brands.find(b => b.id === activeBrandId);

  const handleRemix = () => {
    if (!originalPrompt.trim()) return;
    
    // Применяем магию Heisenberg из нашего движка
    const result = PromptEngineV6.applyHeisenberg(originalPrompt, preset);
    setRemixedResult(result);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-amber-500 rounded-2xl shadow-lg shadow-amber-500/20">
            <RefreshCcw className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Heisenberg Remixer</h2>
            <p className="text-sm text-gray-500">Преврати любой промпт в фотореалистичный шедевр</p>
          </div>
        </div>

        <textarea
          value={originalPrompt}
          onChange={(e) => setOriginalPrompt(e.target.value)}
          placeholder="Вставь свой обычный промпт здесь... (например: 'Girl in Tokyo street')"
          className="w-full h-40 p-6 rounded-2xl border-2 border-gray-50 dark:border-gray-900 bg-gray-50 dark:bg-gray-900 focus:border-amber-500 focus:ring-0 transition-all text-lg mb-6"
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {(['leica', 'kodak', 'alexa', 'macro'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPreset(p)}
              className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border-2 ${
                preset === p 
                ? 'bg-amber-500 border-amber-500 text-white shadow-lg' 
                : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 text-gray-400 hover:border-amber-200'
              }`}
            >
              {p} Look
            </button>
          ))}
        </div>

        <Button 
          onClick={handleRemix} 
          fullWidth 
          size="lg" 
          icon={<Sparkles className="h-5 w-5" />}
          className="py-6 text-xl rounded-2xl"
        >
          Inject Heisenberg Sauce
        </Button>
      </div>

      <AnimatePresence>
        {remixedResult && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="bg-gray-900 rounded-3xl p-8 shadow-2xl border border-amber-500/30 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-amber-500 rounded-full">
                    <Zap className="h-3 w-3 text-white fill-current" />
                    <span className="text-[10px] font-black text-white uppercase">Heisenberg Optimized</span>
                </div>
            </div>

            <h3 className="text-amber-500 font-bold mb-4 uppercase tracking-widest text-sm flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Remixed Masterpiece
            </h3>
            
            <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap leading-relaxed">
              {remixedResult}
            </pre>

            <div className="mt-8 flex gap-4">
                <Button 
                    variant="secondary" 
                    className="flex-1 bg-white/10 border-white/10 hover:bg-white/20 text-white"
                    onClick={() => navigator.clipboard.writeText(remixedResult)}
                    icon={<Copy className="h-4 w-4" />}
                >
                    Copy Pro Prompt
                </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
