import { errorReducer } from './errorReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { favoritesReducer } from './favoritesReducer';

describe('errorReducer', () => {
  it('should return state if the action.type does not match', () => {
    const state = ''
    const result = errorReducer(state, {type: 'SOMETHING_NOT_RELATED', errorMessage: 'This is an Error Message'})
    expect(result).toEqual('')
  })

  it('should return the errorMessage if the action.type matches HAS_ERRORED', () => {
    const state = ''
    const result = errorReducer(state, {type: 'HAS_ERRORED', errorMessage: 'This is an Error Message'})
    expect(result).toEqual('This is an Error Message')
  })

})

describe('isLoadingReducer', () => {
  it('should return state if the action.type does not match', () => {
    const state = false
    const result = isLoadingReducer(state, {type: 'SOMETHING_NOT_RELATED', isLoading: true})
    expect(result).toEqual(false)
  })

  it('should return the new boolean value of isLoading if the action.type matches HAS_ERRORED', () => {
    const state = false
    const result = isLoadingReducer(state, {type: 'IS_LOADING', isLoading: true})
    expect(result).toEqual(true)
  })
})

describe('favoritesReducer', () => {
    it('should return state if the action.type does not match', () => {
      const state = [115, 114]
      const result = favoritesReducer(state, {type: 'SOMETHING_NOT_RELATED', bill_id: 113})
      expect(result).toEqual(state)
    })

    it('should return the new array of favorites with a favorite added if the action.type matches ADD_FAVORITE', () => {
      const state = [115, 114]
      const result = favoritesReducer(state, {type: 'ADD_FAVORITE', bill_id: 113})
      const newFavoriteArray = [...state, 113]
      expect(result).toEqual(newFavoriteArray)
    })

    it('should return the new array of favorites with a favorite removed if the action.type matches REMOVE_FAVORITE', () => {
      const state = [115, 114]
      const result = favoritesReducer(state, {type: 'REMOVE_FAVORITE', bill_id: 114})
      const newFavoriteArray = [115]
      expect(result).toEqual(newFavoriteArray)
    })
})