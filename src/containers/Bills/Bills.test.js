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

    it('should match the snapshot if isLoading is false', () => {
      const wrapper = shallow(<Bills isLoading={mockIsLoading} billArray={mockBillArray} errorMessage={mockErrorMessage} favorites={mockFavorites} fetchBillsThunk={mockFetchBillsThunk} />)
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot if there is an ErrorMessage', () => {
      mockErrorMessage = 'this is an error message'
      const wrapper = shallow(<Bills isLoading={mockIsLoading} billArray={mockBillArray} errorMessage={mockErrorMessage} favorites={mockFavorites} fetchBillsThunk={mockFetchBillsThunk} />)
      expect(wrapper).toMatchSnapshot()
    })

    it('should call searchAnotherCongress when a button is clicked', () => {
      const wrapper = shallow(<Bills isLoading={mockIsLoading} billArray={mockBillArray} errorMessage={mockErrorMessage} favorites={mockFavorites} fetchBillsThunk={mockFetchBillsThunk} />)
      expect(wrapper.state('congress')).toBe(115)
      wrapper.find('.congress-113').simulate('click')
      expect(wrapper.state('congress')).toBe(113)
      wrapper.find('.congress-114').simulate('click')
      expect(wrapper.state('congress')).toBe(114) 
      wrapper.find('.congress-116').simulate('click')
      expect(wrapper.state('congress')).toBe(116)
      wrapper.find('.congress-115').simulate('click')
      expect(wrapper.state('congress')).toBe(115)
    })  

    it('SearchAnotherCongress should fetch bills with the current value of state', async () => {
       const wrapper = shallow(<Bills isLoading={mockIsLoading} billArray={mockBillArray} errorMessage={mockErrorMessage} favorites={mockFavorites} fetchBillsThunk={mockFetchBillsThunk} />)
       await wrapper.instance().searchAnotherCongress(115)
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
