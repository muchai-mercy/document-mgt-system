import React, { PropTypes } from 'react';
import { Link, IndexLink } from "react-router";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as roleActions from "../../actions/roleActions.js";

export class SelectOptions extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      roles: this.props.roles,
      errors: {}
    };
  }

componentDidMount() {
    this.props.actions.allRoles();
  }
  render() {
    return (
    <div className="select=form">
    <label>Role</label>
    <select className="browser-default" 
    name="role" 
    onChange={this.props.onChange}>
    <option value="">Select Role</option>
    {this.props.roles.map(role => (
      <option key={role.id} value={role.role}>{role.role}</option>
    ))}
     </select> 
  </div>);
  }
}
//Props Validation
SelectOptions.propTypes = {
  roles: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};
function mapStateToProps(state, ownProps) {
  return {
    roles: state.roles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(roleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectOptions);
