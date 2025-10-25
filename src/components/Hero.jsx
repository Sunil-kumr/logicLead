import React, { useState } from 'react';
import { fastagProviders } from '../data/providers';

const Hero = () => {
  const [selectedProvider, setSelectedProvider] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Recharge initiated for ${vehicleNumber} with ${selectedProvider}`);
  };

  return (
    <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FASTag Recharge</h1>
          <p className="text-xl mb-8">Get the best deals on FASTag Recharge</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full">
              ✓ Multiple Payment Option
            </div>
            <div className="bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full">
              ✓ Multiple Discounts & Offers
            </div>
            <div className="bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full">
              ✓ 24×7 Customer Support
            </div>
          </div>

          <form 
            className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl"
            onSubmit={handleSubmit}
          >
            <h3 className="text-xl font-semibold mb-4 text-left">FASTag Provider</h3>
            
            <select 
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={selectedProvider}
              onChange={(e) => setSelectedProvider(e.target.value)}
              required
            >
              <option value="">Select Provider</option>
              {fastagProviders.map(provider => (
                <option key={provider.id} value={provider.name}>
                  {provider.name}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Enter Vehicle Number"
              className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              required
            />

            <button 
              type="submit"
              className="w-full p-4 bg-primary text-white rounded-lg text-lg font-semibold hover:bg-secondary transform hover:-translate-y-0.5 transition"
            >
              Recharge Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
