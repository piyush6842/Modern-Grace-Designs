import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import {
  InteriorDesign,
  Renovation,
  Consultation,
  CustomFurniture
} from './components/services';

const AppRoutes = () => {
  const ScrollToTopInsideApp = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);
  
    return null;
  };

  return (
    <Routes>
      <ScrollToTopInsideApp /> 
      <Route path="/services/interior-design" element={<InteriorDesign />} />
      <Route path="/services/renovation" element={<Renovation />} />
      <Route path="/services/consultation" element={<Consultation />} />
      <Route path="/services/custom-furniture" element={<CustomFurniture />} />
    </Routes>
  );
};

export default AppRoutes; 