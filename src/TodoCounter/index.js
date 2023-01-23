import React from 'react'
import { TodoContext } from '../TodoContext'
import "./index.css"
function TodoCounter() {
  const { totalTodos, completedTodos} =React.useContext(TodoContext)
  return (
    <div>
      <h2 className='TodoCounter'> Has completado {completedTodos} de {totalTodos} TODOs</h2>
    </div>
  )
}

export {TodoCounter}
