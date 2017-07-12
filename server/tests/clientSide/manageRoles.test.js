import React from "react";
import expect from "expect";
import sinon from 'sinon';
import { mount, shallow } from "enzyme";
import { ManageRoles } from "../../../client/components/Roles/ManageRoles.jsx";

describe('Manage Roles Page', () => {
  it('has a saveButton that submits input', () => {
    const props = {
      roles: [],
      role: { id: '', role: '' }
    };
    const wrapper = mount(<ManageRoles {... props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
  });
});
