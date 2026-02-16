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

    <div className="space-y-8">

      {/* --- COMMAND CENTER --- */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Left: Controls */}

        <div className="lg:col-span-4 space-y-6">

          <div className="bg-white dark:bg-gray-800/50 backdrop-blur-xl rounded-[2rem] p-6 shadow-xl border border-gray-100 dark:border-gray-700/50">

            <h3 className="text-[10px] font-black uppercase text-amber-500 tracking-[0.2em] mb-6 flex items-center gap-2">

                <BrainCircuit className="h-3 w-3" /> Command Center

            </h3>

            

            <div className="space-y-8">

                {/* Tiers */}

                <div className="space-y-3">

                    <label className="text-[10px] font-bold text-gray-400 uppercase">Output Complexity</label>

                    <div className="grid grid-cols-3 gap-2 bg-gray-50 dark:bg-gray-900/50 p-1.5 rounded-2xl border border-gray-100 dark:border-gray-700">

                        {(['quick', 'pro', 'master'] as const).map((t) => (

                            <button

                                key={t}

                                onClick={() => setTier(t)}

                                className={`py-2 rounded-xl text-[9px] font-black uppercase transition-all ${

                                    tier === t 

                                    ? 'bg-amber-500 text-white shadow-lg' 

                                    : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'

                                }`}

                            >

                                {t}

                            </button>

                        ))}

                    </div>

                </div>



                {/* Platform */}

                <div className="space-y-3">

                    <label className="text-[10px] font-bold text-gray-400 uppercase">Target Platform</label>

                    <div className="grid grid-cols-1 gap-2">

                        <select 

                            value={platform}

                            onChange={(e) => setPlatform(e.target.value)}

                            className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 font-bold text-xs appearance-none focus:border-amber-500 transition-colors"

                        >

                            <option value="instagram">📸 Instagram Visuals</option>

                            <option value="tiktok">🎵 TikTok Vertical</option>

                            <option value="youtube">▶️ YouTube Narrative</option>

                        </select>

                    </div>

                </div>



                {/* Heisenberg Mode */}

                <div className="pt-4 border-t border-gray-50 dark:border-gray-700/50">

                    <div 

                        onClick={() => setHeisenbergMode(!heisenbergMode)}

                        className={`group relative flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all border-2 ${

                            heisenbergMode 

                            ? 'bg-amber-500/5 border-amber-500/20 shadow-inner' 

                            : 'bg-gray-50 dark:bg-gray-900/20 border-transparent'

                        }`}

                    >

                        <div className="flex items-center gap-3">

                            <div className={`p-2 rounded-lg transition-colors ${heisenbergMode ? 'bg-amber-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-400'}`}>

                                <Zap className="h-4 w-4" />

                            </div>

                            <div>

                                <span className={`block text-xs font-black uppercase tracking-tight ${heisenbergMode ? 'text-amber-600 dark:text-amber-400' : 'text-gray-400'}`}>

                                    Heisenberg Engine

                                </span>

                                <span className="text-[9px] text-gray-400 font-medium">Dirty Realism Overdrive</span>

                            </div>

                        </div>

                        <div className={`w-8 h-4 rounded-full relative transition-colors ${heisenbergMode ? 'bg-amber-500' : 'bg-gray-300 dark:bg-gray-700'}`}>

                            <div className={`absolute top-0.5 w-2 h-2 bg-white rounded-full transition-all ${heisenbergMode ? 'left-5' : 'left-1'}`} />

                        </div>

                    </div>

                </div>

            </div>

          </div>



          {activeBrand && (

              <div className="bg-amber-500 rounded-[2rem] p-6 text-white shadow-2xl shadow-amber-500/20 relative overflow-hidden group">

                  <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">

                      <Wand2 className="h-32 w-32 rotate-12" />

                  </div>

                  <h4 className="text-[10px] font-black uppercase opacity-60 mb-1">Active Identity</h4>

                  <p className="text-xl font-black truncate">{activeBrand.name}</p>

                  <p className="text-[10px] font-bold mt-2 px-2 py-1 bg-white/20 rounded-full w-fit uppercase tracking-widest">{activeBrand.toneOfVoice}</p>

              </div>

          )}

        </div>



        {/* Right: Stage */}

        <div className="lg:col-span-8 space-y-6">

          <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 shadow-2xl border border-gray-100 dark:border-gray-700 h-full flex flex-col">

            <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] mb-6">Creative Brief</h3>

            

            <textarea

              value={input}

              onChange={(e) => setInput(e.target.value)}

              placeholder="Desribe your vision... (e.g. 'Cyber-luxury apartment in Mars')"

              className="flex-1 w-full p-0 bg-transparent border-none focus:ring-0 resize-none text-2xl font-medium placeholder:text-gray-200 dark:placeholder:text-gray-700 text-gray-900 dark:text-white"

            />

            

            <div className="mt-8 flex items-center gap-4">

                <Button 

                    onClick={handleGenerate} 

                    isLoading={isGenerating} 

                    size="lg" 

                    className="flex-1 py-6 text-xl rounded-[1.5rem] shadow-2xl shadow-amber-500/40"

                    icon={<Wand2 className="h-6 w-6" />}

                >

                    Ignite Engine

                </Button>

            </div>

          </div>

        </div>

      </div>



      {error && (

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-red-50 text-red-600 text-sm rounded-2xl flex items-center gap-2 border border-red-100">

            <AlertCircle className="h-4 w-4" /> {error}

        </motion.div>

      )}



      {/* --- OUTPUT STAGE --- */}

      <AnimatePresence>

        {generatedResult && (

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 pb-20">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                {/* Score Card */}

                <div className="bg-white dark:bg-gray-800 rounded-[2rem] p-6 shadow-xl border border-gray-100 dark:border-gray-700 text-center">

                    <h4 className="text-[9px] font-black uppercase text-gray-400 mb-2">Performance Grade</h4>

                    <div className="text-6xl font-black text-amber-500 mb-1">{generatedResult.ctr.grade}</div>

                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{generatedResult.ctr.score}% Accuracy</div>

                </div>



                {/* Analysis Card */}

                <div className="md:col-span-3 bg-white dark:bg-gray-800 rounded-[2rem] p-8 shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col justify-center">

                    <div className="flex items-center gap-2 mb-3">

                        <Sparkles className="h-4 w-4 text-amber-500" />

                        <h4 className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Director's Commentary</h4>

                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed italic font-serif">

                        "{generatedResult.aiData.reasoning}"

                    </p>

                </div>

            </div>



            {/* Main Prompt Card */}

            <div className="bg-gray-900 rounded-[3rem] p-10 shadow-3xl border border-white/5 relative group">

                <div className="absolute top-0 right-0 p-8">

                    <Button 

                        variant="secondary" 

                        size="sm" 

                        className="bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-xl" 

                        onClick={() => navigator.clipboard.writeText(`${generatedResult.prompt}\n\nNegative: ${generatedResult.aiData.negative_prompt}`)} 

                        icon={<Copy className="h-4 w-4"/>}

                    >

                        Copy Full Package

                    </Button>

                </div>



                <div className="flex items-center gap-2 mb-8">

                    <div className="h-2 w-2 bg-amber-500 rounded-full animate-pulse" />

                    <span className="text-xs font-black text-gray-500 uppercase tracking-[0.3em]">{tier} Logic Active</span>

                </div>



                <div className="space-y-10">

                    <div>

                        <h4 className="text-[10px] font-black uppercase text-amber-500/50 mb-4 tracking-widest">Master Prompt</h4>

                        <p className="text-xl text-gray-100 font-mono leading-relaxed select-all">

                            {generatedResult.prompt}

                        </p>

                    </div>



                    <div className="pt-10 border-t border-white/5">

                        <h4 className="text-[10px] font-black uppercase text-red-500/50 mb-4 tracking-widest">Negative Protocol</h4>

                        <p className="text-sm text-gray-500 font-mono leading-relaxed">

                            {generatedResult.aiData.negative_prompt}

                        </p>

                    </div>

                </div>

            </div>



            {/* Visual Preview */}

            <div className="bg-white dark:bg-gray-800 rounded-[3rem] p-3 shadow-3xl border border-gray-100 dark:border-gray-700 overflow-hidden group">

                <div className="relative rounded-[2.5rem] overflow-hidden">

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">

                        <div className="text-white">

                            <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Visual Concept</p>

                            <p className="text-2xl font-black">Architecture of {input}</p>

                        </div>

                    </div>

                    <img 

                        src={`https://image.pollinations.ai/prompt/${encodeURIComponent(generatedResult.prompt)}?nologo=true&width=1080&height=1920`} 

                        className="w-full h-auto transition-transform duration-[2s] group-hover:scale-105"

                        alt="AI Vision"

                    />

                </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>

  );

};


