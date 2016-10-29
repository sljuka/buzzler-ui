import { FETCH_PROCESSES } from './actions'
import { success } from '../../lib/promiseSufix'

const initialState = {
  processes: [],
  order: []
}

export default function processReducer (state = initialState, action) {
  const { type } = action

  switch (type) {
    case success(FETCH_PROCESSES):
      let order = state.order
      if (!order)
        order = state.processes.map(({ name }) => name)

      return { ...state, order, processes: action.payload }
  }

  return state
}
