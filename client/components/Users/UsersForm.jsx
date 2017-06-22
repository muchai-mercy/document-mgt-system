import React from "react";
import TextInput from "../Common/TextInput.jsx";
import TextArea from "../Common/TextArea.jsx";
import SelectOptions from './SelectOptions.jsx';

const UsersForm = ({ user, onSave, onChange, loading, errors, onUpdate }) => (
  user.id != '' ?
    <form onSubmit={onUpdate}>
      <h3> Manage Users </h3>
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
      <SelectOptions
        name="role"
        label="Role"
        value={user.role}
        onChange={onChange}
      />

      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onSave={onSave}
      />
    </form> :
    <form onSubmit={onSave}>
      <h3> Manage Users </h3>
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
