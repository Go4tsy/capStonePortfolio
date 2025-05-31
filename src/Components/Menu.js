import { Link, useLocation } from 'react-router-dom';

import './Menu.css';


function Menu({ toggleMenu, handleResumeClick }) {
    
    let fullPath = useLocation();
    let path = fullPath.pathname;

    return (
        <div className="menu" role="navigation" aria-label="Mobile menu">
        <ul className="menu-list-main flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center">
            <Link className="link-tag" to="/" onClick={toggleMenu}>
                <li className="list-item-main">Home</li>
            </Link>
            <Link className="link-tag" to="/about" onClick={toggleMenu}>
                <li className="list-item-main">About</li>
            </Link>
            <Link className="link-tag" to="/projects" onClick={toggleMenu}>
                <li className="list-item-main">Projects</li>
            </Link>
            <Link className="link-tag" to="/blog" onClick={toggleMenu}>
                <li className="list-item-main">Blog</li>
            </Link>
            <Link className="link-tag" to="/contact" onClick={toggleMenu}>
                <li className="list-item-main">Contact</li>
            </Link>
            <Link className="link-tag" to="/api/download-resume" download onClick={toggleMenu}>
                Resume
            </Link>
        </ul>
        {path !== '/' &&
        <div className="menu-background-container">
            <img className="menu-background-image" src="/images/bluematrix.png" alt="Sean-Moses Etienne matrix coding background" />
        </div>
        }
        </div>
    );
}

export default Menu;