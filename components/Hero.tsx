'use client';

import React from 'react';
import { PortfolioData } from '@/types/portfolio'; // Assuming types/portfolio.ts for data structure

interface HeroProps {
  portfolio: PortfolioData;
}

const Hero: React.FC<HeroProps> = ({ portfolio }) => {
  const [firstName, ...lastNameParts] = portfolio.name.split(' ');
  const roleParts = portfolio.role.split(' ');
  const roleProduct = roleParts[0] || '';
  const roleDesigner = roleParts.slice(1).join(' ') || '';

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-text-container">
            <h2 className="hero-hello">Hello</h2>
            <p className="hero-im">I&apos;m</p>
          </div>
          <p className="scroll-text">Scroll to explore</p>
          <img src="/assets/images/img_rectangle_1.png" alt="Developer portfolio showcase" className="hero-image" />
        </div>
        <div className="hero-right">
          <div className="title-stack">
            <div className="title-bg-top"></div>
            <div className="title-text-container">
              <p className="title-product">{roleProduct}</p>
              <div className="title-designer-section">
                <p className="title-designer">{roleDesigner}</p>
                <p className="title-nikita">{firstName}</p>
              </div>
            </div>
            <div className="title-bg-bottom"></div>
          </div>
          <p className="hero-description">{portfolio.tagline}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;