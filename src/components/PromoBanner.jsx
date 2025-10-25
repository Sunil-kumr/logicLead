import React from 'react';

const PromoBanner = () => (
  <section className="w-full flex justify-center my-4">
    <img
      src="/images/promo-banner.png"  // Make sure this matches the filename in public/images/
      alt="Flat 50 OFF on Recharge - Logiclead Offer"
      className="w-full max-w-7xl rounded-lg shadow-lg object-cover"
    />
  </section>
);

export default PromoBanner;
