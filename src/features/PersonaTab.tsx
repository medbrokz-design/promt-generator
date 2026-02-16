import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { PromptEngineV6 } from '../engine/PromptEngineV6';
import { Button } from '../components/ui/Button';
import { UserPlus, Trash2, Target, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PersonaTab = () => {
  const { personas, addPersona, removePersona } = useAppStore();
  const [form, setForm] = useState({ name: '', demographics: '', painPoints: '', desires: '' });

  const handleCreate = () => {
    if (!form.name) return;
    const newPersona = PromptEngineV6.createPersona({
      name: form.name,
      demographics: form.demographics,
      painPoints: form.painPoints.split(',').map(s => s.trim()).filter(Boolean),
      desires: form.desires.split(',').map(s => s.trim()).filter(Boolean)
    });
    addPersona(newPersona);
    setForm({ name: '', demographics: '', painPoints: '', desires: '' });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <UserPlus className="h-5 w-5 text-amber-500" />
            Создать Персону (ЦА)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            placeholder="Имя / Сегмент (например, Анна Мамочка)"
            className="px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
          />
          <input
            value={form.demographics}
            onChange={e => setForm({ ...form, demographics: e.target.value })}
            placeholder="Демография (Женщина, 25-35 лет)"
            className="px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
          />
          <textarea
            value={form.painPoints}
            onChange={e => setForm({ ...form, painPoints: e.target.value })}
            placeholder="Боли (через запятую: нет времени, дорого, грязно)"
            className="px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 md:col-span-2 h-20 resize-none"
          />
          <textarea
            value={form.desires}
            onChange={e => setForm({ ...form, desires: e.target.value })}
            placeholder="Желания (чистый дом, отдых, уют)"
            className="px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 md:col-span-2 h-20 resize-none"
          />
        </div>
        <Button onClick={handleCreate} className="mt-4" icon={<Zap className="h-4 w-4"/>}>
            Создать Персону
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
        {personas.map((persona) => (
          <motion.div
            key={persona.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-md group relative"
          >
            <button 
                onClick={() => removePersona(persona.id)}
                className="absolute top-4 right-4 p-1.5 bg-red-50 text-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <Trash2 className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl bg-amber-50 dark:bg-amber-900/20 p-2 rounded-xl">{persona.avatar}</span>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">{persona.name}</h3>
                <p className="text-xs text-gray-500">{persona.occupation}</p>
              </div>
            </div>

            <div className="space-y-3">
                <div>
                    <h4 className="text-xs font-bold text-red-500 uppercase flex items-center gap-1">
                        <Target className="h-3 w-3" /> Боли
                    </h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                        {persona.painPoints.map((p, i) => (
                            <span key={i} className="text-[10px] px-2 py-0.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full">
                                {p}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-xs font-bold text-green-500 uppercase flex items-center gap-1">
                        <Zap className="h-3 w-3" /> Желания
                    </h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                        {persona.desires.map((d, i) => (
                            <span key={i} className="text-[10px] px-2 py-0.5 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full">
                                {d}
                            </span>
                        ))}
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
