import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions.js";
import UsersForm from "./UsersForm.jsx";
import toastr from "toastr";

class ManageUsers extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      user: Object.assign({}, this.props.user),
      errors: {}
    };
    this.updateUserState = this.updateUserState.bind(this);
    this.postUsers = this.postUsers.bind(this);
    this.updateUsers = this.updateUsers.bind(this);
    this.deleteUsers = this.deleteUsers.bind(this);
  }
componentWillReceiveProps(nextProps){
  if (this.props.user.id != nextProps.user.id) {
    // update state on reload when props change
    this.setState({user: Object.assign({}, nextProps.user)});
    
  }
}
  updateUserState(event) {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user});
  }

  postUsers(event) {
    event.preventDefault();
    this.props.actions.postUsers(this.state.user);
    this.props.actions.allUsers();
    toastr.success('User Created 😎!');
    this.context.router.push('/users');
    
  }
   updateUsers(event) {
    event.preventDefault();
    this.props.actions.updateUsers(this.state.user);
    toastr.success('User Updated 😎!');
    this.context.router.push('/users');

  }
    deleteUsers(event) {
    this.props.actions.deleteUsers(this.state.user);
      toastr.success('User Deleted 😯');
  }
  render() {
    return (
      <div>
        <UsersForm 
        user={this.state.user}
        onChange={this.updateUserState}
        onSave={this.postUsers}
        onUpdate={this.updateUsers}
        errors={this.state.errors}
        onDelete={this.deleteUsers}/>
        {/*<button 
           onClick={this.deleteUsers} 
           className="btn btn-default"style={{backgroundColor: '#f44336'}}>
           Delete 👎
       </button>*/}
      </div>
    );
  }
}

//Props Validation
ManageUsers.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//Make router available by using React Router Context
ManageUsers.contextTypes = {
  router: PropTypes.object
};

function getUserById(user, id){
const users = user.filter(user => user.id == id);
if (users) return users[0]; //return the first user
return null;
}

function mapStateToProps(state, ownProps) {
  const userId = ownProps.params.id; // from the path users/:id
  let user = {id: '', firstName: '', lastName: '', email: '', password: ''};

  if (userId && state.user.length > 0) {
    user = getUserById(state.user, userId);
  }
  return {
    user: user
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers);
