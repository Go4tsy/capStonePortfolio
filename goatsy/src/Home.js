import React from 'react';
import logo from './Photos/logo.jpg'

const Home = () => {
    return (
        <>
            <main >

                <div class="brand">
                    <h1 class="subtitles"> Transform your brand</h1>
                    <p>I am a freelancer Software engineer. Specialized in helping brands grow fast and sucessfully. My goal is to help you reach your goals. Let's think big together, i want to help people improve their lives with products designed by me. Let me hear your story.</p>
                    <img id="logobrand" src={logo} alt="brand" />
                </div>

                <div class="codes">
                    <h1 class="subtitles2"> My life codes</h1>

                    <button class="myBtn">Click me</button>
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
                </div>
            </main>
        </>
    );
};

export default Home;