import { CHANGE_VALUE } from '../actions/forms'

const initialState = {
  processes: {
    search: {
      value: ''
    }
  }
}

export default function processReducer (state = initialState, action) {
  const { type } = action

  switch (type) {
    case CHANGE_VALUE:
      const { namespace, name, value } = action.payload

      return changeValue(state, { namespace, name, value })
  }

  return state
}

function changeValue (state, { namespace, name, value }) {
  return { ...state, [namespace]: { [name]: { value: value } } }
}
