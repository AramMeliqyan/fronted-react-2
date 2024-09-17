import { useState } from 'react'
import './App.css'
import { AddUser } from './components/AddUser'
import { UserList } from './components/UserList'
import { IUser } from './types'
import { UserContext } from './context'

function App() {
  const [users,setUsers] = useState<IUser[]>([

    {id:101,name:"Armen",age:42,salary:30000},
    {id:102,name:"Ashot",age:23,salary:60000},
    {id:103,name:"Karen",age:51,salary:90000},
    {id:104,name:"Vazgen",age:22,salary:80000},
  ])

    const removeUser = (id:number):void =>{
      setUsers(users.filter(user=>user.id != id))
    }

  return (
    <>
    <UserContext.Provider value={{users,removeUser}}>
     <AddUser/>
     <UserList/>
     </UserContext.Provider>
    </>
  )
}

export default App
