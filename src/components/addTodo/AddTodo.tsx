import { Button, Grid, TextField } from '@mui/material'
import React, { ChangeEvent, KeyboardEvent, useEffect } from 'react'

type Props = {
  text: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  handleAddTodo: () => void;
}

export default function AddTodo(props: Props) {
  const { text, handleChange, handleAddTodo } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo();
  };



  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <TextField placeholder='Add Todo' value={text} onChange={handleChange} autoComplete='off'/>
        <Button variant='contained' onClick={handleAddTodo}>Add</Button>
      </Grid>
    </form>
  )
}
