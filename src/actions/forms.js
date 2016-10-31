export const CHANGE_VALUE = 'CHANGE_VALUE'

export function changeValue (namespace, name, value) {
  return {
    type: CHANGE_VALUE,
    payload: {
      namespace,
      name,
      value
    }
  }
}
