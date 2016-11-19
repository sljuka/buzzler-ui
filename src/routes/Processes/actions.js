import { dataFetch, dataMutation } from '../../lib/dataQuery'
import timeoutPromise from '../../lib/timeoutPromise'
import { changeValue } from '../../actions/forms'
import {
  addProcessInstanceMutation,
  processesQuery,
  searchProcessesQuery
} from './queries'

export const ADD_PROCESS_INSTANCE = 'ADD_PROCESS_INSTANCE'
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS'
export const CLOSE_INSTANCE = 'CLOSE_INSTANCE'
export const DEBOUNCE_SEARCH_PROCESSES = 'DEBOUNCE_SEARCH_PROCESSES'
export const FETCH_PROCESSES = 'FETCH_PROCESSES'
export const OPEN_PROCESS = 'OPEN_PROCESS'
export const PREPEND_PROCESS = 'PREPEND_PROCESS'
export const RESET_SEARCH_DEBOUNCE = 'RESET_SEARCH_DEBOUNCE'
export const SEARCH_PROCESSES = 'SEARCH_PROCESSES'
export const SELECT_PROCESS = 'SELECT_PROCESS'
export const SHOW_INSTANCE = 'SHOW_INSTANCE'

export function fetchProcesses () {
  return (dispatch, getState) => {
    const getPromise = async () => {
      const query = processesQuery(getState().processes.order)
      const { processes } = await dataFetch(query)

      return processes
    }

    return dispatch({
      type: FETCH_PROCESSES,
      payload: {
        promise: getPromise()
      }
    })
  }
}

export function searchProcesses (value) {
  return dispatch => {
    const getPromise = async () => {
      const query = searchProcessesQuery(value)
      const { processes } = await dataFetch(query)

      return processes
    }

    return dispatch({
      type: SEARCH_PROCESSES,
      payload: {
        promise: getPromise()
      }
    })
  }
}

export function addProcessInstance (processId, userId) {
  return dispatch => {
    const getPromise = async () => {
      const mutation = addProcessInstanceMutation(processId, userId)
      const instance = await dataMutation(mutation)

      // wait one more sec
      await timeoutPromise(1000)

      await dispatch(fetchProcesses())

      return instance
    }

    return dispatch({
      type: ADD_PROCESS_INSTANCE,
      payload: {
        promise: getPromise()
      }
    })
  }
}

export function debounceSearchProcesses (value) {
  return (dispatch, getState) => {
    dispatch(changeValue('processes', 'search', value))

    clearTimeout(getState().processes.searchDebounceTimer)
    let newDebouceTimer = null
    if (value.length > 1)
      newDebouceTimer = setTimeout(() => dispatch(searchProcesses(value)), 700)

    return dispatch({
      type: DEBOUNCE_SEARCH_PROCESSES,
      payload: { debouceTimer: newDebouceTimer }
    })
  }
}

export function openProcess (processName) {
  return (dispatch) => {
    const getPromise = async () => {
      dispatch(prependProcess(processName))
      await dispatch(fetchProcesses())
    }

    return {
      type: OPEN_PROCESS,
      payload: {
        promise: getPromise()
      }
    }
  }
}

export function prependProcess (processName) {
  return {
    type: PREPEND_PROCESS,
    payload: { processName }
  }
}

export function showInstance (processName, id) {
  return {
    type: SHOW_INSTANCE,
    payload: { processName, id }
  }
}

export function closeInstance (processName, id) {
  return {
    type: CLOSE_INSTANCE,
    payload: { processName, id }
  }
}

export function clearSearchResults () {
  return {
    type: CLEAR_SEARCH_RESULTS
  }
}
