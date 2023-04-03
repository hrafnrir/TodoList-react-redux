import { createSelector } from "reselect";

export const selectTodoIds = createSelector(
  (state) => state.todo.todos,
  (todos) => todos.map((item) => item.id)
);

export const selectTodoWithProps = (id) => (state) =>
  state.todo.todos.find((item) => item.id === id);
