import React from 'react';
import './App.css';
import Home from './components/home';
import Navbar from './components/Navbar';
import MenWatches from './pages/MenWatches';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men-watches" element={<MenWatches />} />
          {/* ... other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
