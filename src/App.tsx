import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './Components/List';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} Component={List} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
