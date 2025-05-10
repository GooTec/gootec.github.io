import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CV from './pages/CV';
import Projects from './pages/Projects';
import TimeMachine from './pages/TimeMachine';
import './styles/App.css';

// Layout component that conditionally renders navbar and footer
const Layout = ({ children }) => {
  const location = useLocation();
  const isTimeMachine = location.pathname === '/timemachine';
  
  return (
    <>
      {!isTimeMachine && <Navbar />}
      {children}
      {!isTimeMachine && <Footer />}
    </>
  );
};

function AppRoutes() {
  const location = useLocation();
  const isTimeMachine = location.pathname === '/timemachine';
  
  useEffect(() => {
    // Change document title based on path
    if (isTimeMachine) {
      document.title = 'Time Machine - Taewan Goo';
    }
  }, [isTimeMachine]);
  
  return (
    <div className={`app ${isTimeMachine ? 'timemachine-mode' : ''}`}>
      <div className={isTimeMachine ? '' : 'content'}>
        <div className={isTimeMachine ? '' : 'page-container'}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/timemachine" element={<TimeMachine />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;