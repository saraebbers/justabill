import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps, Card } from './Card';
import { addFavorite, removeFavorite } from '../../actions/index';

describe('Card', () => {
  let mockFavorites;
  let mockId 
  let mockTitle
  let mockSponsor
  let mockMajor_action
  let mockMajor_action_date
  let mockSummary
  let mockBill_uri
  let mockAddFavorite
  let mockRemoveFavorite


  beforeEach(() => {
    mockFavorites=['hr-45123', 'hr-7653']
    mockId = 'hr-7654'
    mockTitle = 'A very long string'
    mockSponsor = 'Wonder Woman'
    mockMajor_action = 'Bill became Law'
    mockMajor_action_date = '12.6.2016'
    mockSummary = 'To begin my life with the beginning of my life I must record that I was born'
    mockBill_uri = 'https://something'
    mockAddFavorite = jest.fn()
    mockRemoveFavorite = jest.fn()
  })

  describe('Card Container', () => {
    it('should match the snapshot if summary is empty', () => {
      mockSummary = ''
      const wrapper = shallow(<Card favorites={mockFavorites} id={mockId} title={mockTitle} sponsor={mockSponsor} major_action={mockMajor_action} major_action_date={mockMajor_action_date} summary={mockSummary} bill_uri={mockBill_uri} addFavorite={mockAddFavorite} removeFavorite={mockRemoveFavorite}/>)
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot if summary is provided and id is not in the favorites array', () => {
      const wrapper = shallow(<Card favorites={mockFavorites} id={mockId} title={mockTitle} sponsor={mockSponsor} major_action={mockMajor_action} major_action_date={mockMajor_action_date} summary={mockSummary} bill_uri={mockBill_uri} addFavorite={mockAddFavorite} removeFavorite={mockRemoveFavorite}/>)
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot if the id is included in favorites array', () => {
      mockId= 'hr-45123'
      const wrapper = shallow(<Card favorites={mockFavorites} id={mockId} title={mockTitle} sponsor={mockSponsor} major_action={mockMajor_action} major_action_date={mockMajor_action_date} summary={mockSummary} bill_uri={mockBill_uri} addFavorite={mockAddFavorite} removeFavorite={mockRemoveFavorite}/>)
      expect(wrapper).toMatchSnapshot()
    })

  })

  describe('mapStateToProps', () => {
    it('should return a props object with the correct information from state parsed', () => {
      const mockBillArray = [{congress: 116, bills: [{id: 'hr123', name:'sara', somethingelse: 'xxx'}, {id: 'hr234', name:'David', somethingelse: 'xxx'}]}]
      const mockState = {
        bills: mockBillArray,
        errorMessage: 'this is an error message',
        favorites: mockFavorites,
        somethingElse: 'something else'
      }
      const expected = {
        favorites: mockFavorites
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with addFavorite when addFavorite is called', () => {
      const mockDispatch = jest.fn()      
      const actionToDispatch = addFavorite('hr-8989')
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addFavorite('hr-8989')
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('calls dispatch with removeFavorite when removeFavorite is called', () => {
      const mockDispatch = jest.fn()      
      const actionToDispatch = removeFavorite('hr-7653')
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.removeFavorite('hr-7653')
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

  })

  describe('handleAddFavorite', () => {
    it('should call addFavorite with the correct params when a button is clicked and the id is not in the favorites array', () => {
      mockId = 'hr-9'
      const wrapper = shallow(<Card favorites={mockFavorites} id={mockId} title={mockTitle} sponsor={mockSponsor} major_action={mockMajor_action} major_action_date={mockMajor_action_date} summary={mockSummary} bill_uri={mockBill_uri} addFavorite={mockAddFavorite} removeFavorite={mockRemoveFavorite}/>)
      wrapper.find('.not-fav').simulate('click')
      expect(mockAddFavorite).toHaveBeenCalled()
    })
  })

  describe('handleRemoveFavorite', () => {
    it('should call removeFavorite with the correct params when a button is clicked and the id is in the favorites array', () => {
      mockId = 'hr-7653'
      const wrapper = shallow(<Card favorites={mockFavorites} id={mockId} title={mockTitle} sponsor={mockSponsor} major_action={mockMajor_action} major_action_date={mockMajor_action_date} summary={mockSummary} bill_uri={mockBill_uri} addFavorite={mockAddFavorite} removeFavorite={mockRemoveFavorite}/>)
      wrapper.find('.fav').simulate('click')
      expect(mockRemoveFavorite).toHaveBeenCalled()
    })
  })


})
