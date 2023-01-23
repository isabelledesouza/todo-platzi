import React from 'react'
import "./index.css"

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(true);
    console.log(props.setOpenModal)
  }
  
  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >+</button>
  )
}

export {CreateTodoButton}
