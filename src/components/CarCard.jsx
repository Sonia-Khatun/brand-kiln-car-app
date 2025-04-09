// src/components/CarCard.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CarCard = ({ car, isWishlisted, toggleWishlist }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="border p-4 rounded shadow-md hover:shadow-lg transition"
    >
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2">{car.name}</h2>
      <p>{car.brand} | {car.fuelType} | {car.seats} Seats</p>
      <p className="font-semibold">₹{car.price.toLocaleString()}</p>
      <button
        onClick={() => toggleWishlist(car)}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
      >
        {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
      </button>
    </div>
  );
};

export default CarCard;
