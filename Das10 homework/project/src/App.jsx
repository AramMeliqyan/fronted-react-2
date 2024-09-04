import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserList } from './UserList'
import { AddUser } from './AddUser'

function App() {
  const [users, setUsers] = useState([
    { id: 101, name: "Tiko", salary: 200000 },
    { id: 102, name: "Ashot", salary: 300000 },
    { id: 103, name: "Vahe", salary: 400000 },
  ])
  const addUser = obj => {
    setUsers([...users, { ...obj, id: users.length + 1 }])
  }
  return (
    <>
      <UserList users={users} />
      <AddUser
        onAdd={addUser}
      />
    </>
  )
}

export default App
