export const billsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_BILLS' : 
      return [...state, action.bills]
    default:
      return state
  }
}