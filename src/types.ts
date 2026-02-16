/**
 * 🍌 NANO BANANA PRO v3.0 - ТИПЫ
 */

export interface PromptSettings {
  platform: 'instagram' | 'tiktok' | 'facebook' | 'youtube' | 'telegram';
  format: 'feed' | 'stories' | 'reels' | 'banner' | 'thumbnail';
  length: 'short' | 'medium' | 'long';
  language: 'ru' | 'en' | 'mixed';
}

export interface PromptBlocks {
  quality: string;
  contentType: string;
  subject: string;
  setting: string;
  lighting: string;
  colors: string;
  style: string;
  composition: string;
  details: string;
  textOverlay: string;
  cta: string;
  format: string;
  socialProof: string;
}

export interface GeneratedPrompt {
  id: string;
  input: string;
  mainPrompt: string;
  negativePrompt: string;
  blocks?: PromptBlocks;
  businessType: string;
  location: string;
  settings: PromptSettings;
  timestamp: number;
  isFavorite: boolean;
}

export interface BusinessConfig {
  contentType: string;
  style: string;
  lighting: string;
  colors: string;
  composition: string;
  mood: string;
  elements: string[];
  text: string;
  cta: string;
}

export type ThemeMode = 'light' | 'dark';

// Export для JSON
export interface PromptExport {
  version: string;
  generator: string;
  timestamp: string;
  input: string;
  businessType: string;
  location: string;
  settings: PromptSettings;
  mainPrompt: string;
  negativePrompt: string;
  blocks?: PromptBlocks;
  metadata: {
    promptLength: number;
    negativeLength: number;
    isFavorite: boolean;
  };
}

export interface MultiplePromptExport {
  version: string;
  generator: string;
  exportDate: string;
  totalPrompts: number;
  prompts: Array<{
    id: string;
    input: string;
    businessType: string;
    location: string;
    settings: PromptSettings;
    mainPrompt: string;
    negativePrompt: string;
    blocks?: PromptBlocks;
    timestamp: string;
    isFavorite: boolean;
  }>;
}
