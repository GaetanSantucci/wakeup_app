//~ Import
import rootReducer from './reducers';
// import rootMiddleware from './middlewares';
import { configureStore } from '@reduxjs/toolkit';

//recent way to configure store
export function makeStore() {
  return configureStore({
    reducer: rootReducer
    // middleware: rootMiddleware,
  });
}

export const store = makeStore()