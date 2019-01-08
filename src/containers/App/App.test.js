import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps, App } from './App';
import { fetchBillsThunk } from '../../thunks/fetchBillsThunk';
jest.mock('../../thunks/fetchBillsThunk')

describe('App Container', () => {
  let mockBillArray;
  let mockErrorMessage;
  let mockFetchBillsThunk;
  let mockLocalState

  beforeEach(() => {
    mockBillArray=[{congress: 115, bills: [{id: 'hr123', name:'sara', somethingelse: 'xxx'}, {id: 'hr234', name:'David', somethingelse: 'xxx'}]}]
    mockErrorMessage = ''
    mockFetchBillsThunk= jest.fn()
    mockLocalState = {congress: 115}
  })

  it('should match the screenshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should fetch bills with 115 congress as default when the component mounts', async () => {
   const wrapper = shallow(<App billArray={mockBillArray} errorMessage={mockErrorMessage} fetchBillsThunk={mockFetchBillsThunk} />)
   await wrapper.instance().componentDidMount()
   expect(mockFetchBillsThunk).toHaveBeenCalled()
  })

})