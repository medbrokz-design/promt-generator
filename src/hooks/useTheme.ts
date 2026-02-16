import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { ThemeMode } from '../types';

export function useTheme(): [ThemeMode, () => void] {
  const [theme, setTheme] = useLocalStorage<ThemeMode>('theme', 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return [theme, toggleTheme];
}
