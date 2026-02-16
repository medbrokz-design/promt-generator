import React from 'react';
import { PromptSettings } from '../types';

interface SettingsPanelProps {
  settings: PromptSettings;
  onChange: (settings: PromptSettings) => void;
  isDark: boolean;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({ settings, onChange, isDark }) => {
  const platforms = [
    { id: 'instagram', icon: '📸', name: 'Instagram' },
    { id: 'tiktok', icon: '🎵', name: 'TikTok' },
    { id: 'facebook', icon: '👤', name: 'Facebook' },
    { id: 'youtube', icon: '▶️', name: 'YouTube' },
    { id: 'telegram', icon: '✈️', name: 'Telegram' }
  ];

  const formats = [
    { id: 'feed', icon: '🖼️', name: 'Лента' },
    { id: 'stories', icon: '📱', name: 'Stories' },
    { id: 'reels', icon: '🎬', name: 'Reels' },
    { id: 'banner', icon: '🏷️', name: 'Баннер' },
    { id: 'thumbnail', icon: '🔲', name: 'Превью' }
  ];

  const lengths = [
    { id: 'short', icon: '📝', name: 'Короткий', desc: '~300 символов' },
    { id: 'medium', icon: '📄', name: 'Средний', desc: '~500 символов' },
    { id: 'long', icon: '📚', name: 'Длинный', desc: '~800 символов' }
  ];

  const languages = [
    { id: 'ru', icon: '🇷🇺', name: 'Русский' },
    { id: 'en', icon: '🇺🇸', name: 'English' },
    { id: 'mixed', icon: '🌐', name: 'Смешанный' }
  ];

  const baseClasses = isDark 
    ? 'bg-gray-800 border-gray-700 text-white' 
    : 'bg-white border-gray-200 text-gray-800';

  const activeClasses = isDark
    ? 'bg-yellow-500 border-yellow-400 text-gray-900'
    : 'bg-yellow-400 border-yellow-500 text-gray-900';

  return (
    <div className={`rounded-2xl p-4 md:p-6 border-2 ${baseClasses} transition-all duration-300`}>
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <span>⚙️</span> Настройки генерации
      </h3>

      {/* Platform Selection */}
      <div className="mb-4">
        <label className="text-sm font-medium mb-2 block opacity-70">Платформа</label>
        <div className="grid grid-cols-5 gap-2">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => onChange({ ...settings, platform: platform.id as PromptSettings['platform'] })}
              className={`p-2 rounded-lg border-2 transition-all duration-200 flex flex-col items-center gap-1 text-xs
                ${settings.platform === platform.id ? activeClasses : `${baseClasses} hover:border-yellow-400`}`}
            >
              <span className="text-lg">{platform.icon}</span>
              <span className="hidden sm:block">{platform.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Format Selection */}
      <div className="mb-4">
        <label className="text-sm font-medium mb-2 block opacity-70">Формат</label>
        <div className="grid grid-cols-5 gap-2">
          {formats.map((format) => (
            <button
              key={format.id}
              onClick={() => onChange({ ...settings, format: format.id as PromptSettings['format'] })}
              className={`p-2 rounded-lg border-2 transition-all duration-200 flex flex-col items-center gap-1 text-xs
                ${settings.format === format.id ? activeClasses : `${baseClasses} hover:border-yellow-400`}`}
            >
              <span className="text-lg">{format.icon}</span>
              <span className="hidden sm:block">{format.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Length Selection */}
      <div className="mb-4">
        <label className="text-sm font-medium mb-2 block opacity-70">Длина промпта</label>
        <div className="grid grid-cols-3 gap-2">
          {lengths.map((length) => (
            <button
              key={length.id}
              onClick={() => onChange({ ...settings, length: length.id as PromptSettings['length'] })}
              className={`p-3 rounded-lg border-2 transition-all duration-200 flex flex-col items-center gap-1
                ${settings.length === length.id ? activeClasses : `${baseClasses} hover:border-yellow-400`}`}
            >
              <span className="text-lg">{length.icon}</span>
              <span className="font-medium">{length.name}</span>
              <span className="text-xs opacity-60">{length.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Language Selection */}
      <div>
        <label className="text-sm font-medium mb-2 block opacity-70">Язык текста</label>
        <div className="grid grid-cols-3 gap-2">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => onChange({ ...settings, language: lang.id as PromptSettings['language'] })}
              className={`p-2 rounded-lg border-2 transition-all duration-200 flex items-center justify-center gap-2
                ${settings.language === lang.id ? activeClasses : `${baseClasses} hover:border-yellow-400`}`}
            >
              <span>{lang.icon}</span>
              <span className="font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
