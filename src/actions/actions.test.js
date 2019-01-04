import * as actions from './index';

describe('actions', () => {
  it('getBills should take in the payload and return an object with a type of ADD_BILLS', () => {
    const bills = []
    const expected = {
      type: 'GET_BILLS',
      bills
    }
    const result = actions.getBills(bills)
    expect(result).toEqual(expected)
  })

  it('addFavorite should take in the payload and return an object with a type of ADD_FAVORITE', () => {
    const bill_id = {}
    const expected = {
      type: 'ADD_FAVORITE',
      bill_id
    }
    const result = actions.addFavorite(bill_id)
    expect(result).toEqual(expected)
  })

  it('removeFavorite should take in the payload and return an object with a type of REMOVE_FAVORITE', () => {
    const bill_id = {}
    const expected = {
      type: 'REMOVE_FAVORITE',
      bill_id
    }
    const result = actions.removeFavorite(bill_id)
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
