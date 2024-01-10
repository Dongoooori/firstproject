import React from 'react'
import "./Initial.css"
import { Link } from 'react-router-dom'

export default function Initial() {

  return (
    <div className='Initial'>
      <div className='Initial_label'>First Project</div>
      <div className='Initial_label_login'><Link to="/login">Login</Link></div>
    </div>
  )
}
