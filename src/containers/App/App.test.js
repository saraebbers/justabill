import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps, App } from './App';
import { fetchBillsThunk } from '../../thunks/fetchBillsThunk';
jest.mock('../../thunks/fetchBillsThunk')

describe('App Container', () => {
  let mockBillArray;
  let mockFetchBillsThunk;

  beforeEach(() => {
    mockBillArray=[{congress: 115, bills: [{id: 'hr123', name:'sara', somethingelse: 'xxx'}, {id: 'hr234', name:'David', somethingelse: 'xxx'}]}]
    mockFetchBillsThunk= jest.fn()
  })

  it('should match the screenshot', () => {
    const wrapper = shallow(<App fetchBillsThunk={mockFetchBillsThunk}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should fetch bills with 115 congress as default when the component mounts', async () => {
   const wrapper = shallow(<App fetchBillsThunk={mockFetchBillsThunk} />)
   await wrapper.instance().componentDidMount()
   expect(mockFetchBillsThunk).toHaveBeenCalled()
  })

  it('mapDispatchToProps calls dispatch with fetchBillsThunk when fetchBillsThunk is called', () => {
    const mockDispatch = jest.fn()
    const url = 'http://something'
    fetchBillsThunk.mockImplementation(() => mockBillArray)
    const actionToDispatch = fetchBillsThunk(url)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.fetchBillsThunk(url)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

})