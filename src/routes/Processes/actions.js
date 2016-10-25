export const FETCH_PROCESSES = 'FETCH_PROCESSES'
export const OPEN_PROCESS = 'OPEN_PROCESS'

export function openProcess (name) {
  return {
    type: OPEN_PROCESS,
    payload: { name }
  }
}

export function fetchProcesses () {
  return {
    type: FETCH_PROCESSES,
    payload: [
      { name: 'Process1' },
      { name: 'Process2' },
      { name: 'Process3' }
    ]
  }
}
