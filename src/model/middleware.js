export const localStorageMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const result = next(action);
    if (action.type !== "todo/updateFilter") {
      localStorage.setItem("todo", JSON.stringify(getState().todo.todos));
    }
    return result;
  };
