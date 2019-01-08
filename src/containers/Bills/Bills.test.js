import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps, Bills } from './Bills';
import { fetchBillsThunk } from '../../thunks/fetchBillsThunk';
jest.mock('../../thunks/fetchBillsThunk')


describe('Bills', () => {
  let mockBillArray;
  let mockErrorMessage;
  let mockFavorites;
  let mockFetchBillsThunk;
  let mockIsLoading;
  let mockLocalState

  beforeEach(() => {
    mockBillArray=[{congress: 115, bills: [{id: 'hr123', name:'sara', somethingelse: 'xxx'}, {id: 'hr234', name:'David', somethingelse: 'xxx'}]}]
    mockFavorites=['hr-45123', 'hr-7653']
    mockErrorMessage = ''
    mockFetchBillsThunk= jest.fn()
    mockIsLoading=false;
    mockLocalState = {congress: 115}
  })

  describe('bills container', () => {

    it('should match the snapshot if is Loading is true', () => {
      mockIsLoading = true
      let state = mockLocalState 
      const wrapper = shallow(<Bills isLoading={mockIsLoading} billArray={mockBillArray} errorMessage={mockErrorMessage} favorites={mockFavorites} fetchBillsThunk={mockFetchBillsThunk} />)
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot if is Loading is false', () => {
      const wrapper = shallow(<Bills isLoading={mockIsLoading} billArray={mockBillArray} errorMessage={mockErrorMessage} favorites={mockFavorites} fetchBillsThunk={mockFetchBillsThunk} />)
      expect(wrapper).toMatchSnapshot()
    })

    it('should fetch bills with the current value of state when the component mounts', async () => {
       const wrapper = shallow(<Bills isLoading={mockIsLoading} billArray={mockBillArray} errorMessage={mockErrorMessage} favorites={mockFavorites} fetchBillsThunk={mockFetchBillsThunk} />)
       await wrapper.instance().componentDidMount()
       expect(mockFetchBillsThunk).toHaveBeenCalled()
    })

    it('should have the correct default local state', () => {
      const wrapper = shallow(<Bills isLoading={mockIsLoading} billArray={mockBillArray} errorMessage={mockErrorMessage} favorites={mockFavorites} fetchBillsThunk={mockFetchBillsThunk} />)
      const expected = mockLocalState
      expect(wrapper.state()).toEqual(expected)
    })
  })

  describe('mapStateToProps', () => {
    it('should return a props object with the correct information from state parsed', () => {
      const mockState = {
        bills: mockBillArray,
        isLoading: mockIsLoading,
        errorMessage: 'this is an error message',
        favorites: mockFavorites,
        somethingElse: 'something else'
      }
      const expected = {
        billArray: mockBillArray,
        isLoading: mockIsLoading,
        errorMessage: 'this is an error message',
        favorites: mockFavorites
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with fetchBillsThunk when fetchBillsThunk is called', () => {
      const mockDispatch = jest.fn()      
      const url = 'https://something/something'
      fetchBillsThunk.mockImplementation(() => mockBillArray)
      const actionToDispatch = fetchBillsThunk(url)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchBillsThunk(url)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

})
