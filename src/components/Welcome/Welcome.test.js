import React from 'react';
import Welcome from './Welcome';
import { shallow } from 'enzyme';

describe('Welcome', () => {
  it('it should match the snapshot',() => {
  const wrapper = shallow(<Welcome />)
  expect(wrapper).toMatchSnapshot()
  })
})