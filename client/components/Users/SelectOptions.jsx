import React, { PropTypes } from 'react';

const SelectOptions = ({ name, label, onChange, defaultOption, value, error, options }) => (
  <div className="select=form">
    <label>Role</label>
    <select className="browser-default" 
    name="role" 
    onChange={onChange}>
      <option value="" disabled selected>Select Access</option>
      <option value="Admin">Admin</option>
      <option value="User">User</option>
       <option value="Developer">Developer</option>
    </select>
    {error && <div className="alert-danger">{error}</div>}
  </div>


);
SelectOptions.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};
export default SelectOptions;
