import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { PromptEngineV6 } from '../engine/PromptEngineV6';
import { Button } from '../components/ui/Button';
import { Layers, ArrowRight, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const FunnelTab = () => {
  const { activeBrandId, brands } = useAppStore();
  const [input, setInput] = useState('');
  const [stages, setStages] = useState<any[]>([]);
  const [copied, setCopied] = useState<number | null>(null);

  const activeBrand = brands.find(b => b.id === activeBrandId);

  const handleGenerate = () => {
    if (!input) return;
    const funnel = PromptEngineV6.generateFunnel(input, activeBrand || undefined);
    setStages(funnel);
  };

  const copy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopied(idx);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Layers className="h-5 w-5 text-amber-500" />
            Smart Marketing Funnel (AIDA)
        </h2>
        <div className="flex gap-4">
            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Что рекламируем? (например, Химчистка диванов)"
                className="flex-1 px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
            />
            <Button onClick={handleGenerate} icon={<ArrowRight className="h-4 w-4"/>}>
                Создать воронку
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stages.map((stage, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-6 rounded-2xl border-2 shadow-lg relative bg-white dark:bg-gray-800 ${
                stage.stage === 'awareness' ? 'border-blue-500/20' :
                stage.stage === 'interest' ? 'border-green-500/20' :
                stage.stage === 'desire' ? 'border-purple-500/20' : 'border-red-500/20'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    stage.stage === 'awareness' ? 'bg-blue-100 text-blue-700' :
                    stage.stage === 'interest' ? 'bg-green-100 text-green-700' :
                    stage.stage === 'desire' ? 'bg-purple-100 text-purple-700' : 'bg-red-100 text-red-700'
                }`}>
                    {stage.stage}
                </span>
                <button onClick={() => copy(stage.prompt, i)} className="text-gray-400 hover:text-amber-500">
                    {copied === i ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </button>
            </div>

            <h3 className="font-bold text-gray-900 dark:text-white mb-2">🎣 Hook: {stage.hook}</h3>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl mb-4 text-xs font-mono text-gray-600 dark:text-gray-400 max-h-40 overflow-y-auto leading-relaxed border border-gray-100 dark:border-gray-700">
                {stage.prompt}
            </div>

            <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-tighter">
                <span className="text-gray-400">Target: {stage.psychologyTrigger}</span>
                <span className="text-amber-600">CTA: {stage.cta}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
