import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-scroll'; // Adjust this import based on your routing solution
import { GiHamburgerMenu } from 'react-icons/gi'; // Hamburger icon
import { MdClose } from 'react-icons/md'; // Close icon

const Navbar = ({ toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <AppBar position="sticky" className="bg-gradient-to-r from-purple-500 to-pink-500">
      <Toolbar className="bg-gradient-to-r from-purple-500 to-pink-500 flex justify-between items-center">
        <Typography variant="h6" className="text-2xl text-purple-950 font-poppins font-bold">
          Pvpkishore
        </Typography>

        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <Button onClick={toggleMenu} color="inherit">
            {menuOpen ? <MdClose /> : <GiHamburgerMenu />}
          </Button>
        </div>

        {/* Menu Items */}
        <Box
          className={`fixed top-0 right-0 h-full w-64 bg-gray-800 lg:relative lg:flex lg:h-auto lg:w-auto lg:bg-transparent lg:flex-row lg:space-y-0 space-y-4 p-6 transition-all duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0`}
        >
          <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0">
            <Link to="javascript-projects" smooth={true} duration={500}>
              <Button className="hover:bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-200" color="inherit">
                JavaScript Projects
              </Button>
            </Link>
            <Link to="react-projects" smooth={true} duration={500}>
              <Button className="hover:bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-200" color="inherit">
                ReactJS Projects
              </Button>
            </Link>
            <Link to="backend-projects" smooth={true} duration={500}>
              <Button className="hover:bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-200" color="inherit">
                Backend Projects
              </Button>
            </Link>
            <Link to="fullstack-projects" smooth={true} duration={500}>
              <Button className="hover:bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-200" color="inherit">
                Full Stack Projects
              </Button>
            </Link>
            <Button
              className="hover:bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-200"
              color="inherit"
              onClick={toggleDarkMode}
            >
              Theme
            </Button>
          </div>
        </Box>
      </Toolbar>

      {/* Overlay Background */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 transition-opacity duration-300 ease-in-out"
          onClick={toggleMenu} // Close menu when clicking outside
        />
      )}
    </AppBar>
  );
};

export default Navbar;
