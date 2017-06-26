import React from "react";
import expect from "expect";
import { mount, shallow } from "enzyme";
import { ManageDocument } from "../components/Documents/ManageDocument.jsx";

describe('Manage Documents Page', () => {
  it('has a saveButton that submits input', () => {
    const props = {
      documents: [],
      document: { id: '', title: '', content: '', category: '' }
    };
    const wrapper = mount(<ManageDocument {... props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
  });
});
