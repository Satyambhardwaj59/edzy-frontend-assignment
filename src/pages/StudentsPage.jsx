import React from "react";
import { useSelector } from "react-redux";
import StudentCard from "../components/StudentCard";
import { Link } from "react-router-dom";

export default function StudentsPage() {
    const students = useSelector((state) => state.students);

    return (
        <div className="min-h-screen p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-extrabold text-indigo-700">🎓 Students</h1>
                <Link
                    to="/create-student"
                    className="btn bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold shadow-md"
                >
                    + Add Student
                </Link>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {students.map((s) => (
                    <StudentCard key={s.id} student={s} />
                ))}
            </div>
        </div>

    );
}
