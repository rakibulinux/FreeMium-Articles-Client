import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import apiReducer from "./apiSlice";
import fetchReducer from "./fetchSlice";
import UserSlice from "./slice/UserSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    api: apiReducer,
    fetch: fetchReducer,
    users: UserSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
