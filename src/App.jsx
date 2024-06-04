import React, { useState, useEffect } from 'react';
import Navbar from './(navbar)/page';
import projectData from './projectData';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(projectData[0].imageUrl);

  useEffect(() => {
    const imageUrls = projectData.map(project => project.imageUrl);
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % imageUrls.length;
      setSelectedImage(imageUrls[currentIndex]);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const headSection = document.getElementById('head');
      const aboutSection = document.getElementById('about');
      
      const headScroll = window.scrollY * 0.3;
      const aboutScroll = window.scrollY * 0.225;

      if (headSection) {
        headSection.style.backgroundPosition = `center calc(100% + ${headScroll}px)`;
      }
      if (aboutSection) {
        aboutSection.style.backgroundPosition = `center calc(100% + ${aboutScroll}px)`;
      }
    };

    const optimizedHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="main">
        <section id="head" className="section parallax" style={{ backgroundImage: 'url(/myPic.jpg)'}}>
          <div className="overlay">
            <div className="text-overlay">
              <h1 className="text-sm">Gallery</h1>
              <h2 className="text-[4.3vmax]">Panyawut Piyasirinanan</h2>
              <p className="text-end text-xl">Machine learning enthusiast with lots of hobby.</p>
            </div>
          </div>
        </section>
        <section id="about" className="section parallax" style={{ backgroundImage: 'url(/aboutPic.jpg)'}}>
          <div className="overlay">
            <div className="text-overlay mt-[20rem]">
              <p className="text-xl">I'm an undergraduate at Computer Engineering, KMUTT.</p>
            </div>
          </div>
        </section>
        <section id="projects" className="section" style={{ backgroundImage: `url(${selectedImage})`}}>
          <div className="overlay">
            <div className="card">
              <h2 className="pb-2">Projects</h2>
              <div className="projects-grid">
                {projectData.map((project, index) => (
                  <div key={index} className="project-card" onClick={() => setSelectedImage(project.imageUrl)}>
                    <h3 className="text-dark">{project.title}</h3>
                    <p className="text-gray">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="section" style={{ backgroundImage: 'url(/path/to/your/image3.jpg)', backgroundSize: 'cover' }}>
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