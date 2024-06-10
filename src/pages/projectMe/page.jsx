import React, { useState } from "react";
import projectData from "../../data/projectData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div
      id="projects"
      className="flex w-full min-h-screen items-center justify-center"
    >
      {/* Vertical Carousel */}
      <div className="carousel carousel-vertical overflow-y-auto w-1/2 p-10">
        {projectData.map((project) => (
          <div
            key={project.title}
            className="carousel-item flex items-center justify-end cursor-pointer"
            onClick={() => handleProjectClick(project)}
          >
            <h2 className="hover:text-primary">{project.title}</h2>
          </div>
        ))}
      </div>

      {/* Project Description */}
      <div className="flex items-center justify-center w-1/2">
        {selectedProject ? (
          <div className="p-10">
            <h2 className="">{selectedProject.title}</h2>
            <p className="">{selectedProject.description}</p>
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              className="object-cover w-full rounded-lg"
            />
          </div>
        ) : (
          <div className="w-2/3">
            <div className="skeleton h-8 w-full mb-2"></div>
            <div className="skeleton h-6 w-2/3 mb-6"></div>
            <div className="skeleton h-32 w-full"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
