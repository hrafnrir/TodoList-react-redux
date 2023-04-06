import { configureStore } from "@reduxjs/toolkit";

import todo from "./slices/todoSlice.js";
import { localStorageMiddleware } from "./middleware.js";

const store = configureStore({
  reducer: { todo },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
