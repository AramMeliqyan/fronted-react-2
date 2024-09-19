import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserList } from './UserList';
import { AddUser } from './AddUser';
import { EditUser } from './EditUser';


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/add" element={<AddUser />} />
      <Route path="/user/:id" element={<EditUser/>} />
    </Routes>
  </Router>
);

export default App;
