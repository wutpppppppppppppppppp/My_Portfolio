// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Head from './pages/headMe/page';
import About from './pages/aboutMe/page';
import projectData from './data/projectData';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(projectData[0].imageUrl);

  useEffect(() => {
    const imageUrls = projectData.map(project => project.imageUrl);
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % imageUrls.length;
      setSelectedImage(imageUrls[currentIndex]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.parallax');
      sections.forEach(section => {
        const speed = section.getAttribute('data-speed');
        const offset = window.scrollY;
        section.style.backgroundPositionY = `${offset * speed}px`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="main flex flex-col flex-grow w-full">
        <section id="head" className="section parallax" data-speed="0.2" style={{ backgroundImage: 'url(/myPic.jpg)' }}>
          <Head />
        </section>

        <section id="about" className="section parallax" data-speed="-1.1" style={{ backgroundImage: 'url(/aboutBg.jpg)' }}>
          <About />
        </section>

        <section id="projects" className="section parallax" data-speed="0" style={{ backgroundImage: `url(${selectedImage})` }}>
          <div className="overlay">
            <div className="card">
              <h2 className="pb-2">Projects</h2>
              <div className="projects-grid">
                {projectData.map(({ title, description, imageUrl }, index) => (
                  <div
                    key={title} // Use a unique identifier
                    className="project-card"
                    onClick={() => setSelectedImage(imageUrl)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${title}`}
                  >
                    <h3 className="text-dark">{title}</h3>
                    <p className="text-gray">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section id="contact" className="section parallax" data-speed="0.2" style={{ backgroundImage: 'url(/path/to/your/image3.jpg)', backgroundSize: 'cover' }}>
          <div className="overlay">
            <div className="card">
              <h2>Contact</h2>
              <p>Feel free to reach out to me at <a href="mailto:example@example.com">example@example.com</a></p>
            </div>
          </div>
        </section>

      </div>

      <footer className="footer">
        <p>&copy; 2024 My Portfolio</p>
      </footer>

    </div>
  );
};

export default App;