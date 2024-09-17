import { useState } from "react"
import { AddToDo } from "./AddToDo"
import { List } from "./List"
import { FilterToDo } from "./FilterToDo"

export const ToDoList = () => {

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
    return <>

        <AddToDo 
        onAdd = {handleAdd}
        />


        <FilterToDo
        
        currentFilter = {currentFilter}
        onSet = {setCurrentFilter}
        />
       
        <List
            currentFilter = {currentFilter}
            todos={todos}
            onUpdate = {handleUpdate}

        />


    </>
}