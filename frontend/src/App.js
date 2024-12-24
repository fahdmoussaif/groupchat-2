import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Test from './Pages/test';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<Homepage/>} />
        <Route path='test' element={<Test/>} />
      </Routes>
    </div>

  );
}

export default App;
