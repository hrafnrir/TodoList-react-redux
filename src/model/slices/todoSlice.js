import { createSlice, nanoid } from "@reduxjs/toolkit";

const todos = JSON.parse(localStorage.getItem("todo")) || [];
const initialState = {
  todos,
  filter: "all",
};

const deleteOneTodo = (todos, id) => {
  const i = todos.findIndex((item) => item.id === id);
  todos.splice(i, 1);
};

const switchEmptyFilter = (state) => {
  if (
    (!state.todos.find((item) => !item.isCompleted) &&
      state.filter === "active") ||
    (!state.todos.find((item) => item.isCompleted) &&
      state.filter === "completed")
  ) {
    state.filter = "all";
  }
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

      state.filter === "completed" && (state.filter = "all");
    },

    editTodo(state, action) {
      state.todos.find((item) => item.id === action.payload.id).title =
        action.payload.newTitle;
    },

    toggleTodoCompleted(state, action) {
      const todo = state.todos.find((item) => item.id === action.payload.id);
      todo.isCompleted = !todo.isCompleted;

      switchEmptyFilter(state);
    },

    deleteTodo(state, action) {
      deleteOneTodo(state.todos, action.payload.id);

      switchEmptyFilter(state);
    },

    deleteCompletedTodos(state) {
      const completedTodos = state.todos.filter(
        (item) => item.isCompleted === true
      );
      for (let todo of completedTodos) {
        deleteOneTodo(state.todos, todo.id);
      }

      switchEmptyFilter(state);
    },

    updateFilter(state, action) {
      state.filter = action.payload.filter;
    },
  },
});

export const {
  addTodo,
  editTodo,
  toggleTodoCompleted,
  deleteTodo,
  deleteCompletedTodos,
  updateFilter,
} = todoSlice.actions;

export default todoSlice.reducer;
