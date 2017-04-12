import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import reducers from '../reducers';

export default (initialState) => {
  let middleware = applyMiddleware(thunk);
  if (process.env.NODE_ENV !== 'production') {
    middleware = compose(middleware, devToolsEnhancer());
  }
  const store = createStore(reducers, initialState, middleware);
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(reducers.default);
    });
  }
  return store;
};
