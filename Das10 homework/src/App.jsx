import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToDoList } from './components/TodoList'
import { ToDoContext } from './context'

function App() {
  const [todos, setTodos] = useState([
    { id: 101, text: "Go for walk", completed: false },
    { id: 102, text: "Have a coffe", completed: true },
    { id: 103, text: "Do workout", completed: false }
])

const[currentFilter,setCurrentFilter] = useState("all")

const handleAdd = text => {
    setTodos([...todos,{text, completed:false,id:Date.now()} ])
}

const handleUpdate = id =>{
    setTodos(todos.map(todo=>
        todo.id != id ? todo :{...todo,completed: !todo.completed}
    ))
}

const handleDelete = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
};


  return (
    <>
    <ToDoContext.Provider value={{todos,onAdd:handleAdd,onUpdate:handleUpdate,currentFilter,onSet:setCurrentFilter,onDelete:handleDelete}}>
     <ToDoList/>
     </ToDoContext.Provider>
    </>
  )
}

export default App
