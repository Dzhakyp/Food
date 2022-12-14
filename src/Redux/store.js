import { configureStore } from "@reduxjs/toolkit";
import filter from "./Slices/filterSlices";

export const store = configureStore({
  reducer: { filter },
});
