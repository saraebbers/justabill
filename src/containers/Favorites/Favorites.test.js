import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps, Favorites } from './Favorites';


describe('Favorites', () => {
  let mockBillArray;
  let mockFavoritesArray;

  beforeEach(() => {
    mockBillArray=[{congress: 116, bills: [{id: 'hr-123', name:'sara', somethingelse: 'xxx'}, {id: 'hr234', name:'David', somethingelse: 'xxx'}]}]
    mockFavoritesArray=['hr-45123', 'hr-123']
  })

  describe('Favorites container', () => {

    it('should match the snapshot if there are favorites', () => {
      const wrapper = shallow(<Favorites favoritesArray={mockFavoritesArray} billArray={mockBillArray}  />)
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot if there are no favorites', () => {
      mockFavoritesArray=[]
      const wrapper = shallow(<Favorites favoritesArray={mockFavoritesArray} billArray={mockBillArray}  />)
      expect(wrapper).toMatchSnapshot()
    })

  })

  describe('mapStateToProps', () => {
    it('should return a props object with the correct information from state parsed', () => {
      const mockState = {
        bills: mockBillArray,
        errorMessage: 'this is an error message',
        favorites: mockFavoritesArray,
        somethingElse: 'something else'
      }
      const expected = {
        billArray: mockBillArray,
        favoritesArray: mockFavoritesArray
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

})
