export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE' : 
      return [...state, action.bill_id]
    case 'REMOVE_FAVORITE' : {
      return state.filter(id => {
        return id !== action.bill_id
      })
    }
    default:
      return state
  }
}
