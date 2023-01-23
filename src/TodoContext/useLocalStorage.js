import React from 'react'
import {useEffect} from "react"

//const defaultTodos = [

  //{ text: "Cortar cebolla", completed: true},
  //{ text: "Tomar el curso", completed: true},
 // { text: "Llorar", completed: false}

//]

// **** 1.devolve los itens del local storage, recebemos el nome de elemento que vamos trabajar  ***///
// 2. verificar se existe
// 3. llamos el use state
// saveItem() guarda los valores tanto en react quanto no local storage
// todos lugares que recebemos un array vaazio por defeito substituimos por initial value
function useLocalStorage (itemName, initialValue) {
   const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
 
  const [item, setItem] = React.useState(initialValue)
  useEffect(() => {
      setTimeout(()=>{
        try {
          const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
       
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue)) //{}
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        setItem(parsedItem)
        } catch (error) {
          setError(error)
        }
        
        //terminou de carregar nossa aplicacao
        setLoading(false)
      }, 1000)
    })
   
  // la puente entre local storage en nuestro estado 
  const saveItem  = (newItem) => {
    try {
      const stringfiedTodos = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringfiedTodos)
      setItem(newItem)
    } catch (error) {
     setError(error) 
    }
    
  }
  // quando tem mais de um estado y seu atualizador mandamos un objeto
    return {item, saveItem, error, loading} // [todos, saveTodos];
  }

  export {useLocalStorage}