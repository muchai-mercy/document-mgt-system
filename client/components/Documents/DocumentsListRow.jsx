import React, { PropTypes } from "react";
import { Link } from "react-router";

export const DocumentsListRow = ({ document }) => {
  return (
    <tr>
      <td><Link to={`/documents/${document.id}`}>{document.title}</Link></td>
      <td>{document.content}</td>
      <td>{document.category}</td>
    </tr>
  );
};

DocumentsListRow.propTypes = {
  document: PropTypes.object.isRequired
};
