import { useState } from "react"
import { AddTask } from "./AddTask"
import { Stats } from "./Stats"
import { TaskList } from "./TaskList"
import { useEffect } from "react"
import axios from "axios"

export const Dashboard = () => {
    const[tasks,setTasks] = useState([])

    const addTask = task =>{
        setTasks([...tasks,task])
    }


    const handleDelete = id =>{
        setTasks(tasks.filter(x => x.id !== id))
    }




    useEffect(()=>{

        axios
        .get("http://localhost:3004/tasks")
        .then(response=>{
            setTasks(response.data)
        })

    },[])


    const handleUpdate = (id,status) =>{
    
        axios
        .patch("http://localhost:3004/tasks/"+id,{status})
        .then(response=>
         setTasks(tasks.map(task=>task.id ==id ?{...task,status:response.data.status}:task)))
        
    }


    




    return <div className="dashboard">
        <div className="row">
            <TaskList
            tasks={tasks}
            onDelete = {handleDelete}
            onUpdate = {handleUpdate}
            />
            <AddTask
            onAdd = {addTask}
            />
            
        </div>
        <Stats
        totalTasks = {tasks.length}
        completedTasks = {tasks.filter(e=>e.status == 'completed').length}
        inProgresTasks = {tasks.filter(e=>e.status == 'in progress').length}
        unstartedTasks = {tasks.filter(e=>e.status == 'unstarted').length}
        />
    </div>
}