import { DeleteOutline } from '@mui/icons-material'
import { Box, Checkbox, Typography } from '@mui/material'
import { TodoProp } from 'pages/TodoList'
import React from 'react'

type Props = {
  id: string;
  todo: TodoProp
  onUpdate: (id: string) => void
  onDelete: (id: string) => void
}

export default function Todo(props: Props) {
  const { id, todo, onUpdate, onDelete } = props;

  return (
    <Box
      sx={{
        display: "flex",
        width: "auto",
        height: "40px",
        padding: "0px 14px 0px 0px",
        fontSize: "20px",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
      <div style={{ display: "flex", marginLeft: "-12px"}}>
        <input type='checkbox' style={{ transform: "scale(1.5)" }} key={id} checked={todo.status === "completed"} onChange={() => onUpdate(todo.id)}/>
        <div style={{ marginLeft: "6px"}}>{todo.text}</div>
      </div>
      <div onClick={() => onDelete(todo.id)}>
        <DeleteOutline />
      </div>
    </Box>
  )
}
