import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Process from './components/Process';
import WhyWebZariq from './components/WhyWebZariq';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-950 dark:bg-black text-white">
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Clients />
        <Process />
        <WhyWebZariq />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
