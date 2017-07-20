import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import Pagination from "react-js-pagination";
import * as roleActions from "../../actions/roleActions.js";
import { RoleList } from "./RolesList.jsx";
import  { SearchRole } from "./SearchRoles.jsx";

export class RolePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activePage: 1, limit: 2
    };
    this.redirectToCreateUserPage = this.redirectToCreateUserPage.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  componentDidMount() {
    this.props.actions.paginateRoles();
    this.props.actions.allRoles();
  }


  roleRow(role, index) {
    return (<div key={index}>{role.role}
    </div>);
  }

  redirectToCreateUserPage() {
    browserHistory.push('/role');
  }
  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    this.props.actions.paginateRoles(this.state.limit, (this.state.limit * (pageNumber - 1)));
  }

  render() {
    const roles = this.props.pages;
    const totalItems = this.props.roles.length;
    return (
      <div className="container">
        <div>
          <input type="submit"
            value="Create Role 🙌"
            className="btn btn-primary"
            onClick={this.redirectToCreateUserPage} />
          <SearchRole />
          <RoleList roles={roles} />
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
RolePage.propTypes = {
  actions: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired,
  pages: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    pages: state.pages,
    roles: state.roles
  };
};

const mapDispatchToProps =(dispatch) => {
  return {
    actions: bindActionCreators(roleActions, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RolePage);
