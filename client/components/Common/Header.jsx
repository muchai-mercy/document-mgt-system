import React, { PropTypes } from "react";
import jwtDecode from "jwt-decode";
import { Link, IndexLink } from "react-router";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }
render(){
  const token = localStorage.getItem('jwt');
  const user = token && jwtDecode(token);
  return (
     <div className="card-panel teal lighten-2">
      <IndexLink to="/" activeClassName="active"> Home</IndexLink>
      {" | "}
      <Link to="/documents" activeClassName="active">Documents</Link>
       {" | "}
      <Link to="/about" activeClassName="active">About</Link>
       {" | "}
      <Link to="/users" activeClassName="active">Users</Link>
      {" | "}
      {user
        ? <Link to={`/users/${user.id}`} activeClassName="active">{user.data.username} </Link>
        : <Link to="/login" activeClassName="active">Login</Link>
      }
      {user
        ? <Link to="#" activeClassName="active" onClick={this.logoutUser}>Logout</Link>
        : null
      }
      </div>
    );
  }
}
Header.propTypes = {
  // session: PropTypes.object.isRequired,
};
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Header);


