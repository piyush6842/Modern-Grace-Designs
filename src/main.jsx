// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeContext, { ThemeProvider } from './components/ThemeContext.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Products from './components/Products.jsx';
import InteriorDesign from './components/services/InteriorDesign.jsx';
import Renovation from './components/services/Renovation.jsx';
import Consultation from './components/services/Consultation.jsx';
import CustomFurniture from './components/services/CustomFurniture.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>  {/* Wrap the app in ThemeProvider */}
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
          <Route path='/services/interior-design' element={<InteriorDesign />} />
          <Route path='/services/renovation' element={<Renovation />} />
          <Route path='/services/consultation' element={<Consultation />} />
          <Route path='/services/custom-furniture' element={<CustomFurniture />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
