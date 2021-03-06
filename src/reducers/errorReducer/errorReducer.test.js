import { errorReducer } from './errorReducer';

describe('errorReducer', () => {
  it('should return state if the action.type does not match', () => {
    const state = ''
    const result = errorReducer(undefined, {type: 'SOMETHING_NOT_RELATED', errorMessage: 'This is an Error Message'})
    expect(result).toEqual(state)
  })

  it('should return the errorMessage if the action.type matches HAS_ERRORED', () => {
    const state = ''
    const result = errorReducer(state, {type: 'HAS_ERRORED', errorMessage: 'This is an Error Message'})
    expect(result).toEqual('This is an Error Message')
  })
})