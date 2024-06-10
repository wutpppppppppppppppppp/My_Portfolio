// src/pages/expMe/page.jsx
import React from "react";
import ImageMasonry from "../../components/masonry";

const Exp = () => {
  return (
    <div id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2>Experience</h2>
        <ImageMasonry />
      </div>
    </div>
  );
};

export default Exp;
