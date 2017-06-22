import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory, Link } from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextInput from '../Common/TextInput.jsx';
import * as sessionActions from '../../actions/sessionActions.js';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      role: 'User'
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    return this.setState({ [field]: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    // this.setState({ errors: {}, isLoading: true });
    this.props.actions.userSignup(this.state)
      .then(
      () => {
        browserHistory.push('/login');
      },
      err => this.setState({ errors: err.response.data, isLoading: false })
      );
  }
  render() {
    return (
      <div className="doc-form">
        <div>
          <h5> Register </h5>
          <TextInput
            name="firstName"
            label="Enter First Name"
            value={this.state.firstName}
            onChange={this.onChange}
          />
          <br />
          <TextInput
            name="lastName"
            label="Enter Last Name"
            value={this.state.lastName}
            onChange={this.onChange}
          />
          <br />
          <TextInput
            name="email"
            label="Enter Email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <br />
          <br />
          <TextInput
            name="username"
            label="Enter Username"
            value={this.state.username}
            onChange={this.onChange}
          />
          <br />
          <TextInput
            name="password"
            type="password"
            label="Enter Password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <br />
          < input
            type="submit"
            className="btn waves-effect waves-light"
            label="Create New Account"
            onClick={this.onSubmit} />
          <div>Already have an account? <Link to={'/login'}>Log in</Link>
          </div>
        </div>
      </div>
    );
  }
}
SignUp.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
SignUp.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(null, mapDispatchToProps)(SignUp);
