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
    mockBillArray=[{congress: 116, bills: [{name:'sara', somethingelse: 'xxx'}, {name:'David', somethingelse: 'xxx'}]}]
    mockFavorites=['hr-45123', 'hr-7653']
    mockErrorMessage = ''
    mockFetchBillsThunk= jest.fn()
    mockIsLoading=false;
    mockLocalState = {congress: 116}
  })

  describe('bills comtainer', () => {

    it('should match the screenshot if is Loading is true', () => {
      mockIsLoading = true
      const wrapper = shallow(<Bills isLoading={mockIsLoading} billArray={mockBillArray} errorMessage={mockErrorMessage} favorites={mockFavorites} fetchBillsThunk={mockFetchBillsThunk} />)
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the screenshot if is Loading is true', () => {
      const wrapper = shallow(<Bills isLoading={mockIsLoading} billArray={mockBillArray} errorMessage={mockErrorMessage} favorites={mockFavorites} fetchBillsThunk={mockFetchBillsThunk} />)
      expect(wrapper).toMatchSnapshot()
    })

    it('should fetch bills with the current value of state when the component mounts', async () => {
       const wrapper = shallow(<Bills isLoading={mockIsLoading} billArray={mockBillArray} errorMessage={mockErrorMessage} favorites={mockFavorites} fetchBillsThunk={mockFetchBillsThunk} />)
       await wrapper.instance().componentDidMount()
       expect(mockFetchBillsThunk).toHaveBeenCalled()
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
