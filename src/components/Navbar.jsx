import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-blue-500 to-indigo-600 text-white sticky top-0 z-50 shadow-lg px-4">
      <div className="flex-1">
        <NavLink
          to="/"
          className="btn btn-ghost normal-case text-2xl text-white font-bold tracking-wide"
        >
          🍽️ Canteen Portal
        </NavLink>
      </div>

      <div className="flex gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `btn btn-sm ${
              isActive
                ? "bg-white text-blue-600 font-semibold"
                : "bg-transparent border border-white hover:bg-white hover:text-blue-600"
            }`
          }
        >
          Snacks
        </NavLink>

        <NavLink
          to="/students"
          className={({ isActive }) =>
            `btn btn-sm ${
              isActive
                ? "bg-white text-blue-600 font-semibold"
                : "bg-transparent border border-white hover:bg-white hover:text-blue-600"
            }`
          }
        >
          Students
        </NavLink>

        <NavLink
          to="/create-snack"
          className={({ isActive }) =>
            `btn btn-sm ${
              isActive
                ? "bg-white text-blue-600 font-semibold"
                : "bg-transparent border border-white hover:bg-white hover:text-blue-600"
            }`
          }
        >
           Add Snack
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
