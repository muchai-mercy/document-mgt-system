import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as documentActions from "../../actions/documentActions.js";
import DocumentsForm from "./DocumentsForm.jsx";

class ManageDocument extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      document: Object.assign({}, this.props.document),
      errors: {}
    };
    this.updateDocumentState = this.updateDocumentState.bind(this);
    this.postDocuments = this.postDocuments.bind(this);
    this.deleteDocuments = this.deleteDocuments.bind(this);
  }
componentWillReceiveProps(nextProps){
  if (this.props.document.id != nextProps.document.id) {
    // update state on reload when props change
    this.setState({document: Object.assign({}, nextProps.document)});
  }
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
    this.props.actions.allDocuments();
    this.context.router.push('/documents');
    
  }
    deleteDocuments(event) {
    this.props.actions.deleteDocuments(this.state.document);
  }
  render() {
    return (
      <div>
        <DocumentsForm 
        document={this.state.document}
        onChange={this.updateDocumentState}
        onSave={this.postDocuments}
        errors={this.state.errors}/>
        <button 
           onClick={this.deleteDocuments} 
           className="btn btn-default">
           Delete
       </button>
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

function getDocumentById(document, id){
const documents = document.filter(document => document.id == id);
if (documents) return documents[0]; //return the first doc
return null;
}

function mapStateToProps(state, ownProps) {
  const documentId = ownProps.params.id; // from the path documents/:id
  let document = {id: '', title: '', content: '', category: ''};

  if (documentId && state.document.length > 0) {
    document = getDocumentById(state.document, documentId);
  }
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
