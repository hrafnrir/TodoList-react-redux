import { createSelector } from "reselect";

export const selectTodos = (state) => state.todo.todos;
export const selectFilter = (state) => state.todo.filter;

export const selectVisibleTodos = createSelector(
  selectTodos,
  selectFilter,
  (todos, filter) =>
    todos.filter((item) => {
      switch (filter) {
        case "all":
          return true;
        case "active":
          return !item.isCompleted;
        case "completed":
          return item.isCompleted;
      }
    })
);

export const selectTotalActiveTodos = createSelector(
  selectTodos,
  (todos) => todos.filter((item) => !item.isCompleted).length
);

export const selectDisabledFilter = createSelector(selectTodos, (todos) =>
  !todos.some((item) => !item.isCompleted)
    ? "active"
    : !todos.some((item) => item.isCompleted)
    ? "completed"
    : "none"
);

export const selectDarkTheme = (state) => state.app.darkTheme;
