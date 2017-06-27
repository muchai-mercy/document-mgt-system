import React from "react";
import TextInput from "../Common/TextInput.jsx";
import TextArea from "../Common/TextArea.jsx";
import { SelectOptions } from '../Common/SelectOptions.jsx';


const DocumentsForm = ({ document, onSave, onChange, loading, errors, onUpdate }) => (
  document.id !='' ? 
  <form onSubmit={onUpdate}>
    <h4> Update Document </h4>
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
      value={document.category}
      onChange={onChange}
    />

    <input
      type="submit"
      disabled={loading}
      value={loading ? 'Saving...' : 'Save'}
      className="btn btn-primary"
      style={{marginTop: "10px"}}
      onSave={onSave}
    />
  </form> :
   <form onSubmit={onSave}>
    <h4> Create Document </h4>
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
      value={document.category}
      onChange={onChange}
    />

    <input
      type="submit"
      disabled={loading}
      value={loading ? 'Saving...' : 'Save'}
      className="btn btn-primary"
      style={{marginTop: "10px"}}
      onSave={onSave}
    />

  </form>
  );
DocumentsForm.propTypes = {
  document: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onUpdate: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool.isRequired,
  errors: React.PropTypes.object.isRequired
};
export default DocumentsForm;
