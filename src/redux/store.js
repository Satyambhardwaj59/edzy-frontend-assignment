import { configureStore } from "@reduxjs/toolkit";
import snacksReducer from "./snacksSlice";
import studentsReducer from "./studentsSlice";
import ordersReducer from "./ordersSlice";

export const store = configureStore({
  reducer: {
    snacks: snacksReducer,
    students: studentsReducer,
    orders: ordersReducer,
  },
});
