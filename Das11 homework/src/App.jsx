import React, { useState } from 'react';
import './app.css';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    const { password, ...userData } = user; // Не отображаем пароль
    setUsers([...users, userData]);
  };

  return (
    <div>
      <AddUser addUser={addUser} />
      <UserList users={users} />
      <ToastContainer />
    </div>
  );
};

export default App;

