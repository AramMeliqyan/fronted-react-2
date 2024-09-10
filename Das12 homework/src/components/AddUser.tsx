import { useState, useContext } from "react"
import { UserContext } from "../context"
import { NewUser } from '../types'



export const AddUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("Context is undefined")
  }
  
  const { users, setUsers } = context
  const [formData, setFormData] = useState<NewUser>({ name: '', age: 0, salary: 0 })
  const [error, setError] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: name === 'age' || name === 'salary' ? Number(value) : value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || formData.age <= 0 || formData.salary <= 0) {
      setError('ERROR! Please fill in all fields correctly.')
      return
    }

    setError('') 

    const newId = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1
    const newUser = { ...formData, id: newId }
    setUsers([...users, newUser])
    setFormData({ name: '', age: 0, salary: 0 }) 
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={formData.salary}
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
      {error && <p>{error}</p>}
    </form>
  )
}
