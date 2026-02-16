import React, { useState } from 'react';
import { PromptBlocks } from '../types';

interface PromptEditorProps {
  blocks: PromptBlocks;
  onChange: (blocks: PromptBlocks) => void;
  isDark: boolean;
  onClose: () => void;
}

export const PromptEditor: React.FC<PromptEditorProps> = ({ blocks, onChange, isDark, onClose }) => {
  const [editedBlocks, setEditedBlocks] = useState<PromptBlocks>(blocks);

  const blockLabels: Record<keyof PromptBlocks, { icon: string; label: string }> = {
    quality: { icon: '⭐', label: 'Качество' },
    contentType: { icon: '📷', label: 'Тип контента' },
    subject: { icon: '🎯', label: 'Объект' },
    setting: { icon: '🏠', label: 'Окружение' },
    lighting: { icon: '💡', label: 'Освещение' },
    colors: { icon: '🎨', label: 'Цвета' },
    style: { icon: '✨', label: 'Стиль и настроение' },
    composition: { icon: '📐', label: 'Композиция' },
    details: { icon: '🔍', label: 'Детали' },
    textOverlay: { icon: '📝', label: 'Текст на изображении' },
    cta: { icon: '🔘', label: 'Кнопка CTA' },
    format: { icon: '📱', label: 'Формат' },
    socialProof: { icon: '⭐', label: 'Социальное доказательство' }
  };

  const handleChange = (key: keyof PromptBlocks, value: string) => {
    setEditedBlocks(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    onChange(editedBlocks);
    onClose();
  };

  const baseClasses = isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800';
  const inputClasses = isDark 
    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
    : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500';

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`${baseClasses} rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden`}>
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <span>✏️</span> Редактор блоков промпта
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto max-h-[60vh] space-y-3">
          {(Object.keys(blockLabels) as Array<keyof PromptBlocks>).map((key) => (
            <div key={key} className="space-y-1">
              <label className="flex items-center gap-2 text-sm font-medium">
                <span>{blockLabels[key].icon}</span>
                {blockLabels[key].label}
              </label>
              <input
                type="text"
                value={editedBlocks[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                className={`w-full px-3 py-2 rounded-lg border-2 focus:border-yellow-400 focus:outline-none transition-colors ${inputClasses}`}
              />
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex gap-3">
          <button
            onClick={onClose}
            className={`flex-1 py-3 rounded-xl font-medium transition-colors
              ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Отмена
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-3 rounded-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:from-yellow-300 hover:to-orange-400 transition-colors"
          >
            💾 Сохранить изменения
          </button>
        </div>
      </div>
    </div>
  );
};
