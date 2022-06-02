import { configureStore } from '@reduxjs/toolkit';
import tourReducer from '../reducers/tourReducer';
import usersReducer from '../reducers/usersReducer';

export const store = configureStore({
  devTools: true,
  reducer: {
    tour: tourReducer,
    user: usersReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
