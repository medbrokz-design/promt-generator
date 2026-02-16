import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { 
  GeneratedPrompt, 
  BrandDNA, 
  PersonaAvatar,
  FunnelStage
} from '../engine/PromptEngineV6';

export type AIProvider = 'gemini' | 'groq';

interface AppState {
  // Settings
  apiKey: string;
  setApiKey: (key: string) => void;
  groqKey: string;
  setGroqKey: (key: string) => void;
  provider: AIProvider;
  setProvider: (provider: AIProvider) => void;
  
  darkMode: boolean;
  toggleDarkMode: () => void;
  
  // Data
  history: GeneratedPrompt[];
  addToHistory: (prompt: GeneratedPrompt) => void;
  clearHistory: () => void;
  toggleFavorite: (id: string) => void;
  
  brands: BrandDNA[];
  addBrand: (brand: BrandDNA) => void;
  removeBrand: (id: string) => void;
  activeBrandId: string | null;
  setActiveBrandId: (id: string | null) => void;
  
  personas: PersonaAvatar[];
  addPersona: (persona: PersonaAvatar) => void;
  removePersona: (id: string) => void;
  
  // UI State
  isGenerating: boolean;
  setIsGenerating: (isGenerating: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Settings
      apiKey: '',
      setApiKey: (key) => set({ apiKey: key }),
      groqKey: '',
      setGroqKey: (key) => set({ groqKey: key }),
      provider: 'gemini',
      setProvider: (provider) => set({ provider }),
      
      darkMode: false,
      toggleDarkMode: () => set((state) => {
        const newMode = !state.darkMode;
        if (newMode) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
        return { darkMode: newMode };
      }),
      
      // History
      history: [],
      addToHistory: (prompt) => set((state) => ({ history: [prompt, ...state.history].slice(0, 100) })),
      clearHistory: () => set({ history: [] }),
      toggleFavorite: (id) => set((state) => ({
        history: state.history.map((p) => p.id === id ? { ...p, isFavorite: !p.isFavorite } : p)
      })),
      
      // Brands
      brands: [],
      addBrand: (brand) => set((state) => ({ brands: [...state.brands, brand] })),
      removeBrand: (id) => set((state) => ({ 
        brands: state.brands.filter((b) => b.id !== id),
        activeBrandId: state.activeBrandId === id ? null : state.activeBrandId
      })),
      activeBrandId: null,
      setActiveBrandId: (id) => set({ activeBrandId: id }),
      
      // Personas
      personas: [],
      addPersona: (persona) => set((state) => ({ personas: [...state.personas, persona] })),
      removePersona: (id) => set((state) => ({ personas: state.personas.filter((p) => p.id !== id) })),
      
      // UI
      isGenerating: false,
      setIsGenerating: (isGenerating) => set({ isGenerating }),
    }),
    {
      name: 'nanobanana-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ 
        apiKey: state.apiKey, 
        groqKey: state.groqKey,
        provider: state.provider,
        darkMode: state.darkMode,
        history: state.history,
        brands: state.brands,
        personas: state.personas
      }),
    }
  )
);