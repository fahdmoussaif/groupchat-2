import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<Homepage />} />
      </Routes>
    </div>

  );
}

export default App;
