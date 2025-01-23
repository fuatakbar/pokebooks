import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-4 bg-white text-gray-700">
      <p>
        &copy; {new Date().getFullYear()} PokeBooks by Fuat Akbar. <br /> All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
