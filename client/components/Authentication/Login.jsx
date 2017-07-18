import React, { PropTypes } from 'react';
import TextInput from '../Common/TextInput.jsx';
import { bindActionCreators } from 'redux';
import { browserHistory, Link } from "react-router";
import { connect } from 'react-redux';
import * as sessionActions from '../../actions/sessionActions.js';
import toastr from "toastr";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { credentials: { email: '', password: '' } };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({ credentials: credentials });
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.loginUser(this.state.credentials)

    this.context.router.push('/');
  }

  render() {
    return (
      <div className="doc-form">
        <form>
          <TextInput
            name="email"
            label="Enter Email"
            value={this.state.credentials.email}
            onChange={this.onChange} />

          <input
            name="password"
            type="password"
            label="Enter Password"
            value={this.state.credentials.password}
            onChange={this.onChange} />

          <input
            type="submit"
            className="btn waves-effect waves-light"
            onClick={this.onSave} />

          <div style={{ marginTop: "10px" }}>Don't have an account? <Link to={'/signup'}>Sign Up</Link>
          </div>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  actions: PropTypes.object.isRequired,
};
//Make router available by using React Router Context
Login.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    credentials: state.credentials
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

