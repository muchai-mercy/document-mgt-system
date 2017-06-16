import React, { PropTypes } from "react";
import { Link } from "react-router";

const UsersListRow = ({ user }) => {
  return (
    <tr>
      <td><Link to={`/users/${user.id}`}>{user.username}</Link></td>
      <td>{user.email}</td>
    </tr>
  );
};

UsersListRow.propTypes = {
  user: PropTypes.object.isRequired
}

export default UsersListRow;
