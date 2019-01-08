import { billsReducer } from './billsReducer';

describe('billsReducer', () => {
  it('should return state if the action.type does not match', () => {
    const state = []
    const result = billsReducer(undefined, {type: 'SOMETHING_NOT_RELATED', bills: [{bill_id: 114, title: 'A title for bill 114', other: 'other stuff'}]})
    expect(result).toEqual(state)
  })

  it('should return an updated array of bills if the action.type matches ADD_BILLS', () => {
    const state = [{bill_id: 113, title: 'A title for bill 113', other: 'other stuff'}]
    const result = billsReducer(state, {type: 'ADD_BILLS', bills: [{bill_id: 114, title: 'A title for bill 114', other: 'other stuff'}]})
    const newBillsArray = [...state, [{bill_id: 114, title: 'A title for bill 114', other: 'other stuff'}]]
    expect(result).toEqual(newBillsArray)
  })
})