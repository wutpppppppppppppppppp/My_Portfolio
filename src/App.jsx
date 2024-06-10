// src/App.jsx
import React from "react";
import Navbar from "./components/navbar";
import Head from "./pages/headMe/page";
import About from "./pages/aboutMe/page";
import Projects from "./pages/projectMe/page";
import Footer from "./pages/footerMe/page";
import Exp from "./pages/expMe/page";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="main">
        <Head />
        <About />
        <Projects />
        <Exp />
        <Footer />
      </div>
    </div>
  );
};

export default App;
