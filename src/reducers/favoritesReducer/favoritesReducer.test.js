import { favoritesReducer } from './favoritesReducer';

describe('favoritesReducer', () => {
    it('should return state if the action.type does not match', () => {
      const state = []
      const result = favoritesReducer(undefined, {type: 'SOMETHING_NOT_RELATED', bill_id: 113})
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
