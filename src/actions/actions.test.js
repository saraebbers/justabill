import * as actions from './index';

describe('actions', () => {
  it('addBills should take in the payload and return an object with a type of ADD_BILLS', () => {
    const bills = []
    const expected = {
      type: 'ADD_BILLS',
      bills
    }
    const result = actions.addBills(bills)
    expect(result).toEqual(expected)
  })

  it('getFavorites should take in the payload and return an object with a type of GET_FAVORITES', () => {
    const favIds = []
    const expected = {
      type: 'GET_FAVORITES',
      favIds
    }
    const result = actions.getFavorites(favIds)
    expect(result).toEqual(expected)
  })

  it('hasErrored should take in the payload and return an object with a type of HAS_ERRORED', () => {
    const errorMessage = ''
    const expected = {
      type: 'HAS_ERRORED',
      errorMessage
    }
    const result = actions.hasErrored(errorMessage)
    expect(result).toEqual(expected)
  })

  it('isLoading should take in the payload and return an object with a type of IS_LOADING', () => {
    const bool = true
    const expected = {
      type: 'IS_LOADING',
      isLoading: true
    }
    const result = actions.isLoading(bool)
    expect(result).toEqual(expected)
  })

})
