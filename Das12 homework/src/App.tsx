import { useState } from 'react'
import './App.css'
import { UserList } from './components/UserList'
import { IUser } from './types'
import { UserContext } from './context'
import { AddUser } from './components/AddUser'

function App() {
  const [users, setUsers] = useState<IUser[]>([
    { id: 101, name: "Armen", age: 42, salary: 30000 },
    { id: 102, name: "Ashot", age: 23, salary: 60000 },
    { id: 103, name: "Karen", age: 51, salary: 90000 },
    { id: 104, name: "Vazgen", age: 22, salary: 80000 },
  ])

  const removeUser = (id: number): void => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <UserContext.Provider value={{ users, setUsers, removeUser }}>
      <div>
        <h1>Add User</h1>
        <AddUser />
        <UserList />
      </div>
    </UserContext.Provider>
  )
}

export default App
