import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
export interface FatSlice {
  value: number
}

// Define the initial state using that type
const initialState: FatSlice = {
  value: 0
}

export const fatSlice = createSlice({
  name: 'fat',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    set: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }
});

export const { set, increment } = fatSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFat = (state: RootState) => state.fat.value;

export default fatSlice.reducer;