import React from "react";
import expect from "expect";
import { mount, shallow } from "enzyme";
import { SelectOptions } from "../components/Common/SelectOptions.jsx";

describe('select options page', () => {
  it('should have select options', () => {
    const wrapper = mount(<SelectOptions />);
    expect(wrapper.find('select').simulate('change', { target: { value: 'Public' } }));
    expect(wrapper.find('select').simulate('change', { target: { value: 'Private' } }));
  });
});
