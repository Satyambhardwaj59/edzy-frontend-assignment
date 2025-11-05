import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SnacksPage from "./pages/SnacksPage";
import StudentsPage from "./pages/StudentsPage";
import CreateStudentPage from "./pages/CreateStudentPage";
import StudentDetailPage from "./pages/StudentDetailPage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<SnacksPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/create-student" element={<CreateStudentPage />} />
        <Route path="/students/:id" element={<StudentDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
