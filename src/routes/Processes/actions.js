import dataQuery from '../../lib/dataQuery'

export const CLOSE_INSTANCE = 'CLOSE_INSTANCE'
export const FETCH_PROCESSES = 'FETCH_PROCESSES'
export const OPEN_PROCESS = 'OPEN_PROCESS'
export const SHOW_INSTANCE = 'SHOW_INSTANCE'

const PROCESS_QUERY = `
{
  processes {
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

export function openProcess (name) {
  return {
    type: OPEN_PROCESS,
    payload: { name }
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

export function fetchProcesses () {
  return dispatch => {
    const getPromise = async () => {
      const query = PROCESS_QUERY
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
