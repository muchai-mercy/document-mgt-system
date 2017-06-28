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
    this.props.actions.logoutUser();
  }
  render() {
    const { token } = this.props;
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');
    const user = token && jwtDecode;

    function auth(token, logOut) {
      if(token) {
        return (
          <Link to={"/login"} onClick={logOut} activeClassName="active" style={{ color: "white" }}>
           Logout {username}
          </Link>
        );
      }
      return (<Link to="/login" activeClassName="active" style={{ color: "white" }}>Login | </Link>);
    }
    return (
      <div className="card-panel teal lighten-2 header">
        <IndexLink to="/" activeClassName="active" style={{ color: "white" }}> Home</IndexLink>
        {" | "}
        <Link to="/documents" activeClassName="active" style={{ color: "white" }}> My Documents</Link>
        {role === 'Admin' && <Link to="/users" activeClassName="active" style={{ color: "white" }}> | Users</Link>}
        {" | "}
        {auth(token, this.logOut)}    
        {!token ?
        <Link to="/signup" activeClassName="active" style={{ color: "white" }}>SignUp</Link>
        : null}
      </div>
    );
  }
}
//Props Validation
Header.propTypes = {
  token: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {

  return {
    token: state.login.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);


