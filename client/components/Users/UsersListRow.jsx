import React, { PropTypes } from "react";
import { Link } from "react-router";

export const UsersListRow = ({ user }) => {
  return (
    <tr>
      <td><Link to={`/users/${user.id}`}>{user.username}</Link></td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
    </tr>
  );
};

UsersListRow.propTypes = {
  user: PropTypes.object.isRequired
};
