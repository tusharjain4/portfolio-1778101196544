'use client';

import React from 'react';
import { PortfolioData } from '@/types/portfolio'; // Assuming types/portfolio.ts for data structure

interface ProjectsProps {
  portfolio: PortfolioData;
}

const ProjectImages = [
  "/assets/images/img_rectangle_369.png",
  "/assets/images/img_rectangle_369_396x836.png",
  "/assets/images/img_rectangle_369_1.png",
];

const Projects: React.FC<ProjectsProps> = ({ portfolio }) => {
  return (
    <section className="works-section">
      <div className="works-content">
        <h2 className="works-title">My works</h2>
        <div role="list">
          {portfolio.projects.map((project, index) => (
            <article className="project-item" role="listitem" key={project.name}>
              <div className="project-info">
                <h3 className="project-title">{project.name}</h3>
                <div className="project-keywords">
                  {project.tech.map((tech, techIndex) => (
                    <span className="keyword" key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>
              <img
                src={ProjectImages[index % ProjectImages.length]}
                alt={`Project showcase for ${project.name}`}
                className="project-image"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;