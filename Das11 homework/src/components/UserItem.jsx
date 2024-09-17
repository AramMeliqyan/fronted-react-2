import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user }) => {
  return (
    <tr>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.login}</td>
      <td>{user.age}</td>
    </tr>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
};

export default UserItem;
