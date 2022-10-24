import React from 'react';
import pfp from './Photos/pfp.png';
import Navigation from './Nav';

import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"


import './Header.css';
import Menu from './Components/Menu'
// import HamburgerMenu from 'react-hamburger-menu';


const Header = ({ title, menuOpen, toggleMenu, handleResumeClick }) => {


    // const navigate = useNavigate();


    // const goBack = () => navigate('/', { replace: true });
    // // Allows user to return to the page that is being displayed by the header
    // // const path = title.split(' ').join('');

    return (

        <div className="grid-container">

            <header className="Navigation-section">
                <div className="backimo">
                    <h1 className="name"> Sean Etienne </h1>
                    <Link to="/">   <img className="headpic" src={pfp} alt="Myself" /></Link>
                </div>
                {/* <div className="back-button-container">
                    <FontAwesomeIcon icon={faArrowLeft} onClick={goBack}  className="ArrowIcon"/>
                </div> */}
                    <section className="slogan">
                        <h1> Goatsy, Follow one course until succesful<br /></h1>
                        <h2 className="Focus"> F.O.C.U.S</h2>
                    </section>
                    
                {/* <div className="header-hamburger-menu" style={{ marginRight: menuOpen && !isMobile && path !== '/' ? '15px' : '0px' }}> */}

                    {/* <HamburgerMenu
                         className="hamburger-menu"
                         isOpen={menuOpen}
                        menuClicked={toggleMenu}
                         color={menuOpen ? "white" : "black"}
                         width={21}
                         height={14}
                     /> */}

                    {menuOpen && <Menu toggleMenu={toggleMenu} handleResumeClick={handleResumeClick} />}
                {/* </div> */}
            </header>

            <Navigation />

        </div>

    );
};

export default Header;