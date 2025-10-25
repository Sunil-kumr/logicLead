import React, { useState } from 'react';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="logo">
            <h1 className="text-2xl font-bold text-primary">Logiclead</h1>
          </div>
          <nav className="flex gap-3">
            <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-gray-200 transition">
              💰 Wallet
            </button>
            <button 
              className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-secondary transition"
              onClick={() => setShowLogin(true)}
            >
              Login / Signup
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
