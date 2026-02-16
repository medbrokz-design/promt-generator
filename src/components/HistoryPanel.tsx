import React from 'react';
import { GeneratedPrompt } from '../types';

interface HistoryPanelProps {
  history: GeneratedPrompt[];
  favorites: GeneratedPrompt[];
  onSelect: (prompt: GeneratedPrompt) => void;
  onToggleFavorite: (id: string) => void;
  onDelete: (id: string) => void;
  onClearHistory: () => void;
  isDark: boolean;
  activeTab: 'history' | 'favorites';
  onTabChange: (tab: 'history' | 'favorites') => void;
}

export const HistoryPanel: React.FC<HistoryPanelProps> = ({
  history,
  favorites,
  onSelect,
  onToggleFavorite,
  onDelete,
  onClearHistory,
  isDark,
  activeTab,
  onTabChange
}) => {
  const baseClasses = isDark 
    ? 'bg-gray-800 border-gray-700 text-white' 
    : 'bg-white border-gray-200 text-gray-800';

  const itemClasses = isDark
    ? 'bg-gray-700 hover:bg-gray-600 border-gray-600'
    : 'bg-gray-50 hover:bg-gray-100 border-gray-200';

  const items = activeTab === 'history' ? history : favorites;

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const businessTypeIcons: Record<string, string> = {
    cleaning: '🧹',
    repair: '🔧',
    beauty: '💇',
    fitness: '💪',
    restaurant: '🍽️',
    auto: '🚗',
    clothing: '👗',
    jewelry: '💎',
    electronics: '📱',
    cafe: '☕',
    bakery: '🎂',
    realestate: '🏠',
    medical: '🏥',
    education: '📚',
    pets: '🐾',
    travel: '✈️',
    flowers: '💐',
    photo: '📸'
  };

  return (
    <div className={`rounded-2xl border-2 ${baseClasses} transition-all duration-300 overflow-hidden`}>
      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => onTabChange('history')}
          className={`flex-1 py-3 px-4 font-medium transition-colors flex items-center justify-center gap-2
            ${activeTab === 'history' 
              ? 'bg-yellow-400 text-gray-900' 
              : isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
        >
          <span>📜</span> История ({history.length})
        </button>
        <button
          onClick={() => onTabChange('favorites')}
          className={`flex-1 py-3 px-4 font-medium transition-colors flex items-center justify-center gap-2
            ${activeTab === 'favorites' 
              ? 'bg-yellow-400 text-gray-900' 
              : isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
        >
          <span>⭐</span> Избранное ({favorites.length})
        </button>
      </div>

      {/* Content */}
      <div className="p-4 max-h-80 overflow-y-auto">
        {items.length === 0 ? (
          <div className="text-center py-8 opacity-60">
            <div className="text-4xl mb-2">{activeTab === 'history' ? '📜' : '⭐'}</div>
            <p>{activeTab === 'history' ? 'История пуста' : 'Нет избранных промптов'}</p>
            <p className="text-sm mt-1">
              {activeTab === 'history' 
                ? 'Сгенерированные промпты появятся здесь' 
                : 'Нажмите ⭐ чтобы сохранить'}
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={item.id}
                className={`p-3 rounded-xl border ${itemClasses} transition-all duration-200 cursor-pointer group`}
                onClick={() => onSelect(item)}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span>{businessTypeIcons[item.businessType] || '📄'}</span>
                      <span className="font-medium truncate">{item.input}</span>
                    </div>
                    <div className="text-xs opacity-60 flex items-center gap-2">
                      <span>{formatDate(item.timestamp)}</span>
                      <span>•</span>
                      <span>{item.settings.platform}</span>
                      <span>•</span>
                      <span>{item.mainPrompt.length} символов</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(item.id);
                      }}
                      className={`p-2 rounded-lg transition-colors ${
                        item.isFavorite 
                          ? 'text-yellow-500' 
                          : isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                      }`}
                      title={item.isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
                    >
                      {item.isFavorite ? '⭐' : '☆'}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDelete(item.id);
                      }}
                      className={`p-2 rounded-lg transition-colors ${
                        isDark ? 'hover:bg-red-900/50' : 'hover:bg-red-100'
                      } text-red-500`}
                      title="Удалить"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Clear button */}
      {activeTab === 'history' && history.length > 0 && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onClearHistory}
            className={`w-full py-2 rounded-lg text-sm font-medium transition-colors
              ${isDark ? 'bg-gray-700 hover:bg-red-900/50' : 'bg-gray-100 hover:bg-red-100'} text-red-500`}
          >
            🗑️ Очистить историю
          </button>
        </div>
      )}
    </div>
  );
};
