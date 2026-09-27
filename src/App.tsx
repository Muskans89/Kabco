import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dealer from './pages/Dealer';

import './index.css';
import Products from './pages/Products';

const App = () => {
  // Scroll-to-top functionality within the App component
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <Router>
      <ScrollToTop /> {/* This will scroll to top on every route change */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
         <Route path="/Products" element={<Products/>} />
        <Route path="/Dealer" element={<Dealer />} />
        <Route path="/Contact" element={<Contact />} />
    
    
      </Routes>
    </Router>
  );
};
export default App;
