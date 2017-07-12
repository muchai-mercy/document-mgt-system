import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

const DocumentsListRow = ({ role }) => {
  return (
    <tr>
      <div className="card" style={{marginRight: "80%"}}>
        <td><Link to={`/roles/${role.id}`}>{role.role}</Link></td>
      </div>
    </tr>

  );
};

DocumentsListRow.propTypes = {
  role: PropTypes.object.isRequired
};

export default DocumentsListRow;
