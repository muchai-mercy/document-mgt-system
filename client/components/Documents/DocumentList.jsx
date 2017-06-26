import React, { PropTypes } from "react";
import DocumentsListRow from "./DocumentsListRow.jsx";

const DocumentList = ({ documents }) => {
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
        {documents ? documents.map(document =>

          <DocumentsListRow key={document.id} document={document} />
        ) : <span />}
      </tbody>
    </table>
  );
};

DocumentList.propTypes = {
  documents: PropTypes.array.isRequired
};

export default DocumentList;
