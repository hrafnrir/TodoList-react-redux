import { createSlice } from "@reduxjs/toolkit";

const todos = [];
const initialState = {
  todos,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: Date.now(),
        title: action.payload.title,
        isCompleted: false,
      });
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
