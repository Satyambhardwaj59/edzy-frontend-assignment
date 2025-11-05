import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-blue-500 to-indigo-600 text-white sticky top-0 z-50 shadow-md">
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost normal-case text-2xl text-white font-bold">
            🍽️ Canteen Portal
          </NavLink>
        </div>
        <div className="flex gap-2">
          <NavLink to="/" className="btn btn-sm bg-white text-blue-600 hover:bg-blue-100">
            Snacks
          </NavLink>
          <NavLink to="/students" className="btn btn-sm bg-white text-blue-600 hover:bg-blue-100">
            Students
          </NavLink>
        </div>
      </div>
  )
}

export default Navbar
