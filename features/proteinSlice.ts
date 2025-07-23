import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
export interface ProteinState {
  value: number
}

// Define the initial state using that type
const initialState: ProteinState = {
  value: 0
}

export const proteinSlice = createSlice({
  name: 'protein',
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

export const { set, increment } = proteinSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectProtein = (state: RootState) => state.protein.value;

export default proteinSlice.reducer;