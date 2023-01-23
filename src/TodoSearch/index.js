import React from 'react'
import { TodoContext } from '../TodoContext'
import "./index.css"




function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  const onSearchValueChange = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }
  
  return (
    <>
    <input 
    className="TodoSearch" 
    placeholder="Cebolla" 
    value = {searchValue}//aqui conectamos con el use state
    onChange= {onSearchValueChange}
    
    />
    {/*<p> {searchValue}</p>*/}
    </>
  )
}

export {TodoSearch}
