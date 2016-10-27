import { FETCH_PROCESSES } from './actions'
import { success } from '../../lib/promiseSufix'

const initialState = {
  processes: []
}

export default function processReducer (state = initialState, action) {
  const { type } = action

  switch (type) {
    case success(FETCH_PROCESSES):
      return { ...state, processes: action.payload }
  }

  return state
}
