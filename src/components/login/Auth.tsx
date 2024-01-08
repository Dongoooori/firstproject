import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import "./Auth.css"
import React from 'react'
import { Link } from 'react-router-dom'

export default function Auth() {
  return (
    <Box sx={{
      position: "relative",
      zIndex: 2, // 부모보다 높은 값
      opacity: 0.94, // 투명도 100%
      width: "500px",
      height: "600px",
      backgroundColor: "#C4C0C0",
      boxShadow: "10px 10px 20px black",
      borderRadius: "8px",
      display: "flex", // Flexbox 사용
      flexDirection: "column", // 세로 방향 정렬
      alignItems: "center",
      justifyContent: "top",
    }}>
      <div className='Profile' />
      <div className='Profile-Text'>Welcome back!</div>
      <div className='LoginForm'>
        <TextField placeholder='Username' autoComplete='off'/>
        <TextField placeholder='Password' autoComplete='off'/>
      </div>
      <div className='LoginButton'>
        <Button variant='contained'>Sign in</Button>
      </div>
      <div className='LoginCheck'>
        <FormControlLabel control={<Checkbox />} label="Remember me"/>
        <Button>Forgot Password</Button>
      </div>
      <div className='LoginOther'>OR</div>
      <div className='LoginOtherButton'>
        <Button variant='contained' sx={{backgroundColor: "white"}}><div className='Google'/></Button>
        <Button variant='contained' sx={{backgroundColor: "white"}}><div className='Facebook'/></Button>
        <Button variant='contained' sx={{backgroundColor: "white"}}><div className='Apple'/></Button>
      </div>
      <div className='NoAccount'>
        Don&apos;t have an account?&nbsp;
        <Link to="/register">Register now</Link>
      </div>
    </Box>
  )
}
