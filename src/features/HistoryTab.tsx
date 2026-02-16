import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { Button } from '../components/ui/Button';
import { Trash2, Search, Star, ExternalLink, Calendar, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const HistoryTab = () => {
  const { history, clearHistory, toggleFavorite, removeHistoryItem } = useAppStore();
  const [search, setSearch] = useState('');

  const filtered = history.filter(item => 
    item.input.toLowerCase().includes(search.toLowerCase()) ||
    item.prompt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Поиск по истории..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm"
            />
        </div>
        <Button variant="danger" size="sm" onClick={clearHistory} icon={<Trash2 className="h-4 w-4"/>}>
            Очистить историю
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <AnimatePresence>
        {filtered.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`p-5 rounded-2xl bg-white dark:bg-gray-800 border shadow-sm group relative ${
                item.isFavorite ? 'border-amber-400 dark:border-amber-600' : 'border-gray-100 dark:border-gray-700'
            }`}
          >
            <div className="flex flex-col md:flex-row gap-4">
                {/* Meta info */}
                <div className="w-full md:w-48 shrink-0">
                    <div className="flex items-center gap-2 mb-2">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                            item.ctr.grade === 'S' ? 'bg-purple-100 text-purple-600' :
                            item.ctr.grade === 'A' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                        }`}>
                            {item.ctr.grade}
                        </span>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-400 flex items-center gap-1">
                                <Calendar className="h-2 w-2" /> {new Date(item.timestamp).toLocaleDateString()}
                            </span>
                            <span className="text-xs font-bold text-gray-700 dark:text-gray-300 truncate max-w-[120px]">
                                {item.input}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-[9px] uppercase font-bold text-gray-500">
                            {item.platform}
                        </span>
                        <span className="px-2 py-0.5 bg-amber-50 dark:bg-amber-900/20 rounded text-[9px] uppercase font-bold text-amber-600">
                            CTR: {item.ctr.score}%
                        </span>
                    </div>
                </div>

                {/* Content preview */}
                <div className="flex-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 italic mb-2">
                        {item.prompt}
                    </p>
                    <div className="flex gap-2">
                        <button 
                            onClick={() => toggleFavorite(item.id)}
                            className={`p-1.5 rounded-lg border transition-all ${
                                item.isFavorite ? 'bg-amber-100 border-amber-300 text-amber-600' : 'bg-gray-50 border-gray-100 text-gray-400'
                            }`}
                        >
                            <Star className={`h-4 w-4 ${item.isFavorite ? 'fill-amber-500' : ''}`} />
                        </button>
                        <button 
                            onClick={() => {
                                // Logic to "re-activate" this prompt in generator
                            }}
                            className="p-1.5 rounded-lg bg-gray-50 border border-gray-100 text-gray-400 hover:text-amber-500 transition-all"
                        >
                            <ExternalLink className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
          </motion.div>
        ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
