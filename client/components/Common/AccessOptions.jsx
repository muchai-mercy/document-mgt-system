import React, { PropTypes } from 'react';

export const AccessOptions = ({ name, label, onChange, defaultOption, value, error, options }) => (
  <div className="select=form">
    <label>Category</label>
    <select className="browser-default" 
    name="access" 
    onChange={onChange}>
      <option value="" disabled selected>Accessibility</option>
      <option value="Admin">Admin</option>
      <option value="User">User</option>
      <option value="Developer">Developer</option>
    </select>
    {error && <div className="alert-danger">{error}</div>}
  </div>


);
AccessOptions.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};
export default AccessOptions;
