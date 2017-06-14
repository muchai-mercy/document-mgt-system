import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as documentActions from "../../actions/documentActions.js";
// import { createDocument } from "../../api/consumeApi.js";

class DocumentsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      document: { title: ""}
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  
  onTitleChange(event) {
    const document = this.state.document;
    document.title = event.target.value;
    this.setState({document: document})
  }
onClickSave(){
 this.props.actions.createDocuments(this.state.document)
}
documentRow(document, index){
  return <div key={index}>{document.title}</div>;
}
  render() {
    return (
      <div>
        {this.props.document.map(this.documentRow)}
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.document.title} />
        <input className="btn btn-primary btn-lg"
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
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
