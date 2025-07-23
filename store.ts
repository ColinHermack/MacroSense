import { configureStore } from '@reduxjs/toolkit';
import carbsReducer from './features/carbsSlice';
import fatReducer from './features/fatSlice';
import proteinReducer from './features/proteinSlice';
import weightReducer from './features/weightSlice';

export const store = configureStore({
  reducer: {
    carbs: carbsReducer,
    fat: fatReducer,
    protein: proteinReducer,
    weight: weightReducer
  }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;