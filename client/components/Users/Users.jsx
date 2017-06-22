import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import * as userActions from "../../actions/userActions.js";
import UsersList from "./UsersList.jsx";
import SearchUser from "./SearchUsers.jsx";

class UsersPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToCreateUserPage = this.redirectToCreateUserPage.bind(this);
  }
  componentDidMount() {
    this.props.actions.allUsers();
  }


  userRow(user, index) {
    return (<div key={index}>{user.username}
    </div>);
  }

  redirectToCreateUserPage() {
    browserHistory.push('/user');
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        { localStorage.getItem('role') === 'Admin' ? 
        <div>
        <input type="submit"
          value="Create User 🙌"
          className="btn btn-primary"
          onClick={this.redirectToCreateUserPage} />
          <SearchUser />
        <UsersList user={user} />
        </div>
        : null}
      </div>
    );
  }
}
UsersPage.propTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
