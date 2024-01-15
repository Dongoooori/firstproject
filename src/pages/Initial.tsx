import React from 'react'
import "./Initial.css"
import { Link } from 'react-router-dom'

export default function Initial() {

  return (
    <div className='Initial'>
      <div className='Initial_label'>TodoList Project</div>
      <div className='Initial_label_login'><Link to="/todoList">Login</Link></div>
    </div>
  )
}
