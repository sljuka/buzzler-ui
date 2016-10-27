import dataQuery from '../../lib/dataQuery'

export const FETCH_PROCESSES = 'FETCH_PROCESSES'
export const OPEN_PROCESS = 'OPEN_PROCESS'

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
