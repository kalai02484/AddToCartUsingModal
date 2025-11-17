import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col hover:scale-105 transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-4 mx-auto"
      />
      <h2 className="text-sm font-semibold line-clamp-2 mb-2">
        {product.title}
      </h2>
      <p className="text-gray-700 font-bold mb-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
