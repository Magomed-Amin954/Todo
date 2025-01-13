import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postSlice from "./post/todoSlice";


const rootReduser = combineReducers({
  todos: postSlice,
});

export const store = configureStore({
  reducer: rootReduser,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
