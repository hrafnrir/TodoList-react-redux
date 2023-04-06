import { createSlice, nanoid } from "@reduxjs/toolkit";

const todos = JSON.parse(localStorage.getItem("todo")) || [];
const initialState = {
  todos,
};

const deleteOneTodo = (state, id) => {
  const i = state.findIndex((item) => item.id === id);
  state.splice(i, 1);
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.unshift({
        id: nanoid(),
        title: action.payload.title,
        isCompleted: false,
      });
    },

    editTodo(state, action) {
      state.todos.find((item) => item.id === action.payload.id).title =
        action.payload.newTitle;
    },

    toggleTodoCompleted(state, action) {
      const todo = state.todos.find((item) => item.id === action.payload.id);
      todo.isCompleted = !todo.isCompleted;
    },

    deleteTodo(state, action) {
      deleteOneTodo(state.todos, action.payload.id);
    },

    deleteCompletedTodos(state) {
      const completedTodos = state.todos.filter(
        (item) => item.isCompleted === true
      );
      for (let todo of completedTodos) {
        deleteOneTodo(state.todos, todo.id);
      }
    },
  },
});

export const {
  addTodo,
  editTodo,
  toggleTodoCompleted,
  deleteTodo,
  deleteCompletedTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
