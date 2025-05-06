import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Hide navbar on homepage until scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  if (isHomePage && !isScrolled) {
    return null; // Hide navbar on homepage when not scrolled
  }
  
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/" className="logo-link">Taewan Goo</NavLink>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/cv" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              <i className="fa-solid fa-file-lines"></i> CV
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              <i className="fa-solid fa-code-branch"></i> PROJECTS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/timemachine" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              <i className="fa-solid fa-clock"></i> TIME MACHINE
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
