import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

const DocumentsListRow = ({ role }) => {
  return (
    <tr>
      <td><Link to={`/roles/${role.id}`}>{role.role}</Link></td>
    </tr>
  );
};

DocumentsListRow.propTypes = {
  role: PropTypes.object.isRequired
};

export default DocumentsListRow;
