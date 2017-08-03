import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

export const RolesListRow = ({ role }) => {
  return (
    <tr>
      <div className="card" style={{marginRight: "80%"}}>
        <td><Link to={`/roles/${role.id}`}>{role.role}</Link></td>
      </div>
    </tr>
  );
};

RolesListRow.propTypes = {
  role: PropTypes.object.isRequired
};
