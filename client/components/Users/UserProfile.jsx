import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import * as userActions from "../../actions/userActions.js";
import ProfileForm from "./ProfileForm.jsx";
import toastr from "toastr";

export class UserProfile extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: Object.assign({}, this.props.user),
      errors: {}
    };
    this.updateState = this.updateState.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.user.id != nextProps.user.id) {
      // update state on reload when props change
      this.setState({ user: Object.assign({}, nextProps.user) });

    }
  }
  updateState(event) {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({ user: user });
  }
userFormisValid() {
    let formisValid = true;
    let errors = {};

    if (this.state.user.username.length < 5) {
      errors.username = 'Username must be at least 5 characters.';
      formisValid = false;
    }

    this.setState({ errors: errors });
    return formisValid;
  }

  updateUser(event) {
    event.preventDefault();
    if (!this.userFormisValid()) {
      toastr.error('Username must be at least 6 characters!');
      return;
    }
    this.props.actions.updateUsers(this.state.user);
    toastr.success('User Updated 😎!');
    this.context.router.push('/users');

  }
  render() {
    return (
      <div className="doc-form">
        <ProfileForm
          user={this.state.user}
          onChange={this.updateState}
          onUpdate={this.updateUser}
          errors={this.state.errors} />
      </div>
    );
  }
}

//Props Validation
UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//Make router available by using React Router Context
UserProfile.contextTypes = {
  router: PropTypes.object
};

function getUserById(user, id) {
  const users = user.filter(user => user.id == id);
  if (users) return users[0]; //return the first user
  return null;
}

function mapStateToProps(state, ownProps) {
  // const userId = ownProps.params.id; // from the path users/:id
  // let user = { id: '', firstName: '', lastName: '', username: '', email: '', password: '' };

  // if (userId && state.user.length > 0) {
  //   user = getUserById(state.user, userId);
  // }
  return {
    user: state.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
