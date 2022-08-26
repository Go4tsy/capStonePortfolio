import './App.css';
import { Routes, Route, Switch, useLocation } from 'react-router-dom'
import Home from './Components/Home.js'
import Footer from './Footer.js';
import Header from './Header';
import Contact from './Components/Contact';
import Project from './Project Components/Project';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/bio' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
