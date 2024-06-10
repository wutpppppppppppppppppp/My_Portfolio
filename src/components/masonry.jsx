import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Masonry from "@mui/lab/Masonry";
import { useSpring, animated } from "@react-spring/web";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import experienceData from "../data/expData";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const closeButtonStyle = {
  position: "absolute",
  top: 8,
  right: 8,
  zIndex: 1,
};

export default function ImageMasonry() {
  const [open, setOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleOpen = (experience) => {
    setSelectedExperience(experience);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedExperience(null);
  };

  // Animation for masonry items
  const masonryTransitions = useSpring({
    opacity: open ? 0.5 : 1,
    transform: open ? "scale(0.9)" : "scale(1)",
    config: { tension: 200, friction: 15 },
  });

  return (
    <>
      <Box sx={{ width: "100%", minHeight: 829 }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
          {experienceData.map((experience, index) => (
            <animated.div
              key={index}
              onClick={() => handleOpen(experience)}
              style={masonryTransitions}
            >
              <img
                src={experience.ImageUrl}
                alt={experience.title}
                loading="lazy"
                className="hover-effect cursor-pointer block w-full shadow-neutral shadow-lg"
              />
            </animated.div>
          ))}
        </Masonry>
      </Box>
      {selectedExperience && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <IconButton onClick={handleClose} sx={closeButtonStyle}>
              <CloseIcon />
            </IconButton>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="text-neutral"
            >
              {selectedExperience.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {selectedExperience.description}
            </Typography>
            {selectedExperience.videoUrl && (
              <div className="mt-4">
                <iframe
                  width="100%"
                  height="315"
                  src={selectedExperience.videoUrl}
                  title="Video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <div className="flex mt-4 space-x-2">
              {selectedExperience.icons.map((Icon, index) => (
                <a
                  key={index}
                  href={selectedExperience.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-contents hover:text-accent"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </Box>
        </Modal>
      )}
    </>
  );
}
