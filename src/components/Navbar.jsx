import { Link } from "react-router";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

function Navbar() {
  const { token, logout } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">
        <Link to="/">Event Scheduler</Link>
      </div>

      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>

        {token && (
          <Link to="/create-event" className="hover:underline">
            Create Event
          </Link>
        )}

        {!token && (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </>
        )}

        {token && (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
