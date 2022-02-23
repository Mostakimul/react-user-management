import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isError: false,
  isScuccess: false,
  isLoading: false,
  message: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      state.isScuccess = false;
      state.isLoading = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {},
});

export const { reset } = userSlice.actions;

export default userSlice.reducer;
