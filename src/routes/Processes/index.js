import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'processes',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Processes = require('./containers/ProcessesContainer').default
      const reducer = require('./reducer').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'processes', reducer })

      /*  Return getComponent   */
      cb(null, Processes)

    /* Webpack named bundle   */
    }, 'processes')
  }
})
