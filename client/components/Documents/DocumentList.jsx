import React, { PropTypes } from "react";
import { DocumentsListRow } from "./DocumentsListRow.jsx";

export const DocumentList = ({ documents }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {document.length ? documents.map(document =>

          <DocumentsListRow key={document.id} document={document} />
        ) : <span>Document Does Not Exist </span>}
      </tbody>
    </table>
  );
};

DocumentList.propTypes = {
  documents: PropTypes.array.isRequired
};
