import React, { useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import projectData from "../../data/projectData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // Define transitions for the project description
  const transitions = useTransition(selectedProject, {
    key: selectedProject,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 200 },
    exitBeforeEnter: true,
  });

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
            <p className="m-1">{project.title}</p>
          </div>
        ))}
      </div>

      {/* Project Description */}
      <div className="flex items-center justify-center w-1/2">
        {transitions((style, item) =>
          item ? (
            <animated.div style={style} className="p-10">
              <h2>{item.title}</h2>
              <p className="mb-1">{item.description}</p>
              <img
                src={item.imageUrl}
                alt={item.title}
                className="object-cover w-full rounded-lg"
              />
            </animated.div>
          ) : (
            <div className="w-2/3">
              <div className="skeleton h-8 w-full mb-2"></div>
              <div className="skeleton h-6 w-2/3 mb-6"></div>
              <div className="skeleton h-32 w-full"></div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
