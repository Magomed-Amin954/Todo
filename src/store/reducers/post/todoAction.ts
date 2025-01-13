import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addTodoUrl, deleteTodoUrl, getTodosUrl } from "../../../api/constants";
import { ICreatePost, ITodo } from "../../../types/ITodos";

export const getTodos = createAsyncThunk("user/upload", async function () {
  const res = await axios.get(getTodosUrl());
  return res.data;
});

export const addTodo = createAsyncThunk<ITodo, ICreatePost>(
  "users/create",
  async (data) => {
    const response = await axios.post(addTodoUrl(), data);
    return response.data;
  }
);

export const deleteTodo = createAsyncThunk<Pick<ITodo, '_id'>, Pick<ITodo, '_id'>>(
  "users/delete",
  async (data) => {
    await axios.delete(deleteTodoUrl(data._id));
    return data
  }
);
