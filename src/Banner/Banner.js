import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import './Banner.css';
import { motion } from 'framer-motion';

function Banner({ menuOpen, toggleMenu }) {
    const [spinning, setSpinning] = useState(false);
    const [currentTech, setCurrentTech] = useState(0);
    const [yearsExperience, setYearsExperience] = useState(0);
    const navigate = useNavigate();

    const technologies = [
        'React & TypeScript',
        'Node.js & Express',
        'Python & Django',
        'MongoDB & PostgreSQL',
        'AWS & Docker',
        'Full-Stack Solutions'
    ];

    // Calculate years of experience from August 2022
    useEffect(() => {
        const startDate = new Date(2022, 7, 1); // August 1, 2022 (month is 0-indexed)
        const currentDate = new Date();
        
        let years = currentDate.getFullYear() - startDate.getFullYear();
        const monthDiff = currentDate.getMonth() - startDate.getMonth();
        
        // If we haven't reached August yet this year, subtract 1
        if (monthDiff < 0) {
            years--;
        }
        
        setYearsExperience(Math.max(years, 1)); // Minimum 1 year
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTech((prev) => (prev + 1) % technologies.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [technologies.length]);

    useEffect(() => {
        window.addEventListener("scroll", toggleMenu);
        return () => {
            window.removeEventListener("scroll", toggleMenu);
        }
    }, [toggleMenu])

    const handleProjectsClick = () => {
        setSpinning(true);
        setTimeout(() => {
            setSpinning(false);
            navigate('/projects');
        }, 700);
    };

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <>
            <Helmet>
                <title>Sean-Moses Etienne Portfolio | Full-Stack Engineer</title>
                <meta name="description" content="Sean-Moses Etienne - Experienced Full-Stack Engineer with {yearsExperience}+ years building scalable web applications using React, Node.js, Python, and cloud technologies." />
            </Helmet>
            <section className="banner-hero" aria-label="Hero section">
                <div className="banner-background-container" style={{ backgroundImage: "url('/images/bluematrix.png')", backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
                {/* Blue sky-like gradient overlay for better text contrast */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(64,105,253,0.7) 0%, rgba(39,75,99,0.6) 100%)', zIndex: 1 }} />
                
                <div className="banner-hero-content" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-intro"
                    >
                        <h1 className="banner-title">
                            Hi, I'm <span className="name-highlight">Sean-Moses Etienne</span>
                        </h1>
                        <div className="banner-subtitle-container">
                            <p className="banner-subtitle">
                                Full-Stack Engineer with <span className="experience-highlight">{yearsExperience}+ Years</span> of Experience
                            </p>
                            <div className="tech-showcase">
                                <span className="tech-label">Specializing in </span>
                                <motion.span 
                                    key={currentTech}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="tech-highlight"
                                >
                                    {technologies[currentTech]}
                                </motion.span>
                            </div>
                        </div>
                        <p className="banner-description">
                            Transforming ideas into scalable, user-centric web applications that drive business growth and enhance user experiences. 
                            Working with an experienced mentor and 2 talented teammates to deliver exceptional results.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="banner-logo-container"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <img className="banner-logo" src="/images/logo.jpg" alt="Sean-Moses Etienne Portfolio Logo" loading="lazy" />
                    </motion.div>

                    <motion.div 
                        className="banner-actions"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.button
                            className="banner-cta primary"
                            onClick={handleProjectsClick}
                            animate={spinning ? { rotate: 360 } : { rotate: 0 }}
                            transition={{ duration: 0.7, ease: 'easeInOut' }}
                            disabled={spinning}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {spinning ? 'Loading...' : '🚀 View My Projects'}
                        </motion.button>
                        
                        <motion.button
                            className="banner-cta secondary"
                            onClick={handleContactClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            💬 Let's Connect
                        </motion.button>
                    </motion.div>

                    <motion.div 
                        className="banner-stats"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        <div className="stat-item">
                            <span className="stat-number">{yearsExperience}+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">1</span>
                            <span className="stat-label">Mentor</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">2</span>
                            <span className="stat-label">Teammates</span>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Banner;