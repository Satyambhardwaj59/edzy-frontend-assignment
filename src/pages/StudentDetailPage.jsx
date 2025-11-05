import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function StudentDetailPage() {
    const { id } = useParams();
    const student = useSelector((state) =>
        state.students.find((s) => s.id === +id)
    );
    const orders = useSelector((state) =>
        state.orders.filter((o) => o.studentId === +id)
    );

    if (!student) return <p className="p-6">Student not found</p>;

    return (
        <div className="min-h-screen p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg mt-6">
            <h1 className="text-3xl font-bold text-blue-600 mb-2">{student.name}</h1>
            <p className="text-gray-600">Referral: {student.referralCode}</p>
            <p className="font-semibold text-green-600 mb-4">Total Spent: ₹{student.totalSpent}</p>

            <h2 className="text-xl font-semibold mb-2 text-indigo-700">🧾 Orders</h2>
            {orders.length ? (
                <div className="overflow-x-auto">
                    <table className="table  w-full ">
                        <thead className="bg-blue-300 text-gray-800">
                            <tr>
                                <th>Snack</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((o) => (
                                <tr key={o.id}>
                                    <td>{o.snackName}</td>
                                    <td>{o.quantity}</td>
                                    <td>₹{o.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-gray-500 italic">No orders yet</p>
            )}
        </div>

    );
}
