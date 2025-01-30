import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import AppContent from './AppContent';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
