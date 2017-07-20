import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import * as userActions from "../../actions/userActions.js";
import * as sessionActions from "../../actions/sessionActions.js";
import { ProfileForm } from "./ProfileForm.jsx";
import toastr from "toastr";

const authUser = () => localStorage.getItem('jwt');

export class UserProfile extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {},
      errors: {}
    };
    this.updateState = this.updateState.bind(this);
    this.updateUsers = this.updateUsers.bind(this);
  }
componentWillMount() {
  let user = authUser();
  this.setState({ user: user});
}
componentWillReceiveProps(nextProps) {
    if (this.props.user.id != nextProps.user.id) {
      // update state on reload when props change
      this.setState({ user: Object.assign({}, nextProps.user) });

    }
  }
  updateState(event) {
    const field = event.target.name;
    let user = this.props.user;
    user[field] = event.target.value;
    return this.setState({ user: user });
  }
userFormisValid() {
    let formisValid = true;
    let errors = {};

    if (this.props.user.username.length < 5) {
      errors.username = 'Username must be at least 5 characters.';
      formisValid = false;
    }

    this.setState({ errors: errors });
    return formisValid;
  }

  updateUsers(event) {
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
    console.log(this.state);
        console.log('userr', this.state);
    return (
      <div className="doc-form">
        <ProfileForm
          user={this.props.user}
          onChange={this.updateState}
          onUpdate={this.updateUsers}
          errors={this.state.errors} />
      </div>
    );
  }
}

//Props Validation
UserProfile.propTypes = {
  user: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Make router available by using React Router Context
UserProfile.contextTypes = {
  router: PropTypes.object
};

const getUserById = (user, id) => {
  const users = user.filter(user => user.id == id);
  if (users) return users[0]; //return the first user
  return null;
};

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.params.id; // from the path users/:id
  let user = { id: '', firstName: '', lastName: '', username: '', email: '', password: '', role: '' };

  if (userId && state.user.length > 0) {
    user = getUserById(state.user, userId);
  }
  return {
    user: state.credentials.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
