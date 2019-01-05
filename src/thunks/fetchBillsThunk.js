import { isLoading, hasErrored, getBills } from '../actions/index';
import { apiKey } from '../utils/apiKey'

export const fetchBillsThunk = (url) => {
  return async (dispatch) => {
    try {
      console.log('pre')
      dispatch(isLoading(true))
      console.log('post')
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-API-Key': `${apiKey}`
        }
      })
      if(!response.ok) {
        throw Error(response.statusText)
      }
      // dispatch(isLoading(false))
      const billsData = await response.json()
      return billsData.results
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}
