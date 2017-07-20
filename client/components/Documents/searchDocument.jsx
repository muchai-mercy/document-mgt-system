import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as documentActions from "../../actions/documentActions.js";
import toastr from "toastr";

class SearchDoc extends React.Component {
  constructor(props, context) {
    super(props, context);

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
  onSubmit(event) {
    event.preventDefault();
    this.documentSearch(this.state.title);
  }
  render() {
    return (
      <div className="search-wrapper card" style={{marginLeft: "618px", marginTop: "-36px"}}>
        <input id="search" style={{border: "0"}}
          onChange={this.onChange} />
        <i className="material-icons"
        style={{position: "absolute", right: "10px", top: "10px"}}
          onClick={this.onSubmit}>search</i>
      </div>
    );
  }
}
//Props Validation
SearchDoc.propTypes = {
  actions: PropTypes.object.isRequired
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(documentActions, dispatch)
  };
};
export default connect(null, mapDispatchToProps)(SearchDoc);
