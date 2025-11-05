import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { path: "/", label: "Snacks" },
    { path: "/students", label: "Students" },
    { path: "/create-snack", label: "Add Snack" },
    { path: "/create-student", label: "Add Student" },
  ];

  return (
    <nav className="navbar bg-gradient-to-r from-blue-500 to-indigo-600 text-white sticky top-0 z-50 shadow-lg px-4">
      <div className="flex justify-between items-center h-16 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <NavLink
          to="/"
          className="btn btn-ghost normal-case text-2xl text-white font-bold tracking-wide"
        >
          🍽️ Canteen Portal
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-2">
          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) =>
                `btn btn-sm ${
                  isActive
                    ? "bg-white text-blue-600 font-semibold"
                    : "bg-transparent border border-white hover:bg-white hover:text-blue-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-3xl"
          >
            {isOpen ? "❌" : "🏠" }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col items-center gap-2 py-4">
          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              onClick={toggleMenu} // Close menu on click
              className={({ isActive }) =>
                `btn btn-sm w-3/4 ${
                  isActive
                    ? "bg-white text-blue-600 font-semibold"
                    : "bg-transparent border border-white hover:bg-white hover:text-blue-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
