// src/components/CarList.jsx
import React from "react";
import CarCard from "./CarCard";

const CarList = ({ cars, wishlist, toggleWishlist }) => {
  if (cars.length === 0) return <p>No cars found 🚫</p>;

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-8">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} isWishlisted={wishlist.some((c) => c.id === car.id)} toggleWishlist={toggleWishlist} />
      ))}
    </div>
  );
};

export default CarList;
