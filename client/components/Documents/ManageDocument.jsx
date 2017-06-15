import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as documentActions from "../../actions/documentActions.js";
import DocumentsForm from "./DocumentsForm.jsx";
import {allDocuments} from "../../actions/documentActions.js";

class ManageDocument extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      document: Object.assign({}, this.props.document),
      errors: {}
    };
    this.updateDocumentState = this.updateDocumentState.bind(this);
    this.postDocuments = this.postDocuments.bind(this);
  }

  updateDocumentState(event) {
    const field = event.target.name;
    let document = this.state.document;
    document[field] = event.target.value;
    return this.setState({document: document});
  }

  postDocuments(event) {
    event.preventDefault();
    this.props.actions.postDocuments(this.state.document);
    this.context.router.push('/documents');
    allDocuments();
    
  }
  render() {
    return (
      <div>
        <DocumentsForm 
        document={this.state.document}
        onChange={this.updateDocumentState}
        onSave={this.postDocuments}
        errors={this.state.errors}/>
      </div>
    );
  }
}

//Props Validation
ManageDocument.propTypes = {
  document: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//Make router available by using React Router Context
ManageDocument.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let document = {id: '', title: '', content: '', category: ''};
  return {
    document: document
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(documentActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageDocument);
