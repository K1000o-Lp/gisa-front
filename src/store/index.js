import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../reducers';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };