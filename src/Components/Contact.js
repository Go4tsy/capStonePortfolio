import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            const templateParams = {
                'client-name': formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message
            };

            await emailjs.send(
                'gmail', 
                'template_portfolio', 
                templateParams,
                '5Yu9yk8mxoA0OVXf1'
            );

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Contact | Sean-Moses Etienne Portfolio</title>
                <meta name="description" content="Get in touch with Sean-Moses Etienne for collaboration, questions, or opportunities. Let's build something amazing together!" />
            </Helmet>

            <div className="contact-container">
                <motion.div 
                    className="contact-hero"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="contact-title">Let's Work Together</h1>
                    <p className="contact-subtitle">
                        Have a project in mind? Let's discuss how my team and I can bring your ideas to life with cutting-edge technology and thoughtful design.
                    </p>
                </motion.div>

                <div className="contact-content">
                    <motion.div 
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2>Get In Touch</h2>
                        <p>
                            I'm always excited to hear about new opportunities and interesting projects. 
                            Whether you're a startup looking to build your first product or an established 
                            company seeking to enhance your digital presence, my team and I would love to help.
                            Working with an experienced mentor and 2 talented teammates, we deliver exceptional results.
                        </p>
                        
                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-icon">📧</span>
                                <div>
                                    <h3>Email</h3>
                                    <p>sean.moses.etienne@email.com</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">💼</span>
                                <div>
                                    <h3>LinkedIn</h3>
                                    <p>Connect with me professionally</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">🐙</span>
                                <div>
                                    <h3>GitHub</h3>
                                    <p>Check out my latest projects</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">⚡</span>
                                <div>
                                    <h3>Response Time</h3>
                                    <p>Usually within 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="contact-form-container"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={errors.name ? 'error' : ''}
                                    placeholder="Enter your full name"
                                />
                                {errors.name && <span className="error-message">{errors.name}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={errors.email ? 'error' : ''}
                                    placeholder="Enter your email address"
                                />
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject *</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className={errors.subject ? 'error' : ''}
                                >
                                    <option value="">Select a subject</option>
                                    <option value="Web Development Project">Web Development Project</option>
                                    <option value="Full-Stack Development">Full-Stack Development</option>
                                    <option value="Consultation">Technical Consultation</option>
                                    <option value="Collaboration">Collaboration Opportunity</option>
                                    <option value="Job Opportunity">Job Opportunity</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.subject && <span className="error-message">{errors.subject}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className={errors.message ? 'error' : ''}
                                    placeholder="Tell me about your project, goals, timeline, and any specific requirements you have in mind..."
                                    rows="6"
                                ></textarea>
                                {errors.message && <span className="error-message">{errors.message}</span>}
                                <small className="char-count">
                                    {formData.message.length} characters (minimum 10)
                                </small>
                            </div>

                            <motion.button
                                type="submit"
                                className="submit-btn"
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner"></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <span>🚀</span>
                                        Send Message
                                    </>
                                )}
                            </motion.button>

                            {submitStatus === 'success' && (
                                <motion.div 
                                    className="status-message success"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    ✅ Thank you! Your message has been sent successfully. I'll get back to you soon!
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div 
                                    className="status-message error"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    ❌ Sorry, there was an error sending your message. Please try again or email me directly.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Contact;