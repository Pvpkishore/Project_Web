import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { gsap } from 'gsap';

const ProjectSection = ({ title, projects }) => {
  // Each section manages its own visible count and expanded state
  const [visible, setVisible] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleVisibility = () => {
    if (isExpanded) {
      setVisible(3); // Show only 3 cards
    } else {
      setVisible(projects.length); // Show all cards
    }
    setIsExpanded(!isExpanded); // Toggle expanded state
  };

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
  };

  return (
    <div className="my-10 animated-border border-2 border-x-indigo-500 border-y-pink-500 bg-gray-800 rounded-md p-4 h-fit w-auto mx-6">
    <h2 className="text-2xl font-bold text-center mb-6 text-pink-500">{title}</h2>
    <div className="flex flex-wrap justify-center">
      {projects.slice(0, visible).map((project) => (
        <Card
          key={project.id}
          className="m-4 max-w-xs border-2 border-pink-500"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <CardMedia className='px-2 pt-2' component="img" image={project.imgSrc} alt={project.alt} />
          <CardContent>
            <Typography variant="h5">{project.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
            <div className="flex justify-between mt-4">
              <Button className='text-white bg-gradient-to-br from-pink-500 to-indigo-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' variant="contained"  href={project.liveLink} target="_blank">
                Live Visit
              </Button>
              <Button className='text-white bg-gradient-to-br from-gray-700 to-gray-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' variant="contained" href={project.githubLink} target="_blank">
                GitHub
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
    <div className="text-center">
      <Button variant="contained" onClick={toggleVisibility} className="mt-4">
        {isExpanded ? 'Show Less' : 'Show More'}
      </Button>
    </div>
  </div>
  
  );
};

export default ProjectSection;
