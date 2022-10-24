import React from 'react';
import logo from '../Photos/logo.jpg'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import Header from '../Header.js';
import Footer from '../Footer';


const Bio = () => {
    const [open, setOpen] = useState(false);



    return (

        <>
        <Header />
            <main >

                <div className="brand">
                    <h1 className="subtitles"> Transform your brand</h1>
                    <p>I am a freelancer Software engineer. Specialized in helping brands grow fast and sucessfully. My goal is to help you reach your goals. Let's think big together, i want to help people improve their lives with products designed by me. Let me hear your story.</p>
                    <img id="logobrand" src={logo} alt="brand" />
                </div>

                <div className="codes">
                    <h1 className="subtitles2"> My life codes</h1>

                    <Button  className="myBtn" onClick={() => setOpen(!open)} aria-controls="example-fade-text"aria-expanded={open}>
                    Click me
                    </Button>

                    <Fade in={open}>
                    <p>
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
                    </p>
                    </Fade>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Bio;