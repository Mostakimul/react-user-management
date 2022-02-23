import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
