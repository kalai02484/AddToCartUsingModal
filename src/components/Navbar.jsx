import React from "react";

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4 shadow-md">
      <h1 className="text-xl font-bold">Fake Store</h1>
      <button
        onClick={onCartClick}
        className="relative bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold"
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
