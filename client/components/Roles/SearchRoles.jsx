import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as roleActions from "../../actions/roleActions.js";
import toastr from "toastr";

export class SearchRole extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.roleSearch = this.roleSearch.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  roleSearch(role) {
    this.props.actions.searchRole(role);
  }
  onChange(event) {
    event.preventDefault();
    return this.setState({ role: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    this.roleSearch(this.state.role);
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
SearchRole.propTypes = {
  actions: PropTypes.object.isRequired
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(roleActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(SearchRole);
