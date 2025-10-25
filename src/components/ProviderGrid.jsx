import React from 'react';
import { fastagProviders } from '../data/providers';

const ProviderGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Supported FASTag Providers</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {fastagProviders.map(provider => (
            <div 
              key={provider.id}
              className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition cursor-pointer"
            >
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                {provider.name.substring(0, 2).toUpperCase()}
              </div>
              <p className="text-sm font-medium text-gray-700">{provider.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProviderGrid;
