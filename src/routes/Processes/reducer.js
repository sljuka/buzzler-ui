import { FETCH_PROCESSES } from './actions'

const initialState = {
  processes: []
}

export default function processReducer (state = initialState, action) {
  const { type } = action

  switch (type) {
    case FETCH_PROCESSES:
      return { ...state, processes: action.payload }
  }

  return state
}
