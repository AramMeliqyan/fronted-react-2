import { useContext } from "react"
import { UserContext } from "../context/context"

export const UserList = () =>{
    const context = useContext(UserContext)
    if(!context){
        throw new Error("Outside Provider")
    }
    const{state,dispatch} = context
    return <>
    <h3>User List</h3>
    {
        state.users.map(user=><div key={user.id}>
            
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user.salary}</p>
            <button onClick={() =>dispatch({type:'users/delete',payload:user.id})}>X</button>
        </div>)
    }
    </>
}

