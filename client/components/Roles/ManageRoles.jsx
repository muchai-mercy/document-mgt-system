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
      roles: Object.assign({}, this.props.roles),
      errors: {}
    };
    this.updateRoleState = this.updateRoleState.bind(this);
    this.postRole = this.postRole.bind(this);
    this.updateRole = this.updateRole.bind(this);
    this.deleteRole = this.deleteRole.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.roles.id != nextProps.roles.id) {
      // update state on reload when props change
      this.setState({ roles: Object.assign({}, nextProps.roles) });

    }
  }
  updateRoleState(event) {
    const field = event.target.name;
    let roles = this.state.roles;
    roles[field] = event.target.value;
    return this.setState({ roles: roles });
  }
roleFormisValid() {
    let formisValid = true;
    let errors = {};

    if (this.state.roles.role.length < 4) {
      errors.role = 'Role must be at least 5 characters.';
      formisValid = false;
    }

    this.setState({ errors: errors });
    return formisValid;
  }
  postRole(event) {
    event.preventDefault();
     if (!this.roleFormisValid()) {
      toastr.error('Role must be at least 5 characters!');
      return;
    }
    this.props.actions.postRoles(this.state.roles);
    this.props.actions.allRoles();
    toastr.success('Role Created 😎!');
    this.context.router.push('/roles');

  }
  updateRole(event) {
    event.preventDefault();
    if (!this.roleFormisValid()) {
      toastr.error('Role must be at least 5 characters!');
      return;
    }
    this.props.actions.updateRoles(this.state.roles);
    toastr.success('Role Updated 😎!');
    this.context.router.push('/roles');

  }
  deleteRole(event) {
    this.props.actions.deleteRole(this.state.roles);
    toastr.success('Role Deleted 😯');
    browserHistory.push('/roles');
  }
  render() {
    return (
      <div className="doc-form">
        <RolesForm
          roles={this.state.roles}
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
  roles: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//Make router available by using React Router Context
ManageRoles.contextTypes = {
  router: PropTypes.object
};

function getRoleById(roles, id) {
  const role = roles.filter(role => role.id === id);
  if (role) return role[0]; //return the first role
  return null;
}

function mapStateToProps(state, ownProps) {
  console.log('state', ownProps.params.id);
  const roleId = ownProps.params.id; // from the path role/:id
  let roles = { id: '', role: '' };

  // if ( roleId && state.roles.length > 0) {
  //   roles = getRoleById(state.roles, roleId);
  // }
  // return {
  //   roles: state.roles
  // };
  return {
   roles: getRoleById(state.roles, roleId)
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(roleActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageRoles);
