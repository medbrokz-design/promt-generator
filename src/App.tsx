import { useState } from 'react';
import { Header } from './components/layout/Header';
import { GeneratorTab } from './features/GeneratorTab';
import { BrandTab } from './features/BrandTab';
import { PersonaTab } from './features/PersonaTab';
import { FunnelTab } from './features/FunnelTab';
import { HistoryTab } from './features/HistoryTab';
import { 
  Wand2, 
  Layers, 
  Building2, 
  Users, 
  Calendar as CalendarIcon, 
  Video, 
  Users2, 
  RefreshCcw, 
  Package, 
  History 
} from 'lucide-react';

type Tab = 'generator' | 'funnel' | 'brand' | 'personas' | 'calendar' | 'storyboard' | 'competitor' | 'remix' | 'batch' | 'history';

const tabs: { id: Tab; label: string; icon: any }[] = [
  { id: 'generator', label: 'Generator', icon: Wand2 },
  { id: 'brand', label: 'Brand DNA', icon: Building2 },
  { id: 'personas', label: 'Personas', icon: Users },
  { id: 'funnel', label: 'Funnel', icon: Layers },
  { id: 'history', label: 'History', icon: History },
  { id: 'competitor', label: 'Competitor', icon: Users2 },
  { id: 'calendar', label: 'Calendar', icon: CalendarIcon },
  { id: 'storyboard', label: 'Storyboard', icon: Video },
  { id: 'remix', label: 'Remix', icon: RefreshCcw },
  { id: 'batch', label: 'Batch', icon: Package },
];

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('generator');
  const { brands, activeBrandId } = useAppStore();
  const activeBrand = brands.find(b => b.id === activeBrandId);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#050505] transition-colors duration-500 font-sans text-gray-900 dark:text-gray-100">
      <Header />

      <main className="max-w-[1600px] mx-auto px-6 py-10">
        {/* Studio Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div className="flex items-center gap-2 p-1.5 bg-white dark:bg-gray-800/50 backdrop-blur-xl rounded-[1.5rem] shadow-sm border border-gray-100 dark:border-gray-700/50 w-fit overflow-x-auto no-scrollbar">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${
                        isActive
                            ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20'
                            : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
                        }`}
                    >
                        <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-white' : 'text-amber-500/50'}`} />
                        {tab.label}
                    </button>
                    );
                })}
            </div>

            {activeBrand && (
                <div className="flex items-center gap-3 px-5 py-2.5 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
                    <div className="h-2 w-2 bg-amber-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                        DNA: {activeBrand.name}
                    </span>
                </div>
            )}
        </div>

        {/* Studio Content */}
        <div className="max-w-7xl mx-auto">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {activeTab === 'generator' && <GeneratorTab />}
            {activeTab === 'brand' && <BrandTab />}
            {activeTab === 'personas' && <PersonaTab />}
            {activeTab === 'funnel' && <FunnelTab />}
            {activeTab === 'history' && <HistoryTab />}
            {activeTab === 'remix' && <RemixTab />}
            
            {['calendar', 'storyboard', 'competitor', 'batch'].includes(activeTab) && (
                <div className="p-32 text-center space-y-6 bg-white dark:bg-gray-800/30 rounded-[3rem] border-2 border-dashed border-gray-100 dark:border-gray-700/50 shadow-inner">
                    <div className="w-24 h-24 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-500/20">
                        <Zap className="h-10 w-10 text-amber-500 animate-pulse" />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-[0.3em]">Module Locked</h2>
                    <p className="text-gray-400 max-w-md mx-auto font-medium">
                        Эта профессиональная функция требует интеграции с Heisenberg Core v7.2. 
                        <br/><span className="text-amber-500/50 text-xs font-bold mt-4 block">Coming in next OTA update</span>
                    </p>
                </div>
            )}
            </div>
        </div>
      </main>

      {/* Status Bar */}
      <footer className="max-w-[1600px] mx-auto px-6 py-10 flex items-center justify-between border-t border-gray-100 dark:border-gray-800 mt-20 opacity-30 text-[9px] font-black uppercase tracking-[0.4em]">
          <div className="flex items-center gap-4">
            <span>NanoBanana Protocol v7.0.1</span>
            <span className="h-1 w-1 bg-gray-400 rounded-full" />
            <span>Secure Connection Active</span>
          </div>
          <span>© 2026 AI ORCHESTRATOR LABS</span>
      </footer>
    </div>
  );
}

export default App;
