import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Container', () => {
  it('should match the screenshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})