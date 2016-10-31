import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import forms from '../reducers/forms'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    routing: routerReducer,
    forms: forms,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
