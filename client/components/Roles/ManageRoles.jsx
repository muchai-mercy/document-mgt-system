import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import * as roleActions from "../../actions/roleActions.js";
import RolesForm from "./RolesForm.jsx";
import toastr from "toastr";

export class ManageRoles extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: Object.assign({}, this.props.role),
      errors: {}
    };
    this.updateRoleState = this.updateRoleState.bind(this);
    this.postRole = this.postRole.bind(this);
    this.updateRole = this.updateRole.bind(this);
    this.deleteRole = this.deleteRole.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.role.id != nextProps.role.id) {
      // update state on reload when props change
      this.setState({ role: Object.assign({}, nextProps.role) });

    }
  }
  updateRoleState(event) {
    const field = event.target.name;
    let role = this.state.role;
    role[field] = event.target.value;
    return this.setState({ role: role });
  }
userFormisValid() {
    let formisValid = true;
    let errors = {};

    if (this.state.role.role.length < 4) {
      errors.role = 'Role must be at least 5 characters.';
      formisValid = false;
    }

    this.setState({ errors: errors });
    return formisValid;
  }
  postRole(event) {
    event.preventDefault();
     if (!this.userFormisValid()) {
      toastr.error('Role must be at least 5 characters!');
      return;
    }
    this.props.actions.postRole(this.state.user);
    this.props.actions.allRoles();
    toastr.success('User Created 😎!');
    this.context.router.push('/users');

  }
  updateRole(event) {
    event.preventDefault();
    if (!this.userFormisValid()) {
      toastr.error('Role must be at least 6 characters!');
      return;
    }
    this.props.actions.updateRole(this.state.user);
    toastr.success('Role Updated 😎!');
    this.context.router.push('/roles');

  }
  deleteRole(event) {
    this.props.actions.deleteRole(this.state.role);
    toastr.success('Role Deleted 😯');
    browserHistory.push('/roles');
  }
  render() {
    return (
      <div className="doc-form">
        <RolesForm
          role={this.state.role}
          onChange={this.updateRoleState}
          onSave={this.postRole}
          onUpdate={this.updateRole}
          errors={this.state.errors} />
        <button
          onClick={this.deleteRole}
          className="btn btn-default" style={{ backgroundColor: '#f44336', marginLeft: "82%", marginTop: "-60px" }}>
          Delete
       </button>
      </div>
    );
  }
}

//Props Validation
ManageRoles.propTypes = {
  role: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//Make router available by using React Router Context
ManageRoles.contextTypes = {
  router: PropTypes.object
};

function getRoleById(role, id) {
  const roles = role.filter(role => role.id == id);
  if (roles) return roles[0]; //return the first role
  return null;
}

function mapStateToProps(state, ownProps) {
  const role = ownProps.params.role; // from the path role/:id
  let roles = { id: '', role: '' };

  if (role && state.role.length > 0) {
    roles = getRoleById(state.role, role);
  }
  return {
    role: role
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(roleActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageRoles);
