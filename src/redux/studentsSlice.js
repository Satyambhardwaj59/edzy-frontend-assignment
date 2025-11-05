import { createSlice } from "@reduxjs/toolkit";
import { studentsData } from "../mockData";

const studentsSlice = createSlice({
  name: "students",
  initialState: studentsData,
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    },
    updateStudentSpent: (state, action) => {
      const { studentId, amount } = action.payload;
      const student = state.find((s) => s.id === studentId);
      if (student) student.totalSpent += amount;
    },
  },
});

export const { addStudent, updateStudentSpent } = studentsSlice.actions;
export default studentsSlice.reducer;
