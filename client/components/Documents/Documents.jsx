import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Pagination from "react-js-pagination";
import * as documentActions from "../../actions/documentActions.js";
import DocumentList from "./DocumentList.jsx";
import { browserHistory } from "react-router";

class DocumentsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activePage: 1, limit: 3
    };
    this.redirectToCreateDocumentPage = this.redirectToCreateDocumentPage.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }
componentDidMount() {
  this.props.actions.allDocuments();
}

  documentRow(document, index) {
    return <div key={index}>{document.title}
    </div>;
  }

  redirectToCreateDocumentPage(){
    browserHistory.push('/document');
  }
   handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
    this.props.actions.allDocuments(this.state.limit, (this.state.limit * (pageNumber - 1)));
  }

  render() {
    const { document } = this.props;
    return (
      <div>
        <input type="submit"
               value="Create Document 🙌"
               className="btn btn-primary"
               onClick={this.redirectToCreateDocumentPage}/>
        <DocumentList document={document} />
         <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={3}
          totalItemsCount={100}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}
DocumentsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  document: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    document: state.document
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(documentActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DocumentsPage);
