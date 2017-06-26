import React from "react";
import expect from "expect";
import { mount, shallow } from "enzyme";
import { ManageUsers } from "../components/Users/ManageUsers.jsx";

describe('Manage Users Page', () => {
  it('has a saveButton that submits input', () => {
    const props = {
      users: [],
      user: { id: '', firstName: '', lastName: '', username: '', email: '', password: '' }
    };
    const wrapper = mount(<ManageUsers {... props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
  });
});
