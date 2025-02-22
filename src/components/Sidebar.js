import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ openAddProjectModal }) => {  // ✅ Accept function as a prop
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-5">📁 Project Manager</h2>
      <nav className="space-y-3">
        <Link to="/projects" className="block py-2 px-4 bg-gray-800 rounded hover:bg-gray-700">
          🏠 Dashboard
        </Link>
        <button 
          onClick={openAddProjectModal}  // ✅ Clicking this should open the modal
          className="block w-full text-left py-2 px-4 bg-blue-500 rounded hover:bg-blue-600"
        >
          ➕ Add Project
        </button>
        <Link to="/about" className="block py-2 px-4 bg-gray-800 rounded hover:bg-gray-700">
          ℹ️ About
        </Link>
        <Link to="/logout" className="block py-2 px-4 bg-red-500 rounded hover:bg-red-600">
          🚪 Logout
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
