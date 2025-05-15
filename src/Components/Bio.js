import React from 'react';
import logo from '../Photos/logo.jpg'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import Header from '../Header.js';
import Footer from '../Footer';
import { Helmet } from 'react-helmet';


const Bio = () => {
    const [open, setOpen] = useState(false);



    return (

        <>
        <Helmet>
            <title>Bio | Sean Etienne Portfolio</title>
            <meta name="description" content="Learn more about Sean Etienne, his background, skills, and experience." />
        </Helmet>
        <Header />
        <main>
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <a
                    href="/resume.pdf"
                    download
                    className="resume-download-btn"
                    style={{
                        display: 'inline-block',
                        background: '#4069fd',
                        color: '#fff',
                        padding: '0.75rem 2rem',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        fontSize: '1.2rem',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
                    }}
                >
                    Download Resume
                </a>
            </div>
            <section className="brand" aria-label="Brand introduction">
                <h1 className="subtitles"> Transform your brand</h1>
                <p>I am a freelancer Software engineer. Specialized in helping brands grow fast and sucessfully. My goal is to help you reach your goals. Let's think big together, i want to help people improve their lives with products designed by me. Let me hear your story.</p>
                <img id="logobrand" src={logo} alt="Sean Etienne brand logo" loading="lazy" />
            </section>

            <section className="codes" aria-label="Life codes">
                <h1 className="subtitles2"> My life codes</h1>
                <Button  className="myBtn" onClick={() => setOpen(!open)} aria-controls="example-fade-text" aria-expanded={open}>
                    Click me
                </Button>
                <Fade in={open}>
                    <div id="example-fade-text">
                        <ul id="lifecodes">
                            <li>Sucess is my duty, obligation and responsability.</li>
                            <li>Average is a failing formula.</li>
                            <li>All your dreams await you on the other of your fears.</li>
                            <li>I will never lower my target but increase my actions.</li>
                            <li>Focus on the target, not the work.</li>
                            <li>Everyone experiences fear, but it is how you respond to it that makes the differences in your life.</li>
                            <li>No guts. No glory. No legend. No story.</li>
                            <li>Let the rest do whatever, while i do whatever it takes. </li>
                            <li>Never lower your price, add value.</li>
                            <li>Doubt is your enemey.</li>
                        </ul>
                    </div>
                </Fade>
            </section>
        </main>
        <Footer />
        </>
    );
};

export default Bio;