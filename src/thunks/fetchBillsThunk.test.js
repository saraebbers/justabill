import { isLoading, hasErrored, addBills } from '../actions/index';
import { cleanBillsData } from '../utils/cleaner';
import { fetchBillsThunk } from './fetchBillsThunk.js';

describe('fetchBillsThunk', () => {
  let mockUrl
  let mockDispatch

  beforeEach(() => {
    mockUrl = 'https://api.propublica.org'
    mockDispatch = jest.fn()
  })

  it('calls dispatch with the isLoading action with true value prior to the fetch call', () => {
    const thunk = fetchBillsThunk(mockUrl)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: false,
          statusText: 'did not work'
      }))
    const thunk = fetchBillsThunk(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('did not work'))
  })

  it('should dispatch isLoading action with false value if the response comes back ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true
      }))
    const thunk = fetchBillsThunk(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it.skip('should call cleanBillsData, if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          results: [{a:'b'}]
        }) 
      }))
    let cleanBillsData = jest.fn()
    expect(cleanBillsData).toHaveBeenCalled()
  })

  it.skip('should dispatch addBills action', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        results: [{a:'b'}]
      })
    }))
    const mockBills = [{name:'sara'}]
    const thunk = fetchBillsThunk(mockUrl)
    await thunk(mockDispatch)
    let cleanBillsData = jest.fn().mockImplementation(() => mockBills)
    expect(mockDispatch).toHaveBeenCalledWith(addBills(mockBills))
  })

})