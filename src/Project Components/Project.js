import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import portfolioCard from '../Photos/portfolioCard.png'
import ecommerCard from '../Photos/ecommerCard.png'

import snapBookCard from '../Photos/snapBookCard.png'
import Header from '../Header';
import Footer from '../Footer';
import { Helmet } from 'react-helmet';
import Testimonials from '../Components/Testimonials';
import '../Components/Testimonials.css';
import Blog from '../Components/Blog';
import '../Components/Blog.css';
import ProjectCard from './ProjectCard';


    
const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('./Project Components/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

    // let navigate = useNavigate(); 
    // const routeChange = () =>{ 
    //   let path = `newPath`; 
    //   navigate(path);
    // }



    return (

        <>
        <Helmet>
            <title>Projects | Sean Etienne Portfolio</title>
            <meta name="description" content="Explore projects by Sean Etienne, including web development, design, and more." />
        </Helmet>
        <Header />
        <main>
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </main>
      <Testimonials />
      <Blog />
      <Footer />
            
        </>
    );
};

export default Project;