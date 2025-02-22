import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white px-6 py-3">
      <h1 className="text-lg font-bold">Project Management</h1>
      <div className="space-x-4">
        <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">New Task</button>
        <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">Profile</button>
      </div>
    </div>
  );
};

export default Navbar;
