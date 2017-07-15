import React from "react";
import TextInput from "../Common/TextInput.jsx";
import TextArea from "../Common/TextArea.jsx";

const ProfileForm = ({ user, onChange, loading, errors, onUpdate }) => (
  user != '' ?
    <form onSubmit={onUpdate}>
      <h4> Edit Profile </h4>
      <TextArea
        name="firstName"
        label="First Name"
        value={user.firstName}
        onChange={onChange}
      />

      <TextInput
        name="lastName"
        label="Last Name"
        value={user.lastName}
        onChange={onChange}
      />
      <TextInput
        name="username"
        label="Username"
        value={user.username}
        onChange={onChange}
      />

      <TextArea
        name="email"
        label="Email Address"
        value={user.email}
        onChange={onChange}
      />

      <TextArea
        name="password"
        type="password"
        label="Password"
        value={user.password}
        onChange={onChange}
      />

      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
        style={{marginTop: "10px"}}
        className="btn btn-primary"
        onSubmit={onUpdate}
      />
 </form> :
null
);
ProfileForm.propTypes = {
  user: React.PropTypes.object.isRequired,
  onUpdate: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};
export default ProfileForm;
