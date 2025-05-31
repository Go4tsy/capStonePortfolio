import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function ProjectCard({ project, featured = false }) {
  const {
    title,
    description,
    image,
    link,
    github,
    technologies = [],
    category,
    completedDate
  } = project;

  return (
    <motion.div
      className={`project-card ${featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="project-overlay">
          <div className="project-links">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link live"
            >
              🚀 Live Demo
            </a>
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link github"
              >
                📂 GitHub
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
          <div className="project-meta">
            <span className="project-category">{category}</span>
            <span className="project-date">{completedDate}</span>
          </div>
        </div>
        
        <p className="project-description">{description}</p>
        
        <div className="project-technologies">
          {technologies.slice(0, 4).map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="tech-tag more">+{technologies.length - 4}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    github: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.string,
    completedDate: PropTypes.string
  }).isRequired,
  featured: PropTypes.bool
};

export default ProjectCard; 