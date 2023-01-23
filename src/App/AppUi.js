import React from 'react'
import { Form } from '../Form'
import { TodoContext } from '../TodoContext'
import {TodoCounter} from "../TodoCounter"
import {TodoSearch} from "../TodoSearch"
import { TodoList } from '../TodoList'
import { CreateTodoButton } from '../CreateTodo'
import { TodoItem } from "../TodoItem/index.js"
import {Modal} from "../Modal"
const defaultTodos = [

  { text: "Cortar cebolla", completed: true},
  { text: "Tomar el curso", completed: true},
 { text: "Llorar", completed: false}

]

function AppUi() {
  const {
    loading,
    error,
    deleteTodos ,
    searchTodos,
    completeTodos, 
    openModal,
    setOpenModal } = React.useContext(TodoContext)
  
  return (
    <div class="container-1">
    <div className="smallbg">
     
    </div>
      <div className='container'>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList className ="todolist">
        {error &&  <p  className ="todolistp">Desesperate, hubo un error ...</p>}
        {loading && <p className ="todolistp">Estamos cargando, no desesperes...</p>}
        {(!loading && !searchTodos.length) && <p className ="todolistp">Crea tu primer TODO!</p>}

        {searchTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text} 
        completed= {todo.completed}
        onComplete = {()=>completeTodos(todo.text)}
        //Delete
        onDelete = {() =>  deleteTodos(todo.text)  }
        >

        </TodoItem>))}  
        </TodoList>
        {openModal && (
        <Modal>
        <button onClick={()=> setOpenModal(false)}>x</button>
      <Form/>
      </Modal>
      
      )}
      <CreateTodoButton setOpenModal={setOpenModal}></CreateTodoButton>
      </div>
      
    </div>
  )
}

export {AppUi}
