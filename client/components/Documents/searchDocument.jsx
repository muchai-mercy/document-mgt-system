import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as documentActions from "../../actions/documentActions.js";
import toastr from "toastr";

class searchDocument extends React.Component {
  constructor(props, context) {
    super(props, context);

  }
  componentDidMount() {
  this.props.actions.searchDocuments();
}
 
  render() {
    return (
       <div className="search-wrapper card">
       <input
       id= "search"
       label="Search"/>
        <i className="material-icons">search</i>
        {/*<div className="search-results"></div>*/}
        </div>
    );
  }
}

//Props Validation
searchDocument.PropTypes = {
  actions: PropTypes.object.isRequired
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(documentActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(searchDocument);
