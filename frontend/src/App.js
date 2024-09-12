import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import BankPage from './components/BankPage';
import CreditCardPage from './components/CreditCardPage';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/banks" element={<BankPage />} />
        <Route path="/credit-cards" element={<CreditCardPage />} />
        <Route path="/" element={<BankPage />} />
      </Routes>
    </Router>
  );
};

export default App;
