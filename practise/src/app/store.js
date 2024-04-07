import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "/src/features/todo/todoSlice.js";

// Create the Redux store
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer, // Using the reducer from todoSlice
    // Add other reducers here if needed
  },
  // Add middleware, enhancers, etc. if needed
});
