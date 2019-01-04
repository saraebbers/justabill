import { errorReducer } from './errorReducer';
import { isLoadingReducer } from './isLoadingReducer';

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

describe('isLoading', () => {
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