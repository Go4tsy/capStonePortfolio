import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HamburgerMenu from 'react-hamburger-menu';

import backgroundImage from '../Photos/bluematrix.png';
import logo from '../Photos/logo.jpg';



import './Banner.css';
import Menu from '../Components/Menu';

import Audio from '../Audioplay/Audio';

function Banner({ menuOpen, toggleMenu }) {


    useEffect(() => {
        window.addEventListener("scroll", toggleMenu);
        return () => {
            window.removeEventListener("scroll", toggleMenu);
        }
    }, [])

    return (
        <React.Fragment>
            <Helmet>
                <title>Sean Etienne Portfolio | Home</title>
                <meta name="description" content="Welcome to Sean Etienne's portfolio. Explore projects, bio, and contact information." />
            </Helmet>
            <div className="banner-container" onScroll={toggleMenu}>
                {!menuOpen &&
                    <div className="banner-logo-container">
                        <img className="banner-logo" src={logo} alt="Sean Etienne Portfolio Logo" loading="lazy" onClick={toggleMenu} />
                    </div>
                }
                <div className="banner-background-container">
                    <img className="banner-background-image" src={backgroundImage} alt="Blue Matrix background" loading="lazy" />
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
            </div>
            {/* <Audio /> */}
        </React.Fragment>
    )
}

export default Banner;