export const billsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BILLS' : 
      return [...state, action.bills]
    default:
      return state
  }
}