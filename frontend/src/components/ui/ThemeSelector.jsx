import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Palette, Check, Sun, Moon, Leaf, Sunset, Waves } from 'lucide-react';

const ThemeSelector = () => {
  const { currentTheme, themes, changeTheme, isThemeMenuOpen, toggleThemeMenu, closeThemeMenu } = useTheme();

  const getThemeIcon = (themeName) => {
    switch (themeName) {
      case 'light': return <Sun className="w-5 h-5" />;
      case 'dark': return <Moon className="w-5 h-5" />;
      case 'nature': return <Leaf className="w-5 h-5" />;
      case 'sunset': return <Sunset className="w-5 h-5" />;
      case 'ocean': return <Waves className="w-5 h-5" />;
      default: return <Palette className="w-5 h-5" />;
    }
  };

  const getThemeColors = (themeName) => {
    switch (themeName) {
      case 'light': return 'from-gray-100 to-white';
      case 'dark': return 'from-gray-800 to-gray-900';
      case 'nature': return 'from-green-100 to-emerald-200';
      case 'sunset': return 'from-orange-100 to-amber-200';
      case 'ocean': return 'from-cyan-100 to-blue-200';
      default: return 'from-gray-100 to-white';
    }
  };

  return (
    <div className="relative">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleThemeMenu}
        className={`p-3 rounded-xl transition-all duration-200 hover:scale-105 ${
          currentTheme === 'dark' 
            ? 'bg-gray-700 hover:bg-gray-600 text-white' 
            : 'bg-white hover:bg-gray-50 text-gray-700 shadow-lg border'
        }`}
        aria-label="Change theme"
      >
        {getThemeIcon(currentTheme)}
      </button>

      {/* Theme Menu */}
      {isThemeMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={closeThemeMenu}
          ></div>
          
          {/* Theme Options */}
          <div className={`absolute right-0 mt-2 w-72 rounded-2xl shadow-2xl border z-50 ${
            currentTheme === 'dark' 
              ? 'bg-gray-800 border-gray-600' 
              : 'bg-white border-gray-200'
          }`}>
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-4">
                <Palette className={`w-5 h-5 ${currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} />
                <h3 className={`font-semibold ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Choose Theme
                </h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {Object.entries(themes).map(([key, theme]) => (
                  <button
                    key={key}
                    onClick={() => changeTheme(key)}
                    className={`relative flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 hover:scale-105 ${
                      currentTheme === key
                        ? 'ring-2 ring-blue-500 ring-offset-2'
                        : 'hover:shadow-md'
                    }`}
                  >
                    {/* Theme Preview */}
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getThemeColors(key)} border-2 border-white shadow-lg flex items-center justify-center`}>
                      {getThemeIcon(key)}
                    </div>
                    
                    {/* Theme Info */}
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <span className={`font-medium ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {theme.name}
                        </span>
                        {currentTheme === key && (
                          <Check className="w-5 h-5 text-blue-500" />
                        )}
                      </div>
                      <p className={`text-sm ${currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        {key === 'light' && 'Clean and minimal'}
                        {key === 'dark' && 'Easy on the eyes'}
                        {key === 'nature' && 'Fresh and natural'}
                        {key === 'sunset' && 'Warm and energetic'}
                        {key === 'ocean' && 'Calm and peaceful'}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Footer */}
              <div className={`mt-4 pt-4 border-t text-center ${
                currentTheme === 'dark' ? 'border-gray-600 text-gray-400' : 'border-gray-200 text-gray-500'
              }`}>
                <p className="text-xs">Theme preference is saved automatically</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSelector;
