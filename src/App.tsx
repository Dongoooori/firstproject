import React from 'react';
import './App.css';
import Login from 'pages/Login';
import { Route, Routes } from 'react-router-dom';
import Initial from 'pages/Initial';
import Menu from 'pages/Menu';
import TodoList from 'pages/TodoList';

function App() {
  return (
    <div>
      <Routes>
        <Route path='' element={<Initial />}/>
        <Route path='/login' element={<Login />}/>
        <Route path="/menu" element={<Menu />} />
        <Route path='/todoList' element={<TodoList />}/>
      </Routes>
    </div>
  );
}

export default App;
