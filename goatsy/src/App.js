import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'


import Home from './Components/Home.js'
import Footer from './Footer.js';
import Header from './Header.js';

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



  return (
    <div className='app'>
      <Switch>
        <Route path='/' exact>
          <Banner menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </Route>


        <Route path='/bio' exact >
          <Header title="bio" menuOpen={menuOpen} toggleMenu={toggleMenu} />
          <Home />
          <Footer />
        </Route >

        <Route path='/contact' exact>
          <Header title="contact" menuOpen={menuOpen} toggleMenu={toggleMenu} />
          <Contact />
          <Footer />
        </Route >

        <Route path='/projects' exact>
          <Header title="projects" menuOpen={menuOpen} toggleMenu={toggleMenu} />
          <Project />
          <Footer />
        </Route>
      </Switch>
    </div>

  );
}

export default App;
