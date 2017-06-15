import React from "react";
import TextInput from "../Common/TextInput.jsx";
import SelectInput from "../Common/SelectInput.jsx";
import TextArea from "../Common/TextArea.jsx";
import SelectOptions from '../Common/SelectOptions.jsx';


const DocumentsForm = ({ document, onSave, onChange, loading, errors }) => (
  <form onSubmit={onSave}>
    <h3> Manage Documents </h3>
    <TextInput
      name="title"
      label="Title"
      value={document.title}
      onChange={onChange}

    />

    <TextArea
      name="content"
      label="Content"
      value={document.content}
      onChange={onChange}
    />

    <SelectOptions
      name="category"
      label="category"
      value={document.userId}
      onChange={onChange}
    />

    <input
      type="submit"
      disabled={loading}
      value={loading ? 'Saving...' : 'Save'}
      className="btn btn-primary"
      onSave={onSave}
    />
  </form>
  );
DocumentsForm.propTypes = {
  document: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};
export default DocumentsForm;
