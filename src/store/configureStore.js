import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';
import logger from 'redux-logger'

export default function configureStore(initialState) {

    const store = compose(
        applyMiddleware(thunk, logger)
    )(createStore)(rootReducer)

    // if (module.hot) {
    //     // Enable Webpack hot module replacement for reducers
    //     module.hot.accept('../reducers', () => {
    //         const nextRootReducer = require('../reducers').rootReducer
    //         store.replaceReducer(nextRootReducer)
    //     });
    // }

    // const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    return store;
};