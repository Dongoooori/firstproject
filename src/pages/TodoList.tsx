import React, { useEffect, useState } from 'react'
import "./TodoList.css"
import { Box, Button, Grid, TextField } from '@mui/material'
import TodoListAll from 'components/todoList/TodoListAll'
import TodoListActive from 'components/todoList/TodoListActive'
import TodoListCompleted from 'components/todoList/TodoListCompleted'
import { LightModeOutlined, LightModeRounded } from '@mui/icons-material'


export default function TodoList() {
  // darkMode, LightMode
  const [lightMode, setLightMode] = useState<boolean>(false);
  // todoList(All)
  const [all, setAll] = useState<boolean>(false);
  // todoList(Active)
  const [active, setActive] = useState<boolean>(false);
  // todoList(Completed)
  const [completed, setCompleted] = useState<boolean>(false);
  
  // darkMode, LightMode handler
  const handleLightMode = () => {
    setLightMode(!lightMode);
  }

  // current status click handler
  const handleHeaderListClick = (label: string): void => {
    setAll(label === 'all');
    setActive(label === 'active');
    setCompleted(label === 'completed');
  };

  // first Mounting
  useEffect(() => {
    setLightMode(false);
    setAll(true);
    setActive(false);
    setCompleted(false);
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
        <div className={lightMode ? "Header_Light" : "Header_Dark"}>
          <div onClick={handleLightMode} >
            {lightMode ? <LightModeRounded /> : <LightModeOutlined />}
          </div>
          <div className='Header_List'>
            <div className={`Label ${all ? "Label-Active" : ""}`} style={{textDecorationColor: lightMode ? "#373737" : ""}}  onClick={() => handleHeaderListClick("all")}>All</div>
            <div className={`Label ${active ? "Label-Active" : ""}`} style={{textDecorationColor: lightMode ? "#373737" : ""}} onClick={() => handleHeaderListClick("active")}>Active</div>
            <div className={`Label ${completed ? "Label-Active" : ""}`} style={{textDecorationColor: lightMode ? "#373737" : ""}} onClick={() => handleHeaderListClick("completed")}>Completed</div>
          </div>
        </div>
        <div className={lightMode ? "TodoBox_Light" : "TodoBox_Dark"}>
          <TodoListAll all={all}/>
          <TodoListActive active={active}/>
          <TodoListCompleted completed={completed}/>
        </div>
        <div className={lightMode ? "Footer_Light" : "Footer_Dark"}>
          <Grid>
            <TextField placeholder='Add Todo'></TextField>
            <Button variant='contained'>Add</Button>
          </Grid>
        </div>
      </Box>
    </div>
  )
}
