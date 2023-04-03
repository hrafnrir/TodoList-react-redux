import { configureStore } from "@reduxjs/toolkit";

import todo from "./slices/todoSlice.js";

const store = configureStore({
  reducer: { todo },
});

export default store;
