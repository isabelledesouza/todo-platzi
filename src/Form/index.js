import React from 'react'
import { TodoContext } from '../TodoContext'
import  "./index.css"
function Form(props) {
 //guardar
 const [newTodoValue, setNewTodoValue] = React.useState("")
 
  //consumir el estado
 const {addTodo,
  setOpenModal

} = React.useContext(TodoContext);
const OnCancel = () => {
    setOpenModal(false)
}
const onSubmit= (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
}
  const onChange= (event) => {
  setNewTodoValue(event.target.value)
}
  return (
    
  <form onSubmit={onSubmit} >
    <label>...</label>
     +{/* ir hacia abajo */}
      <textarea 
       value= {newTodoValue}
       onChange= {onChange} 
        placeholder='My task'
      />
      <div className='TodoForm-buttonContainer'>
        <button className="TodoForm-button TodoForm-button--cancel" type='button' onClick={OnCancel}>Cancelar</button>
        {/*type submit para nao receber o evento onClick e sim poder enviar*/}
        <button  className="TodoForm-button TodoForm-button--cancel"type="submit">Add</button>
      </div>
  </form>
  )
}

export {Form}
