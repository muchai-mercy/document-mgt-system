import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as documentActions from "../../actions/documentActions.js";
import toastr from "toastr";

class SearchDoc extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: ''
    };

    this.documentSearch = this.documentSearch.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  documentSearch(title) {
    this.props.actions.searchDocuments(title);
  }
  onChange(event) {
    event.preventDefault();
    return this.setState({ title: event.target.value });
  }
  onSubmit(title) {
    event.preventDefault();
    this.documentSearch(this.state.title);
  }
  render() {
    return (
      <div className="search-wrapper card" style={{ marginLeft: "84%", marginTop: "-40px" }}>
        <input
        id="search"
          onChange={this.onChange} />
        <i className="material-icons" style={{ paddingLeft: "160px"}}
          onClick={this.onSubmit}>search</i>
      </div>
    );
  }
}
//Props Validation
SearchDoc.propTypes = {
  actions: PropTypes.object.isRequired
};
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(documentActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(SearchDoc);
