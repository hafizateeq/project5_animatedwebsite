import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';
import NabBar from './NabBar';
import {Footer} from './Footer';

function App() {
  return (
    <div>
      <NabBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        {/* <Route path="*" element={<Home />}></Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
