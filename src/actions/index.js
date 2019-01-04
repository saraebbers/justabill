export const addBills = (bills) => ({
  type: 'ADD_BILLS',
  bills
})

export const getFavorites = (favId) => ({
  type: 'GET_FAVORITES',
  favId
})

export const hasErrored = (errorMessage) => ({
  type: 'HAS_ERRORED',
  errorMessage
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})