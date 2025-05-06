import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {new Date().getFullYear()} Taewan Goo. All rights reserved.</p>
        <div className="footer-contact">
          <a href="mailto:gootec92@snu.ac.kr" className="footer-link">gootec92@snu.ac.kr</a>
          <a href="https://github.com/GooTec" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
