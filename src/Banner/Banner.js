import React from 'react';
import { useEffect } from 'react';

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
            <div className="banner-container" onScroll={toggleMenu}>
                {!menuOpen &&
                    <div className="banner-logo-container">
                        <img className="banner-logo" src={logo} alt="Goatsy" onClick={toggleMenu} />
                    </div>
                }
                <div className="banner-background-container">
                    <img className="banner-background-image" src={backgroundImage} alt="Matrix background" />
                </div>
                <div className="banner-hamburger-menu">
                    {/* <HamburgerMenu
                    className="hamburger-menu"
                    isOpen={menuOpen}
                    menuClicked={toggleMenu}
                    color={"black"}
                    width={21}
                    height={14}
                /> */}
                {menuOpen && <Menu toggleMenu={toggleMenu} />}
                </div>
            </div>
            {/* <Audio /> */}
        </React.Fragment>
    )
}

export default Banner;