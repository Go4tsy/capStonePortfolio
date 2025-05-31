import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './Project.css';

const ProjectGrid = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error loading projects:', error));
  }, []);

  const categories = ['All', 'Full-Stack', 'Front-End', 'Back-End'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <>
      <Helmet>
        <title>Projects | Sean Etienne Portfolio</title>
        <meta name="description" content="Explore full-stack projects by Sean Etienne, featuring React, Node.js, Python, and modern web technologies." />
      </Helmet>
      
      <div className="projects-container">
        <motion.div 
          className="projects-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            A showcase of full-stack applications, APIs, and web solutions built with modern technologies
          </p>
        </motion.div>

        {/* Featured Projects Section */}
        <motion.section 
          className="featured-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid featured-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={true} />
            ))}
          </div>
        </motion.section>

        {/* All Projects Section */}
        <motion.section 
          className="all-projects-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="section-title">All Projects</h2>
          
          {/* Filter Buttons */}
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>Interested in Working Together?</h2>
          <p>I'm always excited to take on new challenges and build innovative solutions.</p>
          <a href="/contact" className="cta-button">
            Let's Discuss Your Project
          </a>
        </motion.section>
      </div>
    </>
  );
};

export default ProjectGrid; 