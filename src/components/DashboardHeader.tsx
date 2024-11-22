import React from 'react';
import { Bell, Download, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function DashboardHeader() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back, Clima Quest</h1>
        <p className="text-gray-600 dark:text-gray-400">Here's what's happening with your environmental impact</p>
      </div>
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleTheme}
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
        >
          {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
        </button>
        <button className="p-2 relative text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <Bell className="h-6 w-6" />
          <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></span>
        </button>
        <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          <Download className="h-5 w-5" />
          <span>Export Report</span>
        </button>
      </div>
    </div>
  );
}