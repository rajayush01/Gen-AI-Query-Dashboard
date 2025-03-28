import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import QueryInput from './components/QueryInput';
import QueryHistory from './components/QueryHistory';
import SummaryStats from './components/SummaryStats';
import ResultsDisplay from './components/ResultDisplay';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div 
      className={`
        min-h-screen 
        ${darkMode ? 'bg-gradient-to-br from-[#121212] via-[#1e1e1e] to-[#0a0a0a] text-gray-100' : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900'}
        p-6 md:p-10 
        transition-all 
        duration-300 
        ease-in-out
      `}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-12 animate-fade-in">
          <div>
            <h1 className={`
              text-3xl md:text-5xl 
              font-extrabold 
              tracking-tight 
              ${darkMode ? 'text-white' : 'text-gray-800'}
              transition-colors
            `}>
              Gen AI Query Dashboard
            </h1>
            <p className={`
              mt-2 
              text-sm md:text-base 
              ${darkMode ? 'text-gray-400' : 'text-gray-600'}
              transition-colors
            `}>
              Powerful insights at your fingertips
            </p>
          </div>

          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`
              p-2 rounded-full 
              transition-all 
              duration-300 
              hover:scale-110 
              focus:outline-none 
              ${darkMode 
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
            `}
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <QueryInput />
            <ResultsDisplay />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <SummaryStats />
            <QueryHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;