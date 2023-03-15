import React from 'react'
import { Form } from '../Form'
import { TodoContext } from '../TodoContext'
import {TodoCounter} from "../TodoCounter"
import {TodoSearch} from "../TodoSearch"
import { TodoList } from '../TodoList'
import { CreateTodoButton } from '../CreateTodo'
import { TodoItem } from "../TodoItem/index.js"
import {Modal} from "../Modal"
import { TodoError } from '../TodosLoading/TodoError'
import { TodoLoading } from '../TodosLoading/TodoLoading'
import { Empty } from '../TodosLoading/Empty'

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
        {error &&  <TodoError error= {error}/>}
        {loading && <TodoLoading/>}
        {(!loading && !searchTodos.length) && <Empty/>}

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
          <button class="btn-x" onClick={()=> setOpenModal(false)}>x</button>
          <Form/>
        </Modal>
      
      )}
      <CreateTodoButton setOpenModal={setOpenModal}></CreateTodoButton>
      </div>
      
    </div>
  )
}

export {AppUi}
