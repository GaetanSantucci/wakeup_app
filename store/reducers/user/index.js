// userReducer.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/getAllUsers', async (thunkApi) => {
  const response = await fetch('https://wakeupbox.fr/api/v1/users')
  const data = await response.json();
  return data;
});

const initialState = {
  logged: false,
  settings: {}
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {

      return action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;