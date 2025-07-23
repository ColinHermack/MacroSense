import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
export interface CarbsState {
  value: number
}

// Define the initial state using that type
const initialState: CarbsState = {
  value: 0
}

export const carbsSlice = createSlice({
  name: 'carbs',
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

export const { set, increment } = carbsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCarbs = (state: RootState) => state.carbs.value;

export default carbsSlice.reducer;