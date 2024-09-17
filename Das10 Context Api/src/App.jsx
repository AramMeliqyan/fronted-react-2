import { useState } from 'react'
import './App.css'
import { Dashboard } from './Dashboard'
import { UserContext } from './context'

function App() {
  const [users, setUsers] = useState([
    {id:100,name:"Vazdgen",age:21,salary:100000},
    {id:101,name:"David",age:23,salary:200000},
    {id:102,name:"Karen",age:25,salary:300000},
    {id:103,name:"Levon",age:27,salary:400000},
  ])


  const removeUser = (id) =>{
    setUsers(users.filter(user => user.id !== id))
  }
const handleAdd = user =>{
  setUsers([...users,{...user,id:Date.now()}])
}



  return (
    <>
    <UserContext.Provider value={{users,onRemove:removeUser,onAdd:handleAdd}}>
      <Dashboard/>
      </UserContext.Provider>
    </>
  )
}

export default App
