import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutMe from './components/About';
import ProjectSection from './Data/projectSection';
import AnimatedBackground from './components/AnimatedBackground';
import { projects } from './Data/projects';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AnimatedBackground/>
      <div className="App select-none">
      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} />
        {/* <div id="about">
          <AboutMe />
        </div> */}
        <div id="javascript-projects">
          <ProjectSection title="JavaScript Projects" projects={projects.javascript} />
        </div>
        <div id="react-projects">
          <ProjectSection title="ReactJS Projects" projects={projects.react} />
        </div>
        <div id="backend-projects">
          <ProjectSection title="Backend Projects" projects={projects.backend} />
        </div>
        <div id="fullstack-projects">
          <ProjectSection title="Full Stack Projects" projects={projects.fullstack} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
