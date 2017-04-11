import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import devToolsEnhancer from 'remote-redux-devtools';

export default (initialState) => {
  let middleware = applyMiddleware(thunk);
  if (process.env.NODE_ENV !== 'production') {
    middleware = compose(middleware, devToolsEnhancer());
  }
  const store = createStore(reducers, initialState, middleware);
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default);
    });
  }
  return store;
};