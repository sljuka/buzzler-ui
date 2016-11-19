import { success, start, error } from '../../lib/promiseSufix'
import {
  CLEAR_SEARCH_RESULTS,
  CLOSE_INSTANCE,
  DEBOUNCE_SEARCH_PROCESSES,
  FETCH_PROCESSES,
  PREPEND_PROCESS,
  SEARCH_PROCESSES,
  SHOW_INSTANCE,
  ADD_PROCESS_INSTANCE
} from './actions'

const initialState = {
  order: [],
  processes: {},
  searchDebounceTimer: null,
  searchResults: [],
  showedInstances: {},
  addProcessInstancePending: false
}

export default function processReducer (state = initialState, action) {
  const { type } = action

  switch (type) {
    case success(FETCH_PROCESSES):
      return fetchProcesses(state, action.payload)

    case SHOW_INSTANCE:
      return showInstance(state, action.payload)

    case CLOSE_INSTANCE:
      return closeInstance(state, action.payload)

    case DEBOUNCE_SEARCH_PROCESSES:
      return debounceSearch(state, action.payload)

    case success(SEARCH_PROCESSES):
      return searchProcesses(state, action.payload)

    case CLEAR_SEARCH_RESULTS:
      return { ...state, searchResults: [] }

    case PREPEND_PROCESS:
      return prependProcess(state, action.payload)

    case start(ADD_PROCESS_INSTANCE):
      return { ...state, addProcessInstancePending: true }

    case success(ADD_PROCESS_INSTANCE):
    case error(ADD_PROCESS_INSTANCE):
      return { ...state, addProcessInstancePending: false }
  }

  return state
}

function fetchProcesses (state, processes) {
  const processesObject = processes.reduce((object, item) => {
    object[item.name] = item

    return object
  }, {})

  let order = state.order
  if (!order) order = processes.map(({ name }) => name)

  return { ...state, order, processes: processesObject }
}

function showInstance (state, { processName, id }) {
  const { processes, showedInstances } = state
  const instance = processes[processName].instances.find(item => item.id === id)
  showedInstances[processName] = instance

  return { ...state, showedInstances }
}

function closeInstance (state, { processName, id }) {
  const { showedInstances } = state
  delete showedInstances[processName]

  return { ...state, showedInstances }
}

function debounceSearch (state, { debouceTimer }) {
  return { ...state, searchDebounceTimer: debouceTimer, searchResults: [] }
}

function searchProcesses (state, processes) {
  if (processes.length === 0)
    return { ...state, searchResults: [{ id: -1, name: '0 match search term' }] }

  return { ...state, searchResults: processes }
}

function prependProcess (state, { processName }) {
  const newOrder = state.order
  const index = newOrder.indexOf(processName)
  if (index !== -1) newOrder.splice(index, 1)
  newOrder.unshift(processName)

  return { ...state, order: newOrder }
}
