import React from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../redux/studentsSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function CreateStudentPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newStudent = {
      id: Date.now(),
      name: data.name,
      referralCode: "STU" + Math.floor(1000 + Math.random() * 9000),
      totalSpent: 0,
    };
    dispatch(addStudent(newStudent));
    reset();
    navigate("/students");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-50 px-4">
      <div className="w-full max-w-md bg-white border border-indigo-100 shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-extrabold text-indigo-700 text-center mb-6">
          🎓 Create New Student
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <div>
            <label className="label">
              <span className="label-text text-gray-700 font-semibold">
                Student Name
              </span>
            </label>
            <input
              {...register("name", { required: true })}
              placeholder="Enter student name"
              className="input input-bordered w-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button
            className="btn bg-indigo-600 hover:bg-indigo-700 text-white font-semibold tracking-wide transition-all duration-200 shadow-md"
            type="submit"
          >
            ➕ Add Student
          </button>
        </form>
      </div>
    </div>
  );
}
