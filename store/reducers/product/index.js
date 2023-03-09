// productReducer.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPlates = createAsyncThunk('plates/getAllPlates', async (thunkApi) => {
  const response = await fetch('https://wakeupbox.fr/api/v1/plates')
  const data = await response.json();
  return data;
});

const initialState = {
  platesList: [],
  value: 1
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlates.fulfilled, (state, action) => {
      state.platesList.push(...action.payload);
    })
  }

});

// export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
