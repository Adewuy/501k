// src/components/CartPage.js
import React, { useState } from "react";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleReduce = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
        <div className="flex items-center mb-4">
          <p className="text-lg font-bold mr-4">Product Name</p>
          <button
            onClick={handleReduce}
            className="bg-gray-300 text-gray-700 px-2 py-1 rounded-md"
          >
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button
            onClick={handleAdd}
            className="bg-gray-300 text-gray-700 px-2 py-1 rounded-md"
          >
            +
          </button>
          <p className="text-lg font-bold ml-4">$99.99</p>
        </div>
        <p className="text-xl font-bold text-green-600">
          Total: ${(quantity * 99.99).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartPage;
