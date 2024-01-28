// src/components/ProductPage.js
import React from "react";

const ProductPage = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Product Name</h2>
        <p className="text-gray-600 mb-4">Product description goes here.</p>
        <p className="text-xl font-bold text-green-600">$99.99</p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
