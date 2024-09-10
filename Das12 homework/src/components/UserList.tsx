import { useContext } from "react"
import { UserContext } from "../context"

export const UserList = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("Context is undefined")
  }
  
  const { users, removeUser } = context

  return (
    <>
      <h3>User List</h3>
      {users.map(user => (
        <div key={user.id}>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Salary: {user.salary}</p>
          <button onClick={() => removeUser(user.id)}>X</button>
        </div>
      ))}
    </>
  )
}
