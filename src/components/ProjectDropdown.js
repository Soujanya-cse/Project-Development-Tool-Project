import React from "react";

const projects = [
  { id: 1, name: "E-Commerce Website" },
  { id: 2, name: "Portfolio Site" },
  { id: 3, name: "Social Media App" }
];

const ProjectPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Projects</h2>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <button className="mt-2 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">
              View Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
