import React from 'react';
import ErrorMes from './ErrorMes';
import { shallow } from 'enzyme';

describe('ErrorMes', () => {
  it('ErrorMes should match the snapshot', () => {
    let mockErrorMessage = 'Something went wrong with the Fetch Call'
    const wrapper = shallow(<ErrorMes errorMessage={mockErrorMessage}/>)
    expect(wrapper).toMatchSnapshot()
  })

})
