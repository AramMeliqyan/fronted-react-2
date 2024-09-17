import React from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';

const UserList = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>surname</th>
          <th>login</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <UserItem key={index} user={user} />
        ))}
      </tbody>
    </table>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default UserList;
