import React from "react";
import { Link } from "react-router-dom";

export default function StudentCard({ student }) {
  return (
    <div className="card w-72 bg-white border border-gray-200 shadow-md hover:shadow-lg transition duration-300">
      <div className="card-body text-center">
        <h2 className="text-xl font-semibold text-blue-600">{student.name}</h2>
        <p className="text-gray-600">Referral: {student.referralCode}</p>
        <p className="text-sm text-gray-500">Spent: ₹{student.totalSpent}</p>
        <Link
          to={`/students/${student.id}`}
          className="btn btn-sm mt-3 bg-blue-500 hover:bg-blue-600 text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

