import React, { useState } from "react";
import { useSelector } from "react-redux";
import SnackCard from "../components/SnackCard";
import OrderModal from "../components/OrderModal";

export default function SnacksPage() {
    const snacks = useSelector((state) => state.snacks);
    const [selectedSnack, setSelectedSnack] = useState(null);

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-extrabold text-center mb-6 text-indigo-700">
                🧁 Available Snacks
            </h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {snacks.map((snack) => (
                    <SnackCard key={snack.id} snack={snack} onOrder={setSelectedSnack} />
                ))}
            </div>

            {selectedSnack && (
                <OrderModal snack={selectedSnack} onClose={() => setSelectedSnack(null)} />
            )}
        </div>

    );
}
