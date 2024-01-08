import React from 'react';
import './App.css';
import Login from 'pages/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
