import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userService from './userService';

// get users
export const fetchUsers = createAsyncThunk('users/getAll', async (thunkAPI) => {
  try {
    return await userService.fetchUsers();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

const users = JSON.parse(localStorage.getItem('users'));
const initialState = {
  allUsers: users ? users : [],
  isError: false,
  isScuccess: false,
  isLoading: false,
  message: '',
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    reset: (state) => {
      state.isScuccess = false;
      state.isLoading = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isScuccess = true;
        state.allUsers = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.allUsers = null;
      });
  },
});

export const { reset } = userSlice.actions;

export default userSlice.reducer;
