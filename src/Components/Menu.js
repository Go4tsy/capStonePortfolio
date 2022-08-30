import { Link, useLocation } from 'react-router-dom';


import background from '../Photos/bluematrix.png';

import './Menu.css';


function Menu({ toggleMenu, handleResumeClick }) {
    
    let fullPath = useLocation();
    let path = fullPath.pathname;

    return (
        <div className="menu">
        <ul className="menu-list-main">
            <Link className="link-tag" to="/bio" onClick={toggleMenu}><li className="list-item-main">Bio</li></Link>
            <Link className="link-tag" to="/projects" onClick={toggleMenu}><li className="list-item-main">Projects</li></Link>
            <Link className="link-tag" to="/contact" onClick={toggleMenu}><li className="list-item-main">Contact Me</li></Link>
            <a className="list-item-main link-tag" onClick={handleResumeClick} href="https://docs.google.com/document/d/1gXLg4DcfFMO_JcrsPLrQwhHNx9cIUznX5cd3gs6Hptw/view?usp=sharing" target="_blank" rel="noopener noreferrer" >View Resume</a>
        </ul>
        {path !== '/' &&
        <div className="menu-background-container">
            <img className="menu-background-image" src={background} alt="matrix coding" />
        </div>
        }
        </div>
    );
}

export default Menu;