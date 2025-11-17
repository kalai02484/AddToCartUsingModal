import React, { use, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartModal from "./components/CartModal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch Products from Fake Store API
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Add to Cart Function
  const addToCart = (product) => {
    const isAlreadyInCart = cart.find((item) => item.id === product.id);
    if (isAlreadyInCart) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  // Remove from Cart Function
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-600">
      <Navbar
        cartCount={cart.length}
        onCartClick={() => setIsModalOpen(true)}
      />
      <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      
    </div>
  );
};

export default App;
