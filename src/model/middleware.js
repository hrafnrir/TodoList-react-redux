export const localStorageMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const result = next(action);
    if (action.type === "app/toggleTheme") {
      localStorage.setItem(
        "darkTheme",
        JSON.stringify(getState().app.darkTheme)
      );
      return result;
    }
    if (action.type !== "todo/updateFilter") {
      localStorage.setItem("todo", JSON.stringify(getState().todo.todos));
    }
    return result;
  };
