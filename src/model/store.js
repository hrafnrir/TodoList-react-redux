import { configureStore } from "@reduxjs/toolkit";

import app from "./slices/appSlice.js";
import todo from "./slices/todoSlice.js";
import { localStorageMiddleware } from "./middleware.js";

const store = configureStore({
  reducer: { app, todo },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
