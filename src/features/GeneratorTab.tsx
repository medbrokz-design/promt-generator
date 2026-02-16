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

  const [tier, setTier] = useState<'quick' | 'pro' | 'master'>('pro');

  const [heisenbergMode, setHeisenbergMode] = useState(true);

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

        ? `BRAND CONTEXT: ${activeBrand.name}. Tone: ${activeBrand.toneOfVoice}.` 

        : '';

      

      const userPrompt = `TASK: Generate a ${tier.toUpperCase()} prompt for ${input}. ${brandContext}. HEISENBERG REALISM: ${heisenbergMode ? 'ENABLED' : 'OFF'}`;

      

      const systemPrompt = `${NANOBANANA_SYSTEM_INSTRUCTION}\nPLATFORM: ${platform}\nTIER: ${tier}\nHEISENBERG_MODE: ${heisenbergMode}`;

      

      let aiData: AIResponse;

      if (provider === 'groq') {

        aiData = await generateWithGroq(groqKey, userPrompt, systemPrompt);

      } else {

        aiData = await generateWithGemini({ apiKey, prompt: userPrompt, systemInstruction: systemPrompt });

      }



      // Если режим Гейзенберга включен, делаем финальный инжект через наш движок

      if (heisenbergMode && tier !== 'master') {

        aiData.prompt = PromptEngineV6.applyHeisenberg(aiData.prompt, 'leica');

      }



      const result = {

        id: Date.now().toString(),

        input,

        prompt: aiData.prompt,

        aiData: aiData,

        ctr: PromptEngineV6.predictCTR(aiData.prompt),

        timestamp: Date.now(),

        platform,

        tier,

        heisenbergMode

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

      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">

        <div className="flex gap-2 mb-6">

          {(['quick', 'pro', 'master'] as const).map((t) => (

            <button

              key={t}

              onClick={() => setTier(t)}

              className={`flex-1 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${

                tier === t 

                ? 'bg-amber-500 text-white shadow-lg' 

                : 'bg-gray-100 dark:bg-gray-900 text-gray-400'

              }`}

            >

              {t} Tier

            </button>

          ))}

        </div>



        <textarea

          value={input}

          onChange={(e) => setInput(e.target.value)}

          placeholder="О чем будет креатив?..."

          className="w-full h-32 p-6 rounded-2xl border-2 border-gray-50 dark:border-gray-900 bg-gray-50 dark:bg-gray-900 focus:border-amber-500 focus:ring-0 resize-none transition-all text-xl font-medium"

        />

        

        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">

          <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900 p-2 rounded-2xl border border-gray-100 dark:border-gray-700">

            <select 

                value={platform}

                onChange={(e) => setPlatform(e.target.value)}

                className="px-4 py-2 rounded-xl bg-white dark:bg-gray-800 font-bold text-[10px] shadow-sm"

            >

                <option value="instagram">📸 INSTAGRAM</option>

                <option value="tiktok">🎵 TIKTOK</option>

                <option value="youtube">▶️ YOUTUBE</option>

            </select>



            <label className="flex items-center gap-2 cursor-pointer group">

                <input 

                    type="checkbox" 

                    checked={heisenbergMode} 

                    onChange={(e) => setHeisenbergMode(e.target.checked)}

                    className="hidden" 

                />

                <div className={`w-10 h-6 rounded-full transition-all relative ${heisenbergMode ? 'bg-amber-500' : 'bg-gray-300'}`}>

                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${heisenbergMode ? 'left-5' : 'left-1'}`} />

                </div>

                <span className={`text-[10px] font-black uppercase tracking-tighter ${heisenbergMode ? 'text-amber-500' : 'text-gray-400'}`}>

                    Heisenberg Engine

                </span>

            </label>

          </div>



          <Button 

            onClick={handleGenerate} 

            isLoading={isGenerating} 

            size="lg" 

            className="w-full sm:w-auto px-12 py-4 rounded-2xl shadow-xl shadow-amber-500/20"

            icon={<Wand2 className="h-5 w-5" />}

          >

            Generate {tier.toUpperCase()}

          </Button>

        </div>

        

        {error && <div className="mt-4 p-4 bg-red-50 text-red-600 text-sm rounded-xl flex items-center gap-2">

            <AlertCircle className="h-4 w-4" /> {error}

        </div>}

      </div>



      <AnimatePresence>

        {generatedResult && (

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="bg-amber-500 rounded-3xl p-6 text-white shadow-xl">

                    <h4 className="text-[10px] font-black uppercase opacity-60 mb-1">CTR Prediction</h4>

                    <div className="flex items-end gap-2">

                        <span className="text-5xl font-black">{generatedResult.ctr.grade}</span>

                        <span className="text-sm font-bold mb-1">Score: {generatedResult.ctr.score}%</span>

                    </div>

                </div>

                <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 flex items-start gap-4">

                    <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-2xl text-amber-600">

                        <BrainCircuit className="h-6 w-6" />

                    </div>

                    <div>

                        <h4 className="text-[10px] font-black uppercase text-gray-400 mb-1">Strategy Analysis</h4>

                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed italic">

                            "{generatedResult.aiData.reasoning}"

                        </p>

                    </div>

                </div>

            </div>



            <div className="bg-gray-900 rounded-[2.5rem] p-8 shadow-2xl border border-amber-500/20 relative overflow-hidden">

                <div className="flex items-center justify-between mb-6">

                    <div className="flex items-center gap-2">

                        <Tag className="h-4 w-4 text-amber-500" />

                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Master Prompt</span>

                    </div>

                    <Button variant="secondary" size="sm" className="bg-white/5 border-white/10 hover:bg-white/10 text-white" onClick={() => navigator.clipboard.writeText(generatedResult.prompt)} icon={<Copy className="h-4 w-4"/>}>Copy</Button>

                </div>

                <div className="text-gray-100 font-mono text-sm leading-relaxed whitespace-pre-wrap">

                    {generatedResult.prompt}

                </div>

                <div className="mt-6 pt-6 border-t border-white/5">

                    <h4 className="text-[10px] font-black uppercase text-red-500 mb-3 tracking-widest">Negative Prompt</h4>

                    <div className="text-gray-500 font-mono text-xs">

                        {generatedResult.aiData.negative_prompt}

                    </div>

                </div>

            </div>



            <div className="bg-white dark:bg-gray-800 rounded-3xl p-2 shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">

                <img 

                    src={`https://image.pollinations.ai/prompt/${encodeURIComponent(generatedResult.prompt)}?nologo=true&width=1080&height=1920`} 

                    className="w-full rounded-2xl shadow-inner"

                    alt="AI Visualization"

                />

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>

  );

};
