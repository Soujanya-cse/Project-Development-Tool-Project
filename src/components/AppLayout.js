import React from "react";
import Sidebar from "./Sidebar";

const AppLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />  {/* ✅ Sidebar is ONLY here */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
