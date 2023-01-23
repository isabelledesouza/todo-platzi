import React from 'react'
import "./App.css"
import {TodoProvider} from "../TodoContext"
import { AppUi } from './AppUi'





function App() {
  

  return (
 <TodoProvider>
  {/* seja o que for que es dentro de appui vai compartir el estado */}
    <AppUi 
      className= "container"/>
 </TodoProvider>
   
      
   
  )
}

export default App


