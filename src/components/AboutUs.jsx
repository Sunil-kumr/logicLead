import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="max-w-3xl mx-auto text-center space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            Welcome to <span className="font-semibold text-gray-900">Logiclead</span>, your trusted platform for FASTag recharge. 
            We make it easy for vehicle owners to recharge their FASTag quickly and securely from anywhere.
          </p>
          <p>
            Our goal is to save your time at toll plazas by providing a smooth recharge experience 
            with multiple payment options. With reliable service, exciting offers, and dedicated support, 
            we are here to make your travel easier and more convenient.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
