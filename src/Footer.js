import React from 'react';


const Footer = () => {
    return (
        <>
            <footer role="contentinfo" className="flex flex-col items-center w-full p-4">
                <div className="copyright">
                    <h1>&copy; 2022 Sean Etienne</h1>
                </div>

                <div className="SML-container flex flex-wrap justify-center items-center w-full">
                    <div className="footer-linkedin-logo">
                        <a className="footer-link" href="https://www.linkedin.com/in/sean-moses-etienne-b5356823a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                            <img className="connect-logo" src="/images/linkedin.png" alt="linkedin logo" />
                        </a>
                    </div>
                    <div className="footer-github-logo">
                        <a className="footer-link" href="https://github.com/Go4tsy" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                            <img className="connect-logo" src="/images/github.png" alt="github logo" />
                        </a>
                    </div>
                    <div className="footer-instagram-logo">
                        <a className="footer-link" href="https://www.instagram.com/goatsy__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile">
                            <img className="connect-logo" src="/images/instagram.png" alt="instagram logo" />
                        </a>
                    </div>
                    <div className="footer-twitter-logo">
                        <a className="footer-link" href="https://twitter.com/SmeSme888" target="_blank" rel="noopener noreferrer" aria-label="Twitter profile">
                            <img className="connect-logo" src="/images/twitter.png" alt="twitter logo" />
                        </a>
                    </div>
                    <div className="footer-youtube-logo">
                        <a className="footer-link" href="https://www.youtube.com/@Goatsy8" target="_blank" rel="noopener noreferrer" aria-label="YouTube profile">
                            <img className="connect-logo" src="/images/youtube.png" alt="youtube logo" />
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