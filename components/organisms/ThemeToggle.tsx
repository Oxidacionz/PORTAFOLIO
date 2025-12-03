import React, { useEffect, useState } from 'react';
import { ThemeMode } from '../../types';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>(ThemeMode.LIGHT);

  useEffect(() => {
    // Check local storage or system preference on mount
    const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
      setTheme(ThemeMode.DARK);
      document.documentElement.classList.add('dark');
    } else {
      setTheme(ThemeMode.LIGHT);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === ThemeMode.LIGHT) {
      setTheme(ThemeMode.DARK);
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      setTheme(ThemeMode.LIGHT);
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 group focus:outline-none"
      aria-label="Toggle Theme"
    >
      <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
        
        {/* Sun Representation (Visible in Light Mode) */}
        <div 
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            theme === ThemeMode.DARK ? 'scale-0 rotate-180 opacity-0' : 'scale-100 rotate-0 opacity-100'
          }`}
        >
          {/* Pure Energy Sphere - No emoji inside */}
          <div className="w-full h-full bg-yellow-400 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.9)] border-4 border-yellow-200 flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 to-transparent opacity-50"></div>
          </div>
        </div>

        {/* Black Hole Representation (Visible in Dark Mode) */}
        <div 
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            theme === ThemeMode.DARK ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-180 opacity-0'
          }`}
        >
          {/* The Singularity */}
          <div className="w-full h-full bg-black rounded-full shadow-[0_0_25px_rgba(147,51,234,0.8)] border-2 border-purple-500 overflow-hidden relative z-10">
             {/* Accretion Disk swirl */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-transparent animate-spin-slow opacity-60 rounded-[40%]"></div>
             <div className="absolute inset-2 bg-black rounded-full z-20"></div>
          </div>
        </div>

      </div>
    </button>
  );
};