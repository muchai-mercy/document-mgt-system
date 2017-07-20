import React from "react";
import PropTypes from "prop-types";
import { RolesListRow } from "./RolesListRow.jsx";

export const RolesList = ({ roles }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {roles.length ? roles.map(roles =>

          <RolesListRow key={roles.id} role={roles} />
        ) : <span>Role Does Not Exist </span>}
      </tbody>
    </table>
  );
};

RolesList.propTypes = {
  roles: PropTypes.array.isRequired
};

export default RolesList;
