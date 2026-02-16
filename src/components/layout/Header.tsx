import React, { useRef } from 'react';
import { Moon, Sun, Banana, Key, Download, Upload, Cpu, Zap } from 'lucide-react';
import { useAppStore, AIProvider } from '../../store/useAppStore';
import { Button } from '../ui/Button';

export const Header = () => {
  const { 
    darkMode, toggleDarkMode, activeBrandId, brands, 
    apiKey, setApiKey, groqKey, setGroqKey, 
    provider, setProvider 
  } = useAppStore();
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const activeBrand = brands.find(b => b.id === activeBrandId);

  const promptKey = (name: string, current: string, setter: (val: string) => void) => {
    const key = prompt(`Enter your ${name} API Key:`, current);
    if (key !== null) setter(key);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg border-b bg-white/80 border-amber-200 dark:bg-gray-900/90 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg">
               <Banana className="h-6 w-6 text-amber-500" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">NanoBanana Pro</h1>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Next-Gen Prompt Engine</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
             {/* Provider Switcher */}
             <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl mr-2">
                <button 
                    onClick={() => setProvider('gemini')}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1.5 transition-all ${provider === 'gemini' ? 'bg-white dark:bg-gray-700 text-amber-600 shadow-sm' : 'text-gray-400'}`}
                >
                    <Zap className="h-3 w-3" /> GEMINI
                </button>
                <button 
                    onClick={() => setProvider('groq')}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1.5 transition-all ${provider === 'groq' ? 'bg-white dark:bg-gray-700 text-amber-600 shadow-sm' : 'text-gray-400'}`}
                >
                    <Cpu className="h-3 w-3" /> GROQ (DEEPSEEK)
                </button>
             </div>

             <div className="flex gap-1 border-r pr-2 border-gray-200 dark:border-gray-700">
                <Button 
                    variant="ghost" size="sm" 
                    onClick={() => promptKey('Gemini', apiKey, setApiKey)}
                    className={provider === 'gemini' && !apiKey ? "text-red-500 animate-pulse" : "text-gray-400"}
                    title="Set Gemini Key"
                >
                    <Key className="h-4 w-4" />
                </Button>
                <Button 
                    variant="ghost" size="sm" 
                    onClick={() => promptKey('Groq', groqKey, setGroqKey)}
                    className={provider === 'groq' && !groqKey ? "text-red-500 animate-pulse" : "text-gray-400"}
                    title="Set Groq Key"
                >
                    <Cpu className="h-4 w-4" />
                </Button>
             </div>

            <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};