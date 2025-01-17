// npm imports
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { createReduxMiddleware } from '@karmaniverous/serify-deserify';

// redux imports
import pageReducer from './pageSlice.js';

// Combine reducers.
const combinedReducer = combineReducers({
  page: pageReducer,
});

// Create master reducer.
const reducer = (state, action) => {
  // Support Next.js hydration.
  if (action.type === HYDRATE)
    return {
      ...state,
      ...action.payload,
    };

  // Return hydrated reducer.
  return combinedReducer(state, action);
};

// Declare serify middleware.
const serifyMiddleware = createReduxMiddleware();

// Create store.
const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      serifyMiddleware,
    ],
  });

// Create page wrapper.
export const wrapper = createWrapper(makeStore);
