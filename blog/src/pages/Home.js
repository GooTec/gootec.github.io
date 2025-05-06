import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-container">
        <img 
          src={process.env.PUBLIC_URL + '/profile.png'} 
          alt="Taewan Goo" 
          className="profile-image"
        />
        <h1 className="profile-name">Taewan Goo</h1>
        <p className="profile-title">Ph.D. Candidate in Bioinformatics</p>
      </div>
      
      <div className="navigation-buttons">
        <Link to="/cv" className="nav-button cv-button">
          <i className="fas fa-file-alt"></i> CV
        </Link>
        <Link to="/projects" className="nav-button projects-button">
          <i className="fas fa-code-branch"></i> PROJECTS
        </Link>
        <Link to="/timemachine" className="nav-button time-button">
          <i className="fas fa-clock"></i> TIME MACHINE
        </Link>
      </div>
    </div>
  );
};

export default Home;
