export function start (actionType) {
  return `${actionType}_START`
}

export function success (actionType) {
  return `${actionType}_SUCCESS`
}

export function error (actionType) {
  return `${actionType}_ERROR`
}
