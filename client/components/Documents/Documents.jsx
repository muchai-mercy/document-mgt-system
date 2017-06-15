import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as documentActions from "../../actions/documentActions.js";
import DocumentList from "./DocumentList.jsx";

class DocumentsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  documentRow(document, index) {
    return <div key={index}>{document.title}
    </div>;
  }
  render() {
    const { document } = this.props;
    return (
      <div>
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
