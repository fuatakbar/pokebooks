import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-4 bg-gray-200 text-gray-700">
      <p>
        &copy; {new Date().getFullYear()} PokeBooks by Fuat Akbar. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
