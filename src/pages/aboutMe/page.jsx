import React, { useState, useEffect } from 'react';
import aboutTopics from '../../data/aboutData';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import icons from react-icons/fa

const About = () => {
  const [hoverSection, setHoverSection] = useState(null);

  const handleMouseEnter = (section) => {
    setHoverSection(section);
  };

  const handleMouseLeave = () => {
    setHoverSection(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.accordion-item')) {
        setHoverSection(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="overlay">
      <h2 className="text-[3vmax] pr-9">About Me</h2>
      <div className="accordion">
        {aboutTopics.map(({ title, description, icons, links }, index) => (
          <div
            key={title}
            className="accordion-item mt-4 cursor-pointer relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center align-bottom">
              <p className="text-lg">{title}</p>
              {hoverSection === index && (
                <div className="icons-container">
                  {icons && icons.map((Icon, i) => (
                    <a key={i} href={links[i]} target="_blank" rel="noopener noreferrer">
                      <Icon className="text-offwhite hover:text-dark" />
                    </a>
                  ))}
                </div>
              )}
            </div>
            {hoverSection === index && (
              <div className={`accordion-content transition duration-500 ease-in-out ${hoverSection === index ? 'opacity-100' : 'opacity-0'}`}>
              <p className="transition duration-500 ease-in-out">{description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
