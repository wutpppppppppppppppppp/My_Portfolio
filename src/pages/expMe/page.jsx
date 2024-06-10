// src/pages/expMe/page.jsx
import React from "react";

const experienceData = [
  {
    title: "Experience 1",
    description: "Description of experience 1",
    height: "h-40",
  },
  {
    title: "Experience 2",
    description: "Description of experience 2",
    height: "h-20",
  },
  {
    title: "Experience 3",
    description: "Description of experience 3",
    height: "h-36",
  },
  {
    title: "Experience 4",
    description: "Description of experience 4",
    height: "h-28",
  },
  // Add more experience data as needed
];

const Exp = () => {
  return (
    <div id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {experienceData.map((experience, index) => (
            <div
              key={index}
              className={`mb-4 break-inside-avoid ${experience.height}`}
            >
              <div className="p-4 rounded-lg shadow">
                <h3 className="font-bold">{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exp;

