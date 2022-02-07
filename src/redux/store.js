import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './rootReducer';

//Persist

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
export const persistor = persistStore(store);
