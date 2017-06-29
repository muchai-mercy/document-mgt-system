import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Pagination from "react-js-pagination";
import { browserHistory } from "react-router";
import * as documentActions from "../../actions/documentActions.js";
import DocumentList from "./DocumentList.jsx";
import SearchDoc from "./SearchDocument.jsx";

class DocumentsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activePage: 1, limit: 10
    };
    this.redirectToCreateDocumentPage = this.redirectToCreateDocumentPage.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  componentDidMount() {
    this.props.actions.paginateDocuments();
    this.props.actions.allDocuments();

  }

  documentRow(document, index) {
    return (<div key={index}>{document.title}
    </div>);
  }

  redirectToCreateDocumentPage() {
    browserHistory.push('/document');
  }
  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    this.props.actions.paginateDocuments(this.state.limit, (this.state.limit * (pageNumber - 1)));
  }

  render() {
    const documents = this.props.pages;
    const totalItems = this.props.documents.length;
    return (
      <div className="container">
        <div>
          <input type="submit"
            value="Create Document 🙌"
            className="btn btn-primary"
            onClick={this.redirectToCreateDocumentPage} />
          <SearchDoc />
        </div>
        <DocumentList documents={documents} />
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.limit}
          totalItemsCount={totalItems}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

DocumentsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  documents: PropTypes.array.isRequired,
  pages: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    pages: state.pages,
    documents: state.documents
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(documentActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DocumentsPage);
