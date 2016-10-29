import { FETCH_PROCESSES, SHOW_INSTANCE, CLOSE_INSTANCE } from './actions'
import { success } from '../../lib/promiseSufix'

const initialState = {
  processes: {},
  order: [],
  showedInstances: {}
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
  }

  return state
}

function fetchProcesses (state, processes) {
  const processesObject = processes.reduce((object, item) => {
    object[item.name] = item

    return object
  }, {})

  let order = state.orider
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
