import React, { useState } from 'react';
import { GeneratedPrompt } from '../types';

interface PromptOutputProps {
  prompt: GeneratedPrompt | null;
  onEdit: () => void;
  onToggleFavorite: () => void;
  onRegenerate: () => void;
  isDark: boolean;
}

export const PromptOutput: React.FC<PromptOutputProps> = ({
  prompt,
  onEdit,
  onToggleFavorite,
  onRegenerate,
  isDark
}) => {
  const [copiedMain, setCopiedMain] = useState(false);
  const [copiedNegative, setCopiedNegative] = useState(false);
  const [copiedFull, setCopiedFull] = useState(false);

  if (!prompt) {
    return (
      <div className={`rounded-2xl p-8 border-2 border-dashed transition-all duration-300
        ${isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-300 bg-gray-50'}`}>
        <div className="text-center opacity-60">
          <div className="text-6xl mb-4">🍌</div>
          <h3 className="text-xl font-bold mb-2">Готов к генерации!</h3>
          <p>Введите запрос выше и нажмите "Сгенерировать"</p>
        </div>
      </div>
    );
  }

  const copyToClipboard = async (text: string, type: 'main' | 'negative' | 'full') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'main') {
        setCopiedMain(true);
        setTimeout(() => setCopiedMain(false), 2000);
      } else if (type === 'negative') {
        setCopiedNegative(true);
        setTimeout(() => setCopiedNegative(false), 2000);
      } else {
        setCopiedFull(true);
        setTimeout(() => setCopiedFull(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const fullPrompt = `${prompt.mainPrompt}\n\nNegative: ${prompt.negativePrompt}`;

  const baseClasses = isDark 
    ? 'bg-gray-800 border-gray-700 text-white' 
    : 'bg-white border-gray-200 text-gray-800';

  const textAreaClasses = isDark
    ? 'bg-gray-900 border-gray-600 text-gray-100'
    : 'bg-gray-50 border-gray-300 text-gray-800';

  const businessTypeLabels: Record<string, string> = {
    cleaning: '🧹 Клининг',
    repair: '🔧 Ремонт',
    beauty: '💇 Красота',
    fitness: '💪 Фитнес',
    restaurant: '🍽️ Ресторан',
    auto: '🚗 Авто',
    clothing: '👗 Одежда',
    jewelry: '💎 Ювелирка',
    electronics: '📱 Электроника',
    cafe: '☕ Кафе',
    bakery: '🎂 Выпечка',
    realestate: '🏠 Недвижимость',
    medical: '🏥 Медицина',
    education: '📚 Образование',
    pets: '🐾 Питомцы',
    travel: '✈️ Путешествия',
    flowers: '💐 Цветы',
    photo: '📸 Фото'
  };

  return (
    <div className={`rounded-2xl border-2 ${baseClasses} transition-all duration-300 overflow-hidden`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-yellow-400/10 to-orange-400/10">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <span className="text-2xl">✨</span>
            <div>
              <h3 className="font-bold">Готовый промпт</h3>
              <div className="text-sm opacity-70 flex items-center gap-2 flex-wrap">
                <span>{businessTypeLabels[prompt.businessType] || '📄 Общий'}</span>
                {prompt.location && (
                  <>
                    <span>•</span>
                    <span>📍 {prompt.location}</span>
                  </>
                )}
                <span>•</span>
                <span>{prompt.mainPrompt.length} символов</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleFavorite}
              className={`p-2 rounded-lg transition-all duration-200 ${
                prompt.isFavorite 
                  ? 'bg-yellow-400 text-gray-900' 
                  : isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              title={prompt.isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
            >
              {prompt.isFavorite ? '⭐' : '☆'}
            </button>
            <button
              onClick={onEdit}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              title="Редактировать блоки"
            >
              ✏️
            </button>
            <button
              onClick={onRegenerate}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              title="Перегенерировать"
            >
              🔄
            </button>
          </div>
        </div>
      </div>

      {/* Main Prompt */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <label className="font-medium flex items-center gap-2">
            <span>📝</span> Основной промпт
          </label>
          <button
            onClick={() => copyToClipboard(prompt.mainPrompt, 'main')}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1
              ${copiedMain 
                ? 'bg-green-500 text-white' 
                : 'bg-yellow-400 hover:bg-yellow-300 text-gray-900'}`}
          >
            {copiedMain ? '✓ Скопировано!' : '📋 Копировать'}
          </button>
        </div>
        <textarea
          readOnly
          value={prompt.mainPrompt}
          className={`w-full h-40 p-4 rounded-xl border-2 resize-none focus:outline-none focus:border-yellow-400 font-mono text-sm ${textAreaClasses}`}
        />
      </div>

      {/* Negative Prompt */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between mb-2">
          <label className="font-medium flex items-center gap-2">
            <span>🚫</span> Negative Prompt
          </label>
          <button
            onClick={() => copyToClipboard(prompt.negativePrompt, 'negative')}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1
              ${copiedNegative 
                ? 'bg-green-500 text-white' 
                : isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            {copiedNegative ? '✓ Скопировано!' : '📋 Копировать'}
          </button>
        </div>
        <div className={`p-3 rounded-xl border-2 font-mono text-sm ${textAreaClasses}`}>
          {prompt.negativePrompt}
        </div>
      </div>

      {/* Copy Full Button */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => copyToClipboard(fullPrompt, 'full')}
          className={`w-full py-3 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2
            ${copiedFull 
              ? 'bg-green-500 text-white' 
              : 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-gray-900'}`}
        >
          {copiedFull ? '✓ Полный промпт скопирован!' : '📋 Копировать полный промпт'}
        </button>
      </div>
    </div>
  );
};
