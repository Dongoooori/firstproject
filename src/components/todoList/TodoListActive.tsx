import React from 'react'

type Props = {
  active: boolean
}

export default function TodoListActive(props:Props) {
  const { active } = props;
  return (
    <div>Active</div>
  )
}
