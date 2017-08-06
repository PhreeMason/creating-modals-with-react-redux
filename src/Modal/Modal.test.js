import React from 'react';
import { mount, shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { expect } from 'chai';
import Button from '../Button'
import Modal from './index';
import Form from '../Form'
import sinon from 'sinon'

describe('Modal', ()=>{

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  }); // prevent aphrodite style sheets from rendering since only virtual DOM elements are present

  afterEach(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  }); // prevent aphrodite style sheets from rendering since only virtual DOM elements are present

  it('should have three buttons', () =>{
    const wrapper = shallow(
      <Modal />
    );

    expect(wrapper.find(Button)).to.have.length(2);

    expect(
      wrapper.containsMatchingElement(<button> x </button>)
    ).to.equal(true)
  })

  it('renders content when passed in', () => {
    const wrapper = shallow((
      <Modal
        content={<Form 
          fields={['one', 'two']}
          title="Edit Address"
        />}
      />
    ));
    expect(wrapper.find(Form)).to.have.length(1);
  });

})

describe('<Modal />', () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('the close modal and save button works', () => {
    const onButtonClick = sinon.spy();
    const onSaveClick = sinon.spy();
    const wrapper = mount((
      <Modal save={onSaveClick} closeModal={onButtonClick} />
    ));
    wrapper.find('button').first().simulate('click');
    wrapper.find('button').last().simulate('click');
    
    expect(onButtonClick.calledOnce).to.equal(true);
    expect(onSaveClick.calledOnce).to.equal(true);
  });
});