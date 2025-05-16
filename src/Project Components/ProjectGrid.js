import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ProjectCard from './ProjectCard';
import './Project.css';

const ProjectGrid = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('./Project Components/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <>
      <Helmet>
        <title>Projects | Sean Etienne Portfolio</title>
        <meta name="description" content="Explore projects by Sean Etienne, including web development, design, and more." />
      </Helmet>
      <main className="projects-main" id="projects">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-intro">Here are some of the projects I've worked on. Click any card to view more details or see the live site.</p>
        <section className="projects-grid" aria-label="Project list">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default ProjectGrid; 