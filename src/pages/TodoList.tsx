import React, { ChangeEvent, useEffect, useState } from 'react'
import "./TodoList.css"
import { Box, Button, Grid, TextField } from '@mui/material'
import Todo from 'components/todoList/Todo'
import Header from 'components/header/Header'
import AddTodo from 'components/addTodo/AddTodo'

export type TodoProp = {
  id: string;
  text: string;
  status: string;
}

const filters = ["All", "Active", "Completed"]

export default function TodoList() {
  // darkMode, LightMode
  const [lightMode, setLightMode] = useState<boolean>(false);
  // allTodos
  const [todos, setTodos] = useState<TodoProp[]>([])
  //
  const [currentFilter, setCurrentFilter] = useState<string>("All");

  // todoText
  const [text, setText] = useState<string>("");
  console.log(text)

  // filtered todoList
  const filteredTodos = todos.filter(todo => {
    if (currentFilter === "Active") return todo.status === "active";
    if (currentFilter === "Completed") return todo.status === "completed";
    return true; 
  });

  // darkMode, LightMode handler
  const handleLightMode = () => {
    setLightMode(!lightMode);
  }

  // current status click handler
  const handleFilterChange = (filter: string) => {
    setCurrentFilter(filter);
  };

  // todoText eventhandler
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  // add todolist
  const handleAddTodo = () => {
    const newTodo = {
      id: Math.random().toString(),
      text: text,
      status: "active"
    }
    if(Number(text.trim().length) > 0) {
      // add newTodo
      setTodos([...todos, newTodo])
      // initial text
      setText("");
    } else {
      setText("");
    }
  }

  // 
  const handleUpdate = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, status: todo.status === "active" ? "completed" : "active" } : todo
    ));
  }

  // 
  const handleDelete = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  // first Mounting
  useEffect(() => {
    setLightMode(false);
    setText("");
  },[])


  return (
    <div className={lightMode ? "TodoList_Light" : "TodoList_Dark"}>
      <Box 
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          height: "600px",
          backgroundColor: lightMode ? "white" : "#000646",
          boxShadow: lightMode ? "10px 10px 20px gray" : "10px 10px 20px black",
          borderRadius: "10px",
      }}>
        <div>
          <Header lightMode={lightMode} filters={filters} handleLightMode={handleLightMode} handleFilterChange={handleFilterChange} currentFilter={currentFilter}/>
        </div>
        <div className={lightMode ? "TodoBox_Light" : "TodoBox_Dark"}>
          <ul>
            {filteredTodos.map((item) => 
              <Todo id={item.id} key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
            )}
          </ul>
        </div>
        <div className={lightMode ? "Footer_Light" : "Footer_Dark"}>
          <AddTodo text={text} handleChange={handleChange} handleAddTodo={handleAddTodo}/>
        </div>
      </Box>
    </div>
  )
}
