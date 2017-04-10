import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from 'remote-redux-devtools';

export default (initialState) => {
  let middleware = applyMiddleware(thunk);
  if (process.env.NODE_ENV !== 'production') {
    const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
    middleware = composeEnhancers(middleware);
  }
  const store = createStore(reducers, initialState, middleware);
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default);
    });
  }
  return store;
};