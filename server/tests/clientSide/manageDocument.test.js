import React from "react";
import expect from "expect";
import sinon from 'sinon';
import { mount, shallow } from "enzyme";
import { ManageDocument } from "../../../client/components/Documents/ManageDocument.jsx";

const props = {
  deleteDocuments() {},
  actions: {
    loadDoc: () => { return Promise.resolve(); }
  },
  documents: {},
};
const wrapper = mount(<ManageDocument {...props} />);
describe('Manage Documents Page', () => {
  it('has a saveButton that submits input', () => {
    const props = {
      documents: [],
      document: { id: '', title: '', content: '', category: '' }
    };
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
  });
});
// it('has a class doc-form', () => {
//   expect(wrapper.contains(<div className="doc-form" />)).toEqual(true);
// });
it('renders doc-div', () => {
  expect(wrapper.find('div').length).toBe(7);
}),
  it('renders DocumentHeader component', () => {
    expect(wrapper.find('DocumentForm').length).toBe(0);
  });
// it('simulates click events', () => {
//     const onButtonClick = sinon.spy();
//     const wrapper = shallow((
//       <ManageDocument onButtonClick={onButtonClick} />
//     ));
//     wrapper.find('button').simulate('click');
//     expect(onButtonClick).to.have.property('Delete', 1);
//   });

// it npgit 
