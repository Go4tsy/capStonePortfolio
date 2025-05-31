import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Desktop navigation for 641px and above, matching Menu.js structure
const Navigation = () => {
    let fullPath = useLocation();
    let path = fullPath.pathname;

    return (
        <nav className="desktop-nav" aria-label="Main navigation">
            <ul className="header-nav-list">
                <li><Link className="link-tag" to="/">Home</Link></li>
                <li><Link className="link-tag" to="/about">About</Link></li>
                <li><Link className="link-tag" to="/projects">Projects</Link></li>
                <li><Link className="link-tag" to="/blog">Blog</Link></li>
                <li><Link className="link-tag" to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;