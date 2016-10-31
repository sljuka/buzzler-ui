import dataQuery from '../../lib/dataQuery'
import { changeValue } from '../../actions/forms'

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

const processesQuery = (processNames) => {
  let queryParams = ''
  if (processNames && processNames.length > 0) {
    const stringArray = processNames.map(name => `"${name}"`).join(',')
    queryParams = `(names: [${stringArray}])`
  }
  return (
`
{
  processes${queryParams} {
    id
    name
    description
    instances {
      id
      name
      additionalInfo
    }
  }
}
`
  )
}

const searchProcessesQuery = (searchValue) => {
  let searchPatternParam = ''
  if (searchValue) {
    searchPatternParam = `(searchPattern: "${searchValue}")`
  }
  return (
`
{
  processes${searchPatternParam} {
    id
    name
    description
    instances {
      id
      name
      additionalInfo
    }
  }
}
`
  )
}

export function searchProcesses (value) {
  return dispatch => {
    const getPromise = async () => {
      const query = searchProcessesQuery(value)
      const { processes } = await dataQuery(query)

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

export function prependProcess (processName) {
  return {
    type: PREPEND_PROCESS,
    payload: { processName }
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

export function fetchProcesses () {
  return (dispatch, getState) => {
    const getPromise = async () => {
      const query = processesQuery(getState().processes.order)
      const { processes } = await dataQuery(query)

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
