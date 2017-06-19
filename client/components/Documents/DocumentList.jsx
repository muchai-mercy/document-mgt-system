import React, { PropTypes } from "react";
import DocumentsListRow from "./DocumentsListRow.jsx";

const DocumentList = ({ document }) => {
  return (
      <ul className="pagination">
          <li className="disabled"><a href=""><i className="material-icons">chevron_left</i></a></li>
          <li className="active"><a href="#!">1</a></li>
          <li className="waves-effect"><a href="/documents/limit=5">2</a></li>
          <li className="waves-effect"><a href="#!">3</a></li>
          <li className="waves-effect"><a href="#!">4</a></li>
          <li className="waves-effect"><a href="#!">5</a></li>
          <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {document ? document.map(document =>

          <DocumentsListRow key={document.id} document={document} />
        ) : <span />}
      </tbody>
    </table>
         </ul>
  );
};

DocumentList.propTypes = {
  document: PropTypes.array.isRequired
};

export default DocumentList;
