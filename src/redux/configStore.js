import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice";
import userSlice from "./userSlice";
export const store = configureStore({
  reducer: { loadingSlice, userSlice },
});
