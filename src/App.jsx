import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Import your Home component
import Favorites from './components/Favorites'; // Import your Favorites component
import Navbar from './components/Navbar'; // Import your Navbar component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/favorites" element={<Favorites />} /> {/* Favorites Page */}
      </Routes>
    </Router>
  );
};

export default App;
