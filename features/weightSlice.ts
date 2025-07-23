import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
export interface WeightState {
  value: number
}

// Define the initial state using that type
const initialState: WeightState = {
  value: 0
}

export const weightSlice = createSlice({
  name: 'weight',
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

export const { set, increment } = weightSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectWeight = (state: RootState) => state.weight.value;

export default weightSlice.reducer;