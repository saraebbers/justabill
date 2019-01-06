import { isLoading, hasErrored, addBills } from '../actions/index';
import { apiKey } from '../utils/apiKey';
import { cleanBillsData } from '../utils/cleaner';


export const fetchBillsThunk = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-API-Key': `${apiKey}`
        }
      })
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const uncleanBillsData = await response.json()
      let bills = cleanBillsData(uncleanBillsData.results)
      dispatch(addBills(bills))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}
