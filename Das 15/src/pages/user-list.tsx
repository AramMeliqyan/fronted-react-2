import { useState } from "react"
import { Link } from "react-router-dom"

interface IUser{
    id:number
    name:string
}

export const UserList = () =>{
    const [users,setUsers] = useState<IUser[]>([
        {id:101,name:'Anna'},
        {id:102,name:"Karen"},
        {id:103,name:'Nare'},
    ])
    return <div>
        <h2>UserList</h2>
        {/* <a href="/add">Add User</a> */}
        {
            users.map(user =>
                <div key={user.id}>
                    <p>{user.name}</p>
                    <Link to = {"/user/" + user.id}>details</Link>
                </div>
            )
        }

        <Link to = "/add">Add</Link>
    </div>
}