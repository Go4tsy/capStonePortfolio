import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import './AboutMe.css';
import FullStackResumePDF from '../FullStack-resume-NJ.pdf';
import FullStackResumeDOCX from '../FullStack-resume-NJ.docx';

const AboutMe = () => {
    const [yearsExperience, setYearsExperience] = useState(0);
    const [age, setAge] = useState('');

    // Calculate years of experience from August 2022
    useEffect(() => {
        const startDate = new Date(2022, 7, 1); // August 1, 2022 (month is 0-indexed)
        const currentDate = new Date();
        
        let years = currentDate.getFullYear() - startDate.getFullYear();
        const monthDiff = currentDate.getMonth() - startDate.getMonth();
        
        // If we haven't reached August yet this year, subtract 1
        if (monthDiff < 0) {
            years--;
        }
        
        setYearsExperience(Math.max(years, 1)); // Minimum 1 year
    }, []);

    // Live age timer based on DOB: June 29, 2002
    useEffect(() => {
        const dob = new Date(2002, 5, 29); // June is month 5 (0-indexed)
        const updateAge = () => {
            const now = new Date();
            let years = now.getFullYear() - dob.getFullYear();
            let months = now.getMonth() - dob.getMonth();
            let days = now.getDate() - dob.getDate();
            if (days < 0) {
                months--;
                days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
            }
            if (months < 0) {
                years--;
                months += 12;
            }
            setAge(`${years} years, ${months} months, ${days} days`);
        };
        updateAge();
        const interval = setInterval(updateAge, 1000 * 60 * 60); // update every hour
        return () => clearInterval(interval);
    }, []);

    const skills = {
        frontend: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Vue.js'],
        backend: ['Node.js', 'Express.js', 'Python', 'Java', 'RESTful APIs', 'GraphQL'],
        database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
        tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Netlify', 'Figma', 'VS Code']
    };

    const experience = [
        {
            title: 'Full-Stack Engineer',
            period: '2022 - Present',
            description: 'Building scalable web applications using modern technologies like React, Node.js, and cloud services. Specialized in creating user-centric solutions that drive business growth. Working collaboratively with a mentor and 2 talented teammates.'
        },
        {
            title: 'Software Developer',
            period: '2021 - 2022',
            description: 'Developed responsive web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality software solutions.'
        },
        {
            title: 'Junior Developer',
            period: '2020 - 2021',
            description: 'Started my journey in software development, focusing on front-end technologies and learning full-stack development principles.'
        }
    ];

    return (
        <>
            <Helmet>
                <title>About Me | Sean-Moses Etienne Portfolio</title>
                <meta name="description" content="Learn about Sean-Moses Etienne, a passionate full-stack engineer with {yearsExperience}+ years of experience building innovative web solutions." />
            </Helmet>
            
            <div className="about-container" role="main">
                <motion.section 
                    className="about-hero flex flex-col md:flex-row items-center md:items-start gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    aria-label="About Me Hero Section"
                >
                    <div className="about-content">
                        <h1 className="about-title">About Me</h1>
                        <div className="about-intro">
                            <div className="intro-text">
                                <h2>Hi! I'm Sean-Moses Etienne (a.k.a. Goatsy)</h2>
                                <p className="intro-description">
                                    I'm a <span style={{fontWeight: 'bold'}}>{age}</span> Haitian-American-Canadian, currently a flight attendant for United Airlines and a self-taught full-stack engineer. My journey started in 2022, teaching myself React, Firebase, and Next.js between flights and layovers. I'm a proud graduate of the <strong>General Assembly Software Engineering Immersive</strong> bootcamp, holding a full-stack certificate. I'm the founder of <strong>CrewRoom</strong>—a mobile-first layover app built for airline crews, and I'm quietly building the <strong>Étienne Empire</strong>: a family legacy project blending real estate, software, and education.
                                </p>
                                <p className="intro-mission">
                                    My interests run deep: trading psychology, automation, and content strategy. Online, I'm known as "Goatsy"—trusted for my advice on discipline, dating, and mindset. My long-term vision? Become a Chief Product Officer and eventually create a virtual gaming experience that fuses VR and neural interfaces—think SAO meets Neuralink, but safer and more human.
                                </p>
                                <p className="intro-values">
                                    I believe skills are for more than profit. I'm committed to building community spaces, investing in youth, and supporting charity projects in the Caribbean and Africa. I stay low-key, move with intention, and let my work speak for itself.
                                </p>
                                <div className="resume-section">
                                    <a
                                        href={FullStackResumePDF}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="resume-btn"
                                    >
                                        📄 View & Download Resume (PDF)
                                    </a>
                                    <a
                                        href={FullStackResumeDOCX}
                                        download="Sean-Etienne-Resume.docx"
                                        className="resume-btn"
                                        style={{ marginLeft: 8 }}
                                    >
                                        📝 Download Resume (DOCX)
                                    </a>
                                    <button
                                        className="resume-btn"
                                        onClick={() => window.open(FullStackResumePDF, '_blank')}
                                        style={{ marginLeft: 8 }}
                                    >
                                        🖨️ Print Resume
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p className="about-cta" style={{marginTop: 32, fontWeight: 'bold', fontSize: '1.1em', textAlign: 'center'}}>
                            "The empire's already being built — brick by brick, byte by byte."
                        </p>
                    </div>
                </motion.section>

                <motion.section 
                    className="experience-section"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    aria-label="Professional Journey"
                >
                    <h2 className="section-title">Professional Journey</h2>
                    <div className="experience-timeline">
                        <motion.div 
                            className="experience-item"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="exp-marker"></div>
                            <div className="exp-content">
                                <h3>Crew Member</h3>
                                <p className="exp-period">McDonald's, Montreal, CAN | June 2019 – Sept 2021</p>
                                <p className="exp-description">
                                    Mentored and trained new employees, leading to multiple promotions for mentees. Maintained high performance in a fast-paced, customer-focused environment.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div 
                            className="experience-item"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="exp-marker"></div>
                            <div className="exp-content">
                                <h3>Software Engineering Immersive Student</h3>
                                <p className="exp-period">General Assembly (Remote/Online) | May 2022 – Aug 2022</p>
                                <p className="exp-description">
                                    Completed a rigorous 12-week, 500-hour immersive bootcamp, earning a full-stack Software Engineering certificate. Built full-stack MERN/MEAN web apps, mastered React, Node.js, Python, and modern development workflows. Developed strong problem-solving, teamwork, and project delivery skills in a fast-paced, collaborative environment.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div 
                            className="experience-item"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="exp-marker"></div>
                            <div className="exp-content">
                                <h3>Driver / Junior Front-End Developer</h3>
                                <p className="exp-period">Vaistat, Montreal, CAN | Nov 2020 – Current</p>
                                <p className="exp-description">
                                    Promoted to Junior Front-End Developer, building critical client-facing apps with Angular and TypeScript. Architected a dynamic client panel for pharmacies, improved user experience with Firebase, and executed 2000+ safe deliveries for a startup.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div 
                            className="experience-item"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <div className="exp-marker"></div>
                            <div className="exp-content">
                                <h3>Flight Attendant</h3>
                                <p className="exp-period">United Airlines (EWR) | April 2024 – Present</p>
                                <p className="exp-description">
                                    Delivering safety, empathy, and world-class service to thousands of passengers. Adapt quickly to dynamic environments and diverse cultures, leveraging communication and crisis management skills honed in the skies.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section 
                    className="skills-section"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    aria-label="Technical Skills"
                >
                    <h2 className="section-title">Technical Skills</h2>
                    <div className="skills-grid">
                        {Object.entries(skills).map(([category, skillList], index) => (
                            <motion.div 
                                key={category}
                                className="skill-category"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                            >
                                <h3 className="skill-category-title">
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </h3>
                                <div className="skill-tags">
                                    {skillList.map((skill, skillIndex) => (
                                        <span key={skillIndex} className="skill-tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section 
                    className="values-section"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    aria-label="Core Values and Philosophy"
                >
                    <h2 className="section-title">Core Values & Philosophy</h2>
                    <div className="values-grid">
                        <div className="value-item">
                            <h3>🎯 Excellence</h3>
                            <p>I treat excellence as a non-negotiable standard—every project, every interaction, every line of code. My goal is to leave a legacy, not just a résumé.</p>
                        </div>
                        <div className="value-item">
                            <h3>🚀 Innovation</h3>
                            <p>Innovation is my default. I build quietly, experiment boldly, and use technology to solve real problems for real people—especially those who feel overlooked.</p>
                        </div>
                        <div className="value-item">
                            <h3>👥 Collaboration</h3>
                            <p>Collaboration is about more than teamwork—it's about building trust, sharing vision, and helping others win. I believe in lifting as I climb, whether in tech, aviation, or community.</p>
                        </div>
                        <div className="value-item">
                            <h3>📈 Growth</h3>
                            <p>Growth is a mindset. I invest in learning, embrace feedback, and stay adaptable. My journey is about constant evolution—personally, professionally, and spiritually.</p>
                        </div>
                        <div className="value-item">
                            <h3>⚜️ Legacy & Integrity</h3>
                            <p>Legacy is built on integrity. I move with intention, keep my word, and let my work speak for itself. My mission: build the Étienne Empire—brick by brick, byte by byte—while uplifting my family and community.</p>
                        </div>
                        <div className="value-item">
                            <h3>🌍 Community Impact</h3>
                            <p>Skills are for service, not just profit. I'm committed to creating opportunities, supporting youth, and giving back—especially in the Caribbean and Africa. The empire is for everyone.</p>
                        </div>
                    </div>
                </motion.section>
            </div>
            {/* Certificate Card Section */}
            <div className="certificate-card" style={{ margin: '32px 0', padding: 24, border: '1px solid #e5e7eb', borderRadius: 12, background: '#fafbfc', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <h3 style={{ marginBottom: 12 }}>🎓 General Assembly Certificate</h3>
                <p style={{ marginBottom: 16 }}>Proud graduate of the <strong>General Assembly Software Engineering Immersive</strong> bootcamp. View or download my official certificate below.</p>
                <a
                    href={require('../CertificateGASEI.pdf')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-btn"
                    style={{ marginRight: 8 }}
                >
                    📄 View Certificate (PDF)
                </a>
                <a
                    href={require('../CertificateGASEI.pdf')}
                    download="Sean-Moses-Etienne-GA-Certificate.pdf"
                    className="resume-btn"
                >
                    ⬇️ Download Certificate
                </a>
            </div>
        </>
    );
};

export default AboutMe; 