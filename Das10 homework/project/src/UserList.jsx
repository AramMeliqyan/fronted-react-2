export const UserList = ({ users }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>salary</th>
            <th>actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((elm) => (
            <tr key={elm.id}>

              <td>{elm.id}</td>
              <td>{elm.name}</td>
              <td>{elm.salary}</td>
              <td> </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

