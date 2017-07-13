import React, { PropTypes } from "react";
import jwtDecode from "jwt-decode";
import { Link, IndexLink } from "react-router";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as sessionActions from '../../actions/sessionActions';


export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    this.props.actions.logoutUser();
  }
  render() {
    const token = localStorage.getItem('jwt');
    const user = token && jwtDecode(token);
    return (
      <div className="card-panel teal lighten-2 header">
        <IndexLink to="/" activeClassName="active" style={{ color: "white" }}> Home</IndexLink>
        <Link to="/documents" activeClassName="active" style={{ color: "white" }}> | Documents</Link>
        {token
          ? user.data.role === "Admin"
            ? <Link to="/users" activeClassName="active" style={{ color: "white" }}> | Users </Link>
            : ''
          : ''}
        {token
          ? user.data.role === "Admin"
            ? <Link to="/roles" activeClassName="active" style={{ color: "white" }}> | Roles </Link>
            : ''
          : ''}
        {token
          ? <Link to={"/login"} onClick={this.logOut} activeClassName="active" style={{ color: "white" }}>
            | Logout {user.data.username}
          </Link>
          : <Link to="/login" activeClassName="active" style={{ color: "white" }}> | Login | </Link>}
        {!token ?
          <Link to="/signup" activeClassName="active" style={{ color: "white" }}>SignUp</Link>
          : ''}
      </div>);
  }
}
//Props Validation
Header.PropTypes = {
  token: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {

  return {
    token: state.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);


