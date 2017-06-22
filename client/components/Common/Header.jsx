import React, { PropTypes } from "react";
import jwtDecode from "jwt-decode";
import { Link, IndexLink } from "react-router";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as sessionActions from '../../actions/sessionActions';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('username');
  }
  render() {
    const token = localStorage.getItem('jwt');
    const username = localStorage.getItem('username');
    const user = token && jwtDecode;
    return (
      <div className="card-panel teal lighten-2">
        <IndexLink to="/" activeClassName="active"> Home</IndexLink>
        {" | "}
        <Link to="/documents" activeClassName="active">Documents</Link>
        {" | "}
        <Link to="/about" activeClassName="active">About   </Link>
        {localStorage.getItem('role') === 'Admin' ?
        <Link to="/users" activeClassName="active">Users</Link>
        : null}
        {" | "}
        {token ?
          (<Link to={"/login"} onClick={this.logOut} activeClassName="active"> Logout {username}</Link>)
          : (<Link to="/login" activeClassName="active">Login</Link>)
        }
        {" | "}
        <Link to="/signup" activeClassName="active">SignUp</Link>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Header);


