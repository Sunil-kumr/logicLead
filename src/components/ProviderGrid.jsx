import React from 'react';
import { fastagProviders } from '../data/providers';

const ProviderGrid = () => (
  <section className="py-12 bg-gray-50 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-10">FASTag Provider</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {fastagProviders.map(provider => (
          <div
            key={provider.id}
            className="bg-white rounded-lg shadow border hover:shadow-lg flex flex-col items-center p-6 justify-center transition"
          >
            <img
              src={`/images/${provider.image}`}
              alt={provider.name}
              className="w-20 h-20 object-contain mb-4"
            />
            <p className="text-md font-medium text-gray-800 text-center truncate w-full">
              {provider.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProviderGrid;
