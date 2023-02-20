import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import apiReducer from "./apiSlice";
import fetchReducer from "./fetchSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    api: apiReducer,
    fetch: fetchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
