import { toggleTheme } from "./slices/appSlice.js";
import { updateFilter } from "./slices/todoSlice.js";

export const localStorageMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const result = next(action);

    if (action.type === toggleTheme.type) {
      localStorage.setItem(
        "darkTheme",
        JSON.stringify(getState().app.darkTheme)
      );
      return result;
    }

    if (action.type !== updateFilter.type) {
      localStorage.setItem("todo", JSON.stringify(getState().todo.todos));
    }

    return result;
  };
