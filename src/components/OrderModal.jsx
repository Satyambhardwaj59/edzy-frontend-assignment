import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../redux/ordersSlice";

export default function OrderModal({ snack, onClose }) {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const [studentId, setStudentId] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleOrder = () => {
    if (!studentId) return alert("Please select a student!");

    const order = {
      id: Date.now(),
      snackId: snack.id,
      snackName: snack.name,
      studentId: +studentId,
      quantity,
      amount: snack.price * quantity,
    };

    dispatch(placeOrder(order));
    onClose();
  };

  return (
    <dialog open className="modal">
      <div className="modal-box bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white shadow-2xl rounded-2xl border border-indigo-400/30 backdrop-blur-md">
        {/* Header */}
        <h3 className="font-bold text-2xl text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          🛒 Order <span className="font-extrabold">{snack.name}</span>
        </h3>

        {/* Form */}
        <div className="form-control space-y-4">
          {/* Select Student */}
          <div>
            <label className="label">
              <span className="label-text text-indigo-200 font-medium">
                Select Student
              </span>
            </label>
            <select
              className="select w-full bg-white/10 text-white border border-indigo-400/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md transition-all duration-300"
              onChange={(e) => setStudentId(e.target.value)}
              value={studentId}
            >
              <option value="" className="text-gray-800 bg-white">
                Choose a Student
              </option>
              {students.map((s) => (
                <option key={s.id} value={s.id} className="text-gray-800 bg-white">
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="label">
              <span className="label-text text-indigo-200 font-medium">
                Quantity
              </span>
            </label>
            <input
              type="number"
              min="1"
              max="5"
              value={quantity}
              onChange={(e) => setQuantity(+e.target.value)}
              placeholder="Enter quantity (1–5)"
              className="input w-full bg-white/10 text-white border border-indigo-400/40 placeholder-indigo-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-md transition-all duration-300"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="modal-action flex justify-end mt-6 space-x-3">
          <button
            className="btn bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold hover:scale-105 transition-transform duration-200 shadow-lg border-0"
            onClick={handleOrder}
          >
            Confirm
          </button>
          <button
            className="btn bg-gradient-to-r from-rose-500 to-red-600 text-white font-semibold hover:scale-105 transition-transform duration-200 shadow-lg border-0"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
}
