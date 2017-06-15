import React, { PropTypes } from "react";
import { Link } from "react-router";

const DocumentsListRow = ({ document }) => {
  return (
    <tr>
      <td><Link to={`/document/${document.id}`}>{document.title}</Link></td>
      <td>{document.content}</td>
    </tr>
  );
};

DocumentsListRow.propTypes = {
  document: PropTypes.object.isRequired
}

export default DocumentsListRow;
