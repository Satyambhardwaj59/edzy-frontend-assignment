import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSnack } from "../redux/snacksSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function CreateSnackPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [preview, setPreview] = useState(null);

  // Handle image upload and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  // Handle form submission
  const onSubmit = (data) => {
    const newSnack = {
      id: Date.now(),
      name: data.name,
      price: parseFloat(data.price),
      ordersCount: 0,
      img: preview || "https://via.placeholder.com/150", // fallback
    };

    dispatch(addSnack(newSnack));
    reset();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-indigo-100">
        <h1 className="text-3xl font-extrabold text-indigo-700 text-center mb-6">
           Create New Snack
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          {/* Image Upload */}
          <div>
            <label className="label">
              <span className="label-text text-gray-700 font-semibold">
                Snack Image
              </span>
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input file-input-bordered w-full"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-3 rounded-xl w-40 h-40 object-cover mx-auto shadow-md transition-transform duration-300 hover:scale-105"
              />
            )}
          </div>

          {/* Snack Name */}
          <div>
            <label className="label">
              <span className="label-text text-gray-700 font-semibold">
                Snack Name
              </span>
            </label>
            <input
              {...register("name", { required: true })}
              placeholder="Enter snack name"
              className="input input-bordered w-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Snack Price */}
          <div>
            <label className="label">
              <span className="label-text text-gray-700 font-semibold">
                Price (₹)
              </span>
            </label>
            <input
              type="number"
              step="1"
              min="1"
              {...register("price", { required: true })}
              placeholder="Enter price"
              className="input input-bordered w-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md"
          >
             Add Snack
          </button>
        </form>
      </div>
    </div>
  );
}
