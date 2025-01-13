import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo, todoState } from "../../../types/ITodos";
import { getTodos, addTodo, deleteTodo } from "./todoAction";

const initialState: todoState = {
  todos: [],
  isLoading: false,
  error: "",
};

export const postSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getTodos.fulfilled,
      (state, action: PayloadAction<ITodo[]>) => {
        state.isLoading = false;
        state.todos = action.payload;
      }
    );
    builder.addCase(getTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "";
    });

    builder.addCase(addTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos.unshift(action.payload);
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "";
    });

    builder.addCase(deleteTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.filter(todo => todo._id !== action.payload._id)
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "";
    });
  },
});

export default postSlice.reducer;
