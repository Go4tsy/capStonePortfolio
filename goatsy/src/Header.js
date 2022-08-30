import React from 'react';
import pfp from './Photos/pfp.png';
import Navigation from './Nav';

import { useHistory } from 'react-router';
import { isMobile } from 'react-device-detect';

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"


import './Header.css';
import Menu from '../Menu/Menu';
import HamburgerMenu from 'react-hamburger-menu';


const Header = ({ title, menuOpen, toggleMenu, handleResumeClick }) => {


    const history = useHistory();

    const goBack = () => history.goBack();

    const path = title.split(' ').join('');

    return (

        <div className="header-container">
            <div className="header-logo-container">

                <div className="back-button-container">
                    <FontAwesomeIcon icon={faArrowLeft} onClick={goBack} />
                </div>
                <div className="header-hamburger-menu" style={{ marginRight: menuOpen && !isMobile && path !== '/' ? '15px' : '0px' }}>
                    <HamburgerMenu
                        className="hamburger-menu"
                        isOpen={menuOpen}
                        menuClicked={toggleMenu}
                        color={menuOpen ? "white" : "black"}
                        width={21}
                        height={14}
                    />
                </div>
                {menuOpen && <Menu toggleMenu={toggleMenu} handleResumeClick={handleResumeClick} />}
            </div>
            <div className="grid-container">
                <header className="Navigation-section">
                    <div className="backimo">
                        <h1 className="name"> Sean Etienne </h1>
                        <Link to="/">   <img className="headpic" src={pfp} alt="Myself" /></Link>
                    </div>
                    <Navigation />
                    <section className="slogan">
                        <h1> Goatsy, Follow one course until succesful<br /></h1>
                        <h2 className="Focus"> F.O.C.U.S</h2>
                    </section>
                </header>
            </div>

        </div>
        
    );
};

export default Header;