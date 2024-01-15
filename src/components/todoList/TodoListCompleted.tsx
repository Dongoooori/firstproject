import React from 'react'

type Props = {
  completed: boolean
}

export default function TodoListCompleted(props:Props) {
  const { completed } = props;
  return (
    <div>Completed</div>
  )
}
