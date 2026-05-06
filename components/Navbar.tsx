'use client';

import React from 'react';
import { PortfolioData } from '@/types/portfolio'; // Assuming types/portfolio.ts for data structure

interface NavbarProps {
  portfolio: PortfolioData;
}

const Navbar: React.FC<NavbarProps> = ({ portfolio }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-section">
          <h1 className="logo-text">
            {portfolio.name.split(' ').map((n, i) => i === 0 ? n[0] : (n[0] || '')).join('')}
          </h1>
          <div className="logo-divider"></div>
          <a href="#" aria-label="Home">
            <img src="/assets/images/img_subtract.svg" alt="Logo icon" className="logo-icon" />
          </a>
        </div>
        <button className="hamburger" aria-label="Menu" onClick={toggleMenu}>
          ☰
        </button>
        <nav className="nav-menu" role="menubar" style={{ display: isMenuOpen ? 'flex' : '' }}>
          <button role="menuitem" onClick={toggleMenu}>Home</button>
          <button role="menuitem" onClick={toggleMenu}>Work</button>
          <button role="menuitem" onClick={toggleMenu}>About</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;