import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, useLocation, Routes } from 'react-router-dom';

import ReactGA from 'react-ga';

import Bio from './Components/Bio.js'


import Contact from './Components/Contact';
import Project from './Project Components/Project';
import Banner from './Banner/Banner';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    menuOpen === true ? setMenuOpen(false) : setMenuOpen(true)
  }

  let fullPath = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [fullPath])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      return () => document.body.style.overflow = 'unset';
    }
  }, [menuOpen])

  // Google Analytics - s/o tylerConfeti
  ReactGA.initialize(process.env.REACT_APP_ANALYTICS);
  ReactGA.pageview(window.location.pathname);

  const handleResumeClick = () => {
    ReactGA.event({
      category: "Links",
      action: "Resume",
      label: "Resume Link Clicked",
      value: 1
    })
  }

  return (
    <>

      {/* <Header title="bio" menuOpen={menuOpen} toggleMenu={toggleMenu} handleResumeClick={handleResumeClick} /> */}
      {/* <Banner/> */}
    <div className='app'>
      <Routes>
        <Route path='/' exact element={<Banner   menuOpen={menuOpen} toggleMenu={toggleMenu} handleResumeClick={handleResumeClick} /> } />

        <Route path='/bio' element={ <Bio  /> } />

        <Route path='/contact' element={<Contact />} />

        <Route path='/projects' exact element={ <Project handleResumeClick={handleResumeClick} />}/>
      </Routes>
    </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
