import React from 'react'
import "./Menu.css"
import Header from 'components/header/Header'
import { useNavigate } from 'react-router-dom'

export default function Menu() {
  const navigate = useNavigate();
  const handleTodoList = () => {
    navigate("/todoList")
  }
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div>
          <div onClick={handleTodoList}>
              TodoList
          </div>
        </div>
      </main>
    </>
  )
}
