// src/components/Wishlist.jsx
import React from "react";

const Wishlist = ({ wishlist, toggleWishlist }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No cars in wishlist.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-8">
          {wishlist.map((car) => (
            <div key={car.id} className="border p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <p>Brand: {car.brand}</p>
              <p>Price: ₹{car.price.toLocaleString()}</p>
              <button onClick={() => toggleWishlist(car)} className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
