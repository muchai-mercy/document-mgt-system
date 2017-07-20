import React from "react";
import { TextInput } from "../Common/TextInput.jsx";
import { TextArea } from "../Common/TextArea.jsx";


export const RolesForm = ({ roles, onSave, onChange, loading, errors, onUpdate }) => (
  roles.hasOwnProperty("id") ?
    <form onSubmit={onUpdate}>
      <h4> Update Role </h4>
      <TextInput
        name="role"
        label="Role"
        value={roles.role}
        onChange={onChange}
      />
      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        style={{ marginTop: "10px" }}
        onSave={onSave}
      />
    </form> :
    <form onSubmit={onSave}>
      <h4> Create Role </h4>
      <TextInput
        name="role"
        label="Role"
        value={roles.role}
        onChange={onChange}
      />

      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        style={{ marginTop: "10px" }}
        onSave={onSave}
      />

    </form>
);
RolesForm.propTypes = {
  roles: React.PropTypes.object.isRequired,
  onUpdate: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool.isRequired,
  errors: React.PropTypes.object.isRequired
};
