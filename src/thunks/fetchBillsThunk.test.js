import { isLoading, hasErrored, addBills } from '../actions/index';
import { cleanBillsData } from '../utils/cleaner';
jest.mock('../utils/cleaner');
import { fetchBillsThunk } from './fetchBillsThunk.js';

describe('fetchBillsThunk', () => {
  let mockUrl
  let mockDispatch
  let mockBills

  beforeEach(() => {
    mockUrl = 'https://api.propublica.org'
    mockDispatch = jest.fn()
    mockBills = [{congress: 116, bills: [{name:'sara', somethingelse: 'xxx'}, {name:'David', somethingelse: 'xxx'}]}]
    cleanBillsData.mockImplementation(() => mockBills)
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

  it('should call cleanBillsData, if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          results: [{a:'b'}]
        }) 
      }))
    const thunk = fetchBillsThunk(mockUrl)
    await thunk(mockDispatch)
    expect(cleanBillsData.mock.calls.length).toEqual(1)
  })

  it('should dispatch addBills action', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        results: [{a:'b'}]
      })
    }))
    const thunk = fetchBillsThunk(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(addBills(mockBills))
  })





















})