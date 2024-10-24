import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@mui/material';

const ProjectCard = ({ project }) => {
  const cardRef = useRef();

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <div ref={cardRef} className="bg-white dark:bg-gray-800 p-6 shadow-lg  rounded-2xl project-card transition-transform transform hover:scale-105 font-poppins">
      <img
        src={project.imgSrc}
        alt={project.alt}
        className="w-full h-52 pt-2 border-2 border-black object-cover mb-4 opacity-75 hover:opacity-100 transition-opacity duration-300"
      />
      <h3 className="text-2xl font-semibold mb-2 dark:text-white">
        {project.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
        {project.description}
      </p>
      <div className="flex justify-between">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          <Button variant="contained" color="primary">
            Live Visit
          </Button>
        </a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <Button variant="outlined" color="secondary">
            GitHub
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
