import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Menu from './Components/Menu';
import HamburgerMenu from 'react-hamburger-menu';

const Header = ({ menuOpen, toggleMenu, handleResumeClick }) => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY < 10) {
            setShowHeader(true);
          } else if (currentScrollY > lastScrollY.current) {
            setShowHeader(false); // scrolling down
          } else {
            setShowHeader(true); // scrolling up
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-container${showHeader ? '' : ' header-hidden'}`}>
      <div className="header-logo-container">
        <Link to="/">
          <img className="header-logo" src="/images/pfp.png" alt="Sean-Moses Etienne logo" />
        </Link>
      </div>
      <nav className="header-nav desktop-nav" aria-label="Main navigation">
        <ul className="header-nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="header-hamburger-menu">
        <HamburgerMenu
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
        {menuOpen && <Menu toggleMenu={toggleMenu} handleResumeClick={handleResumeClick} />}
      </div>
    </header>
  );
};

export default Header;