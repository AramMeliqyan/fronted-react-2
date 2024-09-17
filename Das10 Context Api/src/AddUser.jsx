import { useContext, useState } from "react"
import { UserContext } from "./context"

export const AddUser = () =>{
const {onAdd} = useContext(UserContext)



const [user,setUser] = useState({name:"",age:"",salary:""})

const handleSubmit = event=>{
    event.preventDefault()
    // console.log(user)
    onAdd(user)
    setUser({name:"",age:"",salary:""})
}



    return <>
    <h3>AddUser</h3>
    <form onSubmit={handleSubmit}>
        <input 
        value={user.name}
        onChange={event=>setUser({...user,name:event.target.value})}
        
        />
        <input
        value={user.age}
        onChange={event=>setUser({...user,age:event.target.value})}
        />

        <input 
        value={user.salary}
        onChange={event=>setUser({...user,salary:event.target.value})}
        />

        <button>save</button>
    </form>
    </>
}