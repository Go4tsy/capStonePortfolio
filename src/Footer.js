import React from 'react';
import github from './Photos/github.png'
import linkedin from './Photos/linkedin.png'
import instagram from './Photos/instagram.png'
import twitter from './Photos/twitter.png'


const Footer = () => {
    return (
        <>
            <footer>
                <div className="copyright">
                    <h1>&copy; 2022 Sean Etienne</h1>
                </div>

                <div className="SML-container">
                    <div className="footer-linkedin-logo">
                        <a className="footer-link" href="https://www.linkedin.com/in/sean-moses-etienne-b5356823a/" target="_blank" rel="noopener noreferrer">
                            <img className="connect-logo" src={linkedin} alt="linkedin logo" />
                        </a>
                    </div>
                    <div className="footer-github-logo">
                        <a className="footer-link" href="https://github.com/Go4tsy" target="_blank" rel="noopener noreferrer">
                            <img className="connect-logo" src={github} alt="github logo" />
                        </a>
                    </div>
                    <div className="footer-instagram-logo">
                        <a className="footer-link" href="https://www.instagram.com/goatsy__/" target="_blank" rel="noopener noreferrer">
                            <img className="connect-logo" src={instagram} alt="instagram logo" />
                        </a>
                    </div>
                    <div className="footer-twitter-logo">
                        <a className="footer-link" href="https://twitter.com/SmeSme888" target="_blank" rel="noopener noreferrer">
                            <img className="connect-logo" src={twitter} alt="twitter logo" />
                        </a>
                    </div>
                </div>

                <div className="signature">
                    Sean-Moses Etienne<br />
                    Goatsy
                </div>
            </footer>
        </>
    );
};

export default Footer;