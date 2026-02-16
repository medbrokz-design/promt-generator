import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { PromptEngineV6 } from '../engine/PromptEngineV6';
import { Button } from '../components/ui/Button';
import { Trash2, CheckCircle, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

export const BrandTab = () => {
  const { brands, addBrand, removeBrand, activeBrandId, setActiveBrandId } = useAppStore();
  const [form, setForm] = useState({ name: '', industry: '', tone: '', targetAudience: '' });

  const handleCreate = () => {
    if (!form.name || !form.industry) return;
    const newBrand = PromptEngineV6.createBrandDNA(form);
    addBrand(newBrand);
    setForm({ name: '', industry: '', tone: '', targetAudience: '' });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
        <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Create Brand DNA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            placeholder="Brand Name (e.g. EcoClean)"
            className="px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
          />
          <input
            value={form.industry}
            onChange={e => setForm({ ...form, industry: e.target.value })}
            placeholder="Industry (e.g. Cleaning)"
            className="px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
          />
          <input
            value={form.tone}
            onChange={e => setForm({ ...form, tone: e.target.value })}
            placeholder="Tone (e.g. Friendly)"
            className="px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
          />
           <input
            value={form.targetAudience}
            onChange={e => setForm({ ...form, targetAudience: e.target.value })}
            placeholder="Target Audience"
            className="px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
          />
        </div>
        <Button onClick={handleCreate} className="mt-4" icon={<Plus className="h-4 w-4"/>}>
            Create Brand
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands.map((brand) => (
          <motion.div
            key={brand.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`p-5 rounded-2xl border-2 cursor-pointer transition-all relative group ${
              activeBrandId === brand.id
                ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20'
                : 'border-transparent bg-white dark:bg-gray-800 hover:border-gray-200 dark:hover:border-gray-600 shadow-md'
            }`}
            onClick={() => setActiveBrandId(activeBrandId === brand.id ? null : brand.id)}
          >
             <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                    onClick={(e) => { e.stopPropagation(); removeBrand(brand.id); }}
                    className="p-1.5 bg-red-100 text-red-500 rounded-lg hover:bg-red-200"
                >
                    <Trash2 className="h-4 w-4" />
                </button>
             </div>

            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-gray-900 dark:text-white">{brand.name}</h3>
              {activeBrandId === brand.id && <CheckCircle className="h-5 w-5 text-amber-500" />}
            </div>
            
            <div className="flex gap-1 mb-3">
               <span className="w-4 h-4 rounded-full border border-black/10" style={{ background: brand.colors.primary }} />
               <span className="w-4 h-4 rounded-full border border-black/10" style={{ background: brand.colors.secondary }} />
               <span className="w-4 h-4 rounded-full border border-black/10" style={{ background: brand.colors.accent }} />
            </div>

            <div className="space-y-1">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Tone:</span> {brand.toneOfVoice}
                </p>
                 <p className="text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Style:</span> {brand.visualStyle}
                </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
