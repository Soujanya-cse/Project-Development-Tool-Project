import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
// import Navbar from "./components/Navbar";
import AddProjectModal from "./components/AddProjectModal";
// import AddTaskModal from "./components/AddTaskModal";
// import EditProjectModal from "./components/EditProjectModal";
// import ProjectPage from "./components/ProjectPage";
import Task from "./components/Task";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Logout from "./components/Logout";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  console.log('render app..');

  return (
    <AppLayout>  
      <div className="flex flex-col flex-1">  {/* ✅ Removed Sidebar from here */}
        <Toaster position="top-right" gutter={8} />
        <Routes>
          <Route path="/:projectId" element={<Task />} />
          <Route path="/" element={
            <div className="flex flex-col items-center w-full pt-10">
              <img src="./image/welcome.svg" className="w-5/12" alt="" />
              <h1 className="text-lg text-gray-600">Select or create new project</h1>
            </div>
          } />
        </Routes>
        <AddProjectModal isModalOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </AppLayout>
  );
};

export default App;
