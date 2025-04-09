// src/App.jsx
import React, { useState, useEffect } from "react";
import Filters from "./components/Filters";
import CarList from "./components/CarList";
import Wishlist from "./components/Wishlist";
import DarkModeToggle from "./components/DarkModeToggle";


const App = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filters, setFilters] = useState({
    brand: "",
    fuelType: "",
    seats: "",
    minPrice: "",
    maxPrice: "",
  });
  const [wishlist, setWishlist] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Load JSON
  useEffect(() => {
    fetch("/cars.json")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setFilteredCars(data);
      });
  }, []);

  // Load wishlist from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) setWishlist(JSON.parse(saved));
  }, []);

  // Save wishlist to localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Filter cars
  useEffect(() => {
    const { brand, fuelType, seats, minPrice, maxPrice } = filters;
    let filtered = [...cars];

    if (brand) filtered = filtered.filter((car) =>
      car.brand.toLowerCase().includes(brand.toLowerCase())
    );
    if (fuelType) filtered = filtered.filter((car) =>
      car.fuelType === fuelType
    );
    if (seats) filtered = filtered.filter((car) =>
      car.seats === parseInt(seats)
    );
    if (minPrice) filtered = filtered.filter((car) =>
      car.price >= parseInt(minPrice)
    );
    if (maxPrice) filtered = filtered.filter((car) =>
      car.price <= parseInt(maxPrice)
    );

    setFilteredCars(filtered);
  }, [filters, cars]);

  const toggleWishlist = (car) => {
    const exists = wishlist.find((c) => c.id === car.id);
    if (exists) {
      setWishlist(wishlist.filter((c) => c.id !== car.id));
    } else {
      setWishlist([...wishlist, car]);
    }
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} overflow-x-hidden`}>
      <div className="max-w-5xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">🚗 Car Finder App</h1>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <Filters filters={filters} setFilters={setFilters} />
        <CarList cars={filteredCars.slice(0, 10)} wishlist={wishlist} toggleWishlist={toggleWishlist} />
        <Wishlist wishlist={wishlist} toggleWishlist={toggleWishlist} />
      </div>
    </div>
  );
};

export default App;
