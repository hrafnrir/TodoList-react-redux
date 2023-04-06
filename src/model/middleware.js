export const localStorageMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const result = next(action);
    localStorage.setItem("todo", JSON.stringify(getState().todo.todos));
    return result;
  };
