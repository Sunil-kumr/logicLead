import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-8 text-center">
          {/* Logo and Intro - Centered */}
          <div className="flex flex-col items-center gap-2 mb-4">
            <img
              src="/images/logic.png" // Your logo image
              alt="Logiclead Logo"
              className="h-12 w-auto"
              style={{ maxHeight: '48px' }}
            />
    
            <p className="text-gray-400 mt-1">Your trusted FASTag recharge platform</p>
          </div>
          {/* Quick Links & Support - Centered and stacked */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-4 mb-6 w-full">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-white transition">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Support</h4>
              <p className="text-gray-400">24×7 Customer Support</p>
              <p className="text-gray-400">support@logiclead.in</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Logiclead. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
