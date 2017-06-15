import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as documentActions from "../../actions/documentActions.js";
import DocumentList from "./DocumentList.jsx";
import { browserHistory } from "react-router";

class DocumentsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToCreateDocumentPage = this.redirectToCreateDocumentPage.bind(this);
  }


  documentRow(document, index) {
    return <div key={index}>{document.title}
    </div>;
  }

  redirectToCreateDocumentPage(){
    browserHistory.push('/document');
  }

  render() {
    const { document } = this.props;
    return (
      <div>
        <input type="submit"
               value="Create Document"
               className="btn btn-primary"
               onClick={this.redirectToCreateDocumentPage}/>
        <DocumentList document={document} />
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
