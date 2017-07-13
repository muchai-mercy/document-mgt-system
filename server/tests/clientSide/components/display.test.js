import React from "react";
import expect from "expect";
import sinon from 'sinon';
import { mount, shallow } from "enzyme";
import { Header } from "../../../../client/components/Common/Header.jsx";

describe('Header Component', () => {
  it('renders a div', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('div').length).toBe(1);
  });
});
