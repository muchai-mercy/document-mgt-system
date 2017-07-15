import React from "react";
import TextInput from "../Common/TextInput.jsx";
import TextArea from "../Common/TextArea.jsx";
import SelectOptions from './SelectOptions.jsx';

const UsersForm = ({ user, onSave, onChange, loading, errors, onUpdate }) => (
  user.id != '' ?
    <form onSubmit={onUpdate}>
      <h4> Assign Role </h4>

      <SelectOptions
        name="role"
        label="Role"
        value={user.role}
        onChange={onChange}
      />

      <TextArea
        name="firstName"
        label="First Name"
        value={user.firstName}
      />

      <TextInput
        name="lastName"
        label="Last Name"
        value={user.lastName}
      />
      <TextInput
        name="username"
        label="Username"
        value={user.username}
      />

      <TextArea
        name="email"
        label="Email Address"
        value={user.email}
      />

      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
        style={{ marginTop: "10px" }}
        className="btn btn-primary"
        onSave={onSave}
      />
    </form> :
    <form onSubmit={onSave}>
      <h4> Manage Users </h4>
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
        label="Password"
        value={user.password}
        onChange={onChange}
      />
      <SelectOptions
        name="role"
        label="Role"
        value={user.role}
        onChange={onChange}
      />
      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save 👍'}
        style={{ marginTop: "10px" }}
        className="btn btn-primary"
        onSave={onSave}
      />
    </form>
);
UsersForm.propTypes = {
  user: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onUpdate: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};
export default UsersForm;
