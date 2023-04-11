import { createSlice, nanoid } from "@reduxjs/toolkit";

const todos = JSON.parse(localStorage.getItem("todo")) || [];
const initialState = {
  todos,
  filter: "all",
};

const switchEmptyFilter = (state) => {
  if (
    !state.todos.some(
      (item) =>
        (!item.isCompleted && state.filter === "active") ||
        (item.isCompleted && state.filter === "completed")
    )
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
      state.todos = state.todos.filter(({ id }) => id !== action.payload.id);

      switchEmptyFilter(state);
    },

    deleteCompletedTodos(state) {
      state.todos = state.todos.filter((item) => !item.isCompleted);

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
