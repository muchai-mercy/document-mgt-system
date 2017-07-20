import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import Pagination from "react-js-pagination";
import * as userActions from "../../actions/userActions.js";
import { UsersList } from "./UsersList.jsx";
import SearchUser from "./SearchUsers.jsx";

export class UsersPage extends React.Component {
  constructor(props, context) {
    super(props, context);
      this.state = {
      activePage: 1, limit: 5
    };
    this.redirectToCreateUserPage = this.redirectToCreateUserPage.bind(this);
     this.handlePageChange = this.handlePageChange.bind(this);
  }
  componentDidMount() {
    this.props.actions.paginateUsers();
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
    this.props.actions.paginateUsers(this.state.limit, (this.state.limit * (pageNumber - 1)));
  }

  render() {
    const user = this.props.pages;
    const totalItems = this.props.user.length; 
    return (
      <div className="container">
        <div>
        <input type="submit"
          value="Create User 🙌"
          className="btn btn-primary"
          onClick={this.redirectToCreateUserPage} />
          <SearchUser />
        <UsersList user={user} />
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.limit}
          totalItemsCount={totalItems}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
        </div>
      </div>
    );
  }
}
UsersPage.propTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.array.isRequired,
  pages: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    pages: state.pages,
    user: state.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
