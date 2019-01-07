import Display from './Display';
import { shallow } from 'enzyme';
import React from 'react';

describe('Display Component', () => {
  it('should match the screenShot when passed in the type of Bills', () => {
    const wrapper = shallow(<Display type='Bills'/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the screenShot when passed in the type of Favorites', () => {
    const wrapper = shallow(<Display type='Favorites'/>)
    expect(wrapper).toMatchSnapshot()
  })
})
