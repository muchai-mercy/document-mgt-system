import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions.js";
import toastr from "toastr";

class SearchUser extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.userSearch = this.userSearch.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  userSearch(username) {
    this.props.actions.searchUsers(username);
  }
  onChange(event) {
    event.preventDefault();
    return this.setState({ username: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    this.userSearch(this.state.username);
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
SearchUser.propTypes = {
  actions: PropTypes.object.isRequired
};
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(SearchUser);
