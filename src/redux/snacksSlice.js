import { createSlice } from "@reduxjs/toolkit";
import { snacksData } from "../mockData";

const snacksSlice = createSlice({
  name: "snacks",
  initialState: snacksData,
  reducers: {
    incrementOrdersCount: (state, action) => {
      const snack = state.find((s) => s.id === action.payload);
      if (snack) snack.ordersCount += 1;
    },
  },
});

export const { incrementOrdersCount } = snacksSlice.actions;
export default snacksSlice.reducer;
