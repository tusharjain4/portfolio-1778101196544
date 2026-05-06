'use client';

import React from 'react';
import { PortfolioData } from '@/types/portfolio'; // Assuming types/portfolio.ts for data structure

interface AboutProps {
  portfolio: PortfolioData;
}

const About: React.FC<AboutProps> = ({ portfolio }) => {
  return (
    <section className="journey-section">
      <div className="journey-content">
        <h2 className="journey-title">About Me & Highlights</h2>
        {/* General About section text */}
        <p className="journey-description" style={{ marginBottom: '20px' }}>
          {portfolio.about}
        </p>

        {/* Highlights as journey items */}
        <div className="journey-list" role="list">
          {portfolio.highlights.map((highlight, index) => (
            <article className="journey-item" role="listitem" key={index}>
              <div className="journey-header">
                <div className="journey-icon">
                  <img src="/assets/images/img_icon_building_2.svg" alt="Achievement icon" />
                </div>
                <div className="journey-info">
                  <h3 className="journey-institution">{portfolio.currentRole || `Highlight ${index + 1}`}</h3>
                  <p className="journey-period">
                    {index === 0 ? `Experience: ${portfolio.experience} years` : 'Recent'}
                  </p>
                </div>
              </div>
              <div className="journey-details">
                <img src="/assets/images/img_line_container.svg" alt="" className="journey-line" />
                <p className="journey-description">{highlight}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;