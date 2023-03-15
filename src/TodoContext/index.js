import React from 'react'
import { useLocalStorage } from './useLocalStorage';

// 1.criar context , es un objeto
//2. indicar en provider qual estado que vamos compartilhar 
const TodoContext = React.createContext();

function TodoProvider (props) {
   // aqui chamamos nosso custom hook  diretamente
  const {
    item: todos, 
    saveItem:saveTodos,
    loading,
     error, 

  } = useLocalStorage("Todo_v1",[])

  const [searchValue, setSearchValue] = React.useState("")// o que o usuario digita
  const completedTodos = todos.filter(todo =>  todo.completed).length
  const [openModal, setOpenModal] = React.useState(false)
  const totalTodos = todos.length
//**************Buscador******************
  let searchTodos = []
if (!searchValue.length >=1 ) {
  searchTodos = todos;
}else {
  searchTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    console.log(todoText)
    console.log(searchText)

    return todoText.includes(searchText); 

  })
  
}

const completeTodos = (text) => {
  //find index todo por todo qual tem o mesmo texto
 const todoIndex = todos.findIndex(todo=> todo.text === text);
 const newTodos = [...todos] 
 newTodos[todoIndex].completed = true
 saveTodos(newTodos)
 
console.log( todos[todoIndex].completed )

  }
  const addTodo = (text) => {
   //crear un nuevo objeto
   // crea un nuevo un array 
   // llama el metodo push 
   const newTodos = [...todos] 
   newTodos.push({
    completed: false, 
    text,
   })
   saveTodos(newTodos)
  }
  const deleteTodos = (text) => {
    //find index todo por todo qual tem o mesmo texto, prova com y sen array vazio545
   const todoIndex = todos.findIndex(todo=> todo.text === text);
   const newTodos = [...todos] 
   newTodos.splice(todoIndex,1);
   saveTodos(newTodos)
  }
  // no se executa en orden, o segundo parametro indica quando devemos usar o usereffect
  React.useEffect(() => {
    console.log("use effect")
  },[])
    return (
        <TodoContext.Provider value = {{
            loading,
            error,
            completedTodos,
             totalTodos  ,
            searchValue ,
            deleteTodos , 
            setSearchValue ,
            completeTodos ,
            searchTodos,
            openModal,
            setOpenModal,
            addTodo,
           
        }}>
            {/*qualquer componentes podemos chamar aqui*/}
            {props.children}

        </TodoContext.Provider>
    )
}


export  {TodoContext, TodoProvider}





