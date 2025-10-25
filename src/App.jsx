import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProviderGrid from './components/ProviderGrid';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProviderGrid />
      <AboutUs />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
