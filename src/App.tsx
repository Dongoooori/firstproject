import React from 'react';
import './App.css';
import Login from 'pages/Login';
import { Route, Routes } from 'react-router-dom';
import Initial from 'pages/Initial';

function App() {
  return (
    <div>
      <Routes>
        <Route path='' element={<Initial />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
