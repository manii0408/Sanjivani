import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DonationSidebar from '../components/DonationSidebar';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>

      {/* Header */}
      
      <header className=" p-4 shadow-md bg-gray-100 dark:bg-gray-800 flex justify-end items-center">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-4 text-red-700 dark:text-red-400" style={{fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: '55px', textAlign: 'center'}}>संजीवनी
        </h1>
        
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-300 dark:bg-gray-600 mr-2 "
        >
          {isDarkMode ? '☀' : '🌙'}
        </button>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-full bg-gray-300 dark:bg-gray-600 "
        >
          ☰
        </button>
        
        
      </header>
      
      

      {/* Sidebar */}
      <DonationSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

      {/* Main Content */}
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;