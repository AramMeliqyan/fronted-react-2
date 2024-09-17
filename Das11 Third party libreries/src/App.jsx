import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddUser } from './components/add-user'
import { UserList } from './components/user-list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <AddUser/>
   <UserList
   age = {"52"}
   />
    </>
  )
}

export default App
