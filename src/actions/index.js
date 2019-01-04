export const getBills = (bills) => ({
  type: 'GET_BILLS',
  bills
})

export const addFavorite = (bill_id) => ({
  type: 'ADD_FAVORITE',
  bill_id
})

export const removeFavorite = (bill_id) => ({
  type: 'REMOVE_FAVORITE',
  bill_id
})

export const hasErrored = (errorMessage) => ({
  type: 'HAS_ERRORED',
  errorMessage
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})