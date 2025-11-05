import React from "react";

export default function SnackCard({ snack, onOrder }) {
    return (
        <div className="card w-64 bg-white/70 backdrop-blur-lg border border-gray-200 shadow-xl hover:scale-105 transition-transform duration-300">
            <figure className="px-6 pt-6">
                <img
                    src={snack.img}
                    alt={snack.name}
                    className="rounded-xl w-40 h-40 object-cover transform transition-transform duration-300 hover:scale-115"
                />

            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-lg font-semibold">{snack.name}</h2>
                <p className="text-gray-600">Price ₹{snack.price}</p>
                <p className="text-sm text-gray-500">Orders: {snack.ordersCount}</p>
                <div className="card-actions">
                    <button
                        className="btn btn-primary btn-sm mt-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                        onClick={() => onOrder(snack)}
                    >
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
}

