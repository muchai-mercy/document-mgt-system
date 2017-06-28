import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import Pagination from "react-js-pagination";
import * as userActions from "../../actions/userActions.js";
import UsersList from "./UsersList.jsx";
import SearchUser from "./SearchUsers.jsx";

class UsersPage extends React.Component {
  constructor(props, context) {
    super(props, context);
      this.state = {
      activePage: 1, limit: 10
    };
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
  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    this.props.actions.allUsers(this.state.limit, (this.state.limit * (pageNumber - 1)));
  }

  render() {
    const { user } = this.props;
    return (
      <div className="container">
        { localStorage.getItem('role') === 'Admin' ? 
        <div>
        <input type="submit"
          value="Create User 🙌"
          className="btn btn-primary"
          onClick={this.redirectToCreateUserPage} />
          <SearchUser />
        <UsersList user={user} />
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={100}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
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
