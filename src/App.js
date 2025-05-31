import './App.css';
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Route, useLocation, Routes } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { trackPageView, trackResumeDownload } from './configs/analytics';
import Footer from './Footer';
import Header from './Header';

const AboutMe = lazy(() => import('./Components/AboutMe.js'));
const Contact = lazy(() => import('./Components/Contact'));
const Banner = lazy(() => import('./Banner/Banner'));
const ProjectPage = lazy(() => import('./Project Components/ProjectGrid'));
const Blog = lazy(() => import('./Components/Blog.js'));

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [projects, setProjects] = useState([]);

  const toggleMenu = () => {
    menuOpen === true ? setMenuOpen(false) : setMenuOpen(true)
  }

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  let fullPath = useLocation();

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error loading projects:', error));
  }, []);

  useEffect(() => {
    trackPageView(window.location.pathname);
  }, []);

  const handleResumeClick = () => {
    trackResumeDownload();
  }

  return (
    <>
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} handleResumeClick={handleResumeClick} />
      <div className={`app${darkMode ? ' dark' : ' light'}`}>
        <button
          onClick={toggleDarkMode}
          style={{ position: 'fixed', top: 16, left: 16, zIndex: 200 }}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '🌙 Dark' : '☀️ Light'}
        </button>
        <Suspense fallback={<div>Loading...</div>}>
          <AnimatePresence mode="wait">
            <Routes location={fullPath} key={fullPath.pathname}>
              <Route path='/' exact element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Banner menuOpen={menuOpen} toggleMenu={toggleMenu} handleResumeClick={handleResumeClick} darkMode={darkMode} />
                </motion.div>
              } />
              <Route path='/about' element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <AboutMe />
                </motion.div>
              } />
              <Route path='/bio' element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <AboutMe />
                </motion.div>
              } />
              <Route path='/contact' element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Contact />
                </motion.div>
              } />
              <Route path='/projects' exact element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectPage handleResumeClick={handleResumeClick} projects={projects} />
                </motion.div>
              } />
              <Route path='/blog' exact element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Blog />
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
