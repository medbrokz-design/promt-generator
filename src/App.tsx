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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 font-sans text-gray-900 dark:text-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-8 no-scrollbar scroll-smooth">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-white shadow-xl shadow-amber-500/30'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm border border-gray-100 dark:border-gray-700'
                }`}
              >
                <Icon className={`h-4 w-4 ${activeTab === tab.id ? 'text-white' : 'text-amber-500'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          {activeTab === 'generator' && <GeneratorTab />}
          {activeTab === 'brand' && <BrandTab />}
          {activeTab === 'personas' && <PersonaTab />}
          {activeTab === 'funnel' && <FunnelTab />}
          {activeTab === 'history' && <HistoryTab />}
          
          {['calendar', 'storyboard', 'competitor', 'remix', 'batch'].includes(activeTab) && (
              <div className="p-20 text-center space-y-4 bg-white dark:bg-gray-800 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700 shadow-inner">
                  <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl animate-pulse">🛠️</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-widest">Under Construction</h2>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Эта вкладка находится в процессе глубокой интеграции с Gemini API. Релиз ожидается в ближайшем патче v6.2.
                  </p>
              </div>
          )}
        </div>
      </main>

      {/* Footer / Status */}
      <footer className="max-w-7xl mx-auto px-4 py-8 flex items-center justify-between border-t border-gray-200 dark:border-gray-700 mt-12 opacity-50 text-[10px] font-mono">
          <span>NANOBANANA PRO v6.1.2</span>
          <span>© 2026 AI ORCHESTRATOR</span>
      </footer>
    </div>
  );
}

export default App;
