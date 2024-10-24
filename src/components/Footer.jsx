import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 bg-gradient-to-r from-purple-500 to-pink-500 font-roboto text-white text-center">
      <p>&copy; {new Date().getFullYear()} Pvpkishore. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
