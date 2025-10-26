import React, { useState } from 'react';

const Hero = () => {
  const [vehicle, setVehicle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Proceeding with vehicle number: ${vehicle}`);
  };

  return (
    <section
      className="bg-gradient-to-tr from-purple-50 via-blue-50 to-white min-h-[600px] flex items-center justify-center py-16"
      style={{ minHeight: '600px' }}
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-12 px-4 sm:px-8">
        {/* Left Side - Headline and Features */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 text-center lg:text-left leading-tight">
            FASTag Recharge <br />Online at Logiclead
          </h1>
          <ul className="space-y-4 text-lg text-gray-800 font-medium text-center lg:text-left">
            <li className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="text-green-500 text-xl">●</span> Multiple Payment Option
            </li>
            <li className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="text-green-500 text-xl">●</span> Multiple Discounts & Offers for FASTag
            </li>
            <li className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="text-green-500 text-xl">●</span> 24×7 Customer Support
            </li>
          </ul>
        </div>
        {/* Right Side - Form/Box */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl border px-8 py-10 w-full max-w-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-semibold text-gray-800">FASTag Recharge</span>
              <img src="/images/bharat_connect.png" alt="Bharat Connect" className="h-8 hidden sm:block" />
            </div>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-4 mb-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter vehicle number"
              value={vehicle}
              onChange={e => setVehicle(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-teal-500 text-white text-lg rounded-lg px-4 py-4 font-bold mb-2 hover:bg-teal-600 transition"
            >
              Proceed
            </button>
            <div className="flex items-center gap-2 mt-3 text-gray-600 text-base">
              <span className="text-xl">⚡</span>
              Get the best deals on FASTag Recharge
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
