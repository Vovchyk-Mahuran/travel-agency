import { configureStore } from '@reduxjs/toolkit';
import historyReducer from '../reducers/historyReducer';
import tourReducer from '../reducers/tourReducer';
import usersReducer from '../reducers/usersReducer';

export const store = configureStore({
  devTools: true,
  reducer: {
    tour: tourReducer,
    user: usersReducer,
    history: historyReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
