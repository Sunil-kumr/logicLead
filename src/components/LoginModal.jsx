import React from 'react';

const LoginModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8 relative">
        <button
          className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-red-600 transition"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form>
          <label className="block mb-3 font-medium text-gray-700">
            Email
            <input
              type="email"
              className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
              required
            />
          </label>
          <button
            className="w-full p-3 bg-primary text-white rounded-lg font-bold mt-4 hover:bg-secondary transition"
            type="submit"
          >
            Login
          </button>
          <label className="flex items-center mt-4">
            <input type="checkbox" className="h-5 w-5 text-primary" />
            <span className="ml-2 text-gray-700 text-sm">
              Keep me posted about sales and offers
            </span>
          </label>
          <div className="mt-4 text-xs text-gray-500 text-center">
            By proceeding, I accept the
            <a href="#" className="text-primary underline mx-1">T&C</a>
            and
            <a href="#" className="text-primary underline mx-1">Privacy Policy</a>
            <div className="mt-2 flex items-center justify-center text-gray-400">
              <span className="mr-2">🔒</span>Secured by Logiclead
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
