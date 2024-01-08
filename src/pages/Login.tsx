import { Box } from "@mui/material"
import "./Login.css"
import React from 'react'
import { relative } from "path"
import Auth from "components/login/Auth"

export default function login() {
  return (
    <div className='Login'>
      <Auth />
    </div>
  )
}
