import React, {useState, useEffect} from 'react';
import './App.css';
import ContactUs from './contactUs/contactUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Gallery from '../pages/gallery/gallery';

function App() {
  

  return (
    <div className="flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
