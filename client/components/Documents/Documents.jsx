import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as documentActions from "../../actions/documentActions.js";
// import { createDocument } from "../../api/consumeApi.js";

class DocumentsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  

documentRow(document, index){
  return <div key={index}>{document.title}</div>;
}
  render() {
    return (
      <div>
        {this.props.document.map(this.documentRow)}
      </div>
    );
  }
}
DocumentsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  document: PropTypes.array.isRequired,
  createDocuments: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    document: state.document
  };
}
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(documentActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DocumentsPage);
