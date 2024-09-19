import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IUser } from './types';


export const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(response => setUsers(response.data));
  }, []);

  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:5000/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      });
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} {user.surname}, Age: {user.age}, Salary: {user.salary}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
            <Link to={`/user/${user.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Link to="/add">Add User</Link>
    </div>
  );
};
