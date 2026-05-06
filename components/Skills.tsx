'use client';

import React from 'react';
import { PortfolioData } from '@/types/portfolio'; // Assuming types/portfolio.ts for data structure

interface SkillsProps {
  portfolio: PortfolioData;
}

const Skills: React.FC<SkillsProps> = ({ portfolio }) => {
  const getSkillDescription = (skillName: string): string => {
    // Provide a generic description for skills since the JSON doesn't include them
    return `Proficient in ${skillName}, enhancing development and problem-solving abilities.`;
  };

  return (
    <section className="skills-section">
      <div className="skills-content">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-grid">
          {portfolio.skills.map((category) => (
            // The template shows individual skill cards, so we flatten the categories
            // and present each skill as a card.
            <React.Fragment key={category.name}>
              {category.skills.map((skill, index) => (
                <div className="skill-card" key={`${category.name}-${skill}-${index}`}>
                  <div className="skill-icon">
                    <img src="/assets/images/img_frame_410.svg" alt={`${skill} icon`} />
                  </div>
                  <div className="skill-info">
                    <h3 className="skill-name">{skill}</h3>
                    <p className="skill-description">{getSkillDescription(skill)}</p>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;