import React, { useState } from 'react';
import LoginModal from './LoginModal';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <header className="bg-teal-500 shadow-md  top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* On mobile: vertical, on desktop: horizontal */}
          <div className="flex flex-col items-center sm:flex-row sm:justify-between py-4">
            <div className="logo flex items-center gap-2 mb-3 sm:mb-0">
              <img
                src="/images/logic.png"
                alt="Logiclead Logo"
                className="h-8 w-auto"
                style={{ maxHeight: '34px' }}
              />
            </div>
            {/* Stack buttons on mobile, side by side on desktop */}
            <nav className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center sm:justify-end">
              <button
                className="w-full sm:w-auto px-4 py-2 bg-white text-[#00716c] rounded-lg font-medium hover:bg-gray-100 transition"
                onClick={() => setShowLogin(true)}
              >
                💰 Wallet
              </button>
              <button
                className="w-full sm:w-auto px-4 py-2 bg-yellow-400 text-[#00716c] rounded-lg font-medium hover:bg-yellow-500 transition"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
            </nav>
          </div>
        </div>
      </header>
      <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
};

export default Header;
