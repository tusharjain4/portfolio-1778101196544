import Contact from '@/components/Contact';
'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import About from '@/components/About'; // Renamed from Journey to About to better fit portfolio data
import Footer from '@/components/Footer';
import portfolioData from '@/data/portfolio.json';

export default function Home() {
  return (
    <>
      <Navbar portfolio={portfolioData} />
      <main className="main-container">
        <div className="content-wrapper">
          <Hero portfolio={portfolioData} />
          <Projects portfolio={portfolioData} />
          <Skills portfolio={portfolioData} />
          <About portfolio={portfolioData} /> {/* Using About component for journey section */}
          <Footer portfolio={portfolioData} />
        </div>
      </main>
    </>
  );
}