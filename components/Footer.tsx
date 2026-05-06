'use client';

import React from 'react';
import { PortfolioData } from '@/types/portfolio'; // Assuming types/portfolio.ts for data structure

interface FooterProps {
  portfolio: PortfolioData;
}

const Footer: React.FC<FooterProps> = ({ portfolio }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-top">
          <p className="footer-copyright">© {currentYear} All rights reserved</p>
          <a href={`mailto:${portfolio.contact.email}`} className="footer-email">
            {portfolio.contact.email}
          </a>
        </div>
        <img src="/assets/images/img_squares.svg" alt="Decorative pattern" className="footer-pattern" />
      </div>
    </footer>
  );
};

export default Footer;