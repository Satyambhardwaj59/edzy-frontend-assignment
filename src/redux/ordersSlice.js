import { createSlice } from "@reduxjs/toolkit";
import { incrementOrdersCount } from "./snacksSlice";
import { updateStudentSpent } from "./studentsSlice";

const ordersSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addOrder } = ordersSlice.actions;

// ✅ A thunk to handle linked updates
export const placeOrder = (orderData) => (dispatch) => {
  dispatch(addOrder(orderData));
  dispatch(incrementOrdersCount(orderData.snackId));
  dispatch(updateStudentSpent({ studentId: orderData.studentId, amount: orderData.amount }));
};

export default ordersSlice.reducer;
