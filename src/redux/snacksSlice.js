import { createSlice } from "@reduxjs/toolkit";
import { snacksData } from "../mockData";

const snacksSlice = createSlice({
  name: "snacks",
  initialState: snacksData,
  reducers: {
    // Add new snack to the list
    addSnack: (state, action) => {
      state.push(action.payload);
    },

    // Increment order count when snack ordered
    incrementOrdersCount: (state, action) => {
      const snack = state.find((s) => s.id === action.payload);
      if (snack) snack.ordersCount += 1;
    },
  },
});

export const { addSnack, incrementOrdersCount } = snacksSlice.actions;
export default snacksSlice.reducer;
