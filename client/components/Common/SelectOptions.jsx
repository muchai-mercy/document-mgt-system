import React, { PropTypes } from 'react';

const role = localStorage.getItem('role');
export const SelectOptions = ({ name, label, onChange, defaultOption, value, error, options }) => (
  <div className="select=form">
    <label>Category</label>
    <select className="browser-default" 
    name="category" 
    onChange={onChange}>
      <option value="" disabled selected>Select Access</option>
      <option value="Public">Public 🌞</option>
      <option value="Private">Private 😉</option>
      <option value={role}>Role</option>
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
  role: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};
export default SelectOptions;
