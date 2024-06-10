// src\pages\aboutMe\page.jsx
import React, { useState } from "react";
import aboutTopics from "../../data/aboutData";

const About = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div id="about" className="hero min-h-screen">
      <div className="hero-content flex w-full">
        <h1 className="text-[3vmax]">About Me</h1>
        <div className="divider divider-horizontal"></div>
        <div>
          {aboutTopics.map(({ title, description, icons, links }, index) => (
            <div key={title} tabIndex={index} className="collapse group">
              <div className="collapse-title text-xl flex justify-between">
                <h2 className="hover-text-info group-focus:text-info">
                  {title}
                </h2>
                <div className="icons-container">
                  {icons &&
                    icons.map((Icon, i) => (
                      <a
                        key={i}
                        href={links[i]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-text-info"
                      >
                        <Icon className="icon" />
                      </a>
                    ))}
                </div>
              </div>

              <div className="collapse-content">
                {description && typeof description === "string" ? (
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                ) : (
                  description.map((item, i) => (
                    <div key={i}>
                      <div className="skillcollapse skillcollapse-open">
                        <h3 className="skillcollapse-title">{item.category}</h3>
                        <div className="skillcollapse-content py-1">
                          <div className="flex items-center">
                            {item.icons.map((Icon, j) => (
                              <div
                                key={j}
                                className="relative flex items-center"
                                onMouseEnter={() =>
                                  setHoveredIcon(`${item.category}-${j}`)
                                }
                                onMouseLeave={() => setHoveredIcon(null)}
                              >
                                <Icon className="iconSm hover-text-accent" />
                                {hoveredIcon === `${item.category}-${j}` && (
                                  <div
                                    className={`mr-4 ${
                                      hoveredIcon === `${item.category}-${j}`
                                        ? "fade-in"
                                        : "fade-out"
                                    }`}
                                  >
                                    {item.iconName[j]}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
