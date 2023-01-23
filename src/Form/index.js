import React from 'react'
import { TodoContext } from '../TodoContext'

function Form(props) {
 const {
    addTodo,
 } = React.useContext(TodoContext);
    
 
 
 const OnCancel = () => {
     props.setOpenModal(false)
    }
  const onSubmit= () => {
    
  }
  
    return (
    <form onSubmit={onSubmit}>
      <label>...</label>
      {/* ir hacia abajo */}
      <textarea 
        placeholder='My task'
      />
      <div>
        <button type='button' onClick={OnCancel}>Cancelar</button>
        {/*type submit para nao receber o evento onClick e sim poder enviar*/}
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export {Form}
