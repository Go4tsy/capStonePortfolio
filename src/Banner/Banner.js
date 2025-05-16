import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HamburgerMenu from 'react-hamburger-menu';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../Photos/bluematrix.png';
import logo from '../Photos/logo.jpg';
import './Banner.css';
import Menu from '../Components/Menu';
import { motion } from 'framer-motion';

function Banner({ menuOpen, toggleMenu }) {
    const [spinning, setSpinning] = useState(false);
    const navigate = useNavigate();
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
        }, 700); // 0.7s spin before redirect
    };

    return (
        <>
            <Helmet>
                <title>Sean Etienne Portfolio | Home</title>
                <meta name="description" content="Welcome to Sean Etienne's portfolio. Explore projects, bio, and contact information." />
            </Helmet>
            <section className="banner-hero" aria-label="Hero section">
                <div className="banner-background-container">
                    <img className="banner-background-image" src={backgroundImage} alt="Blue Matrix background" loading="lazy" />
                </div>
                <div className="banner-hero-content">
                    <img className="banner-logo" src={logo} alt="Sean Etienne Portfolio Logo" loading="lazy" />
                    <h1 className="banner-title">Hi, I'm Sean Etienne</h1>
                    <p className="banner-subtitle">Software Engineer | Helping brands grow fast and successfully</p>
                    <motion.button
                        className="banner-cta"
                        onClick={handleProjectsClick}
                        animate={spinning ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                        disabled={spinning}
                    >
                        {spinning ? 'Loading...' : 'View My Projects'}
                    </motion.button>
                </div>
                <div className="banner-hamburger-menu">
                    <HamburgerMenu
                        className="hamburger-menu"
                        isOpen={menuOpen}
                        menuClicked={toggleMenu}
                        color={menuOpen ? "#4069fd" : "#000"}
                        width={28}
                        height={20}
                        strokeWidth={3}
                        aria-label="Toggle menu"
                        tabIndex={0}
                        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') toggleMenu(); }}
                    />
                    {menuOpen && <Menu toggleMenu={toggleMenu} />}
                </div>
            </section>
        </>
    )
}

export default Banner;