import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../containers/Login/slice";
const store = configureStore({
  reducer: {
    login: loginSlice,
  },
});

export default store;

export const dispatch = store.dispatch;
