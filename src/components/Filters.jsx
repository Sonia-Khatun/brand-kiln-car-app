// src/components/Filters.jsx
import React from "react";

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
      <input name="brand" value={filters.brand} onChange={handleChange} placeholder="Brand" className="p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white" />
      <select name="fuelType" value={filters.fuelType} onChange={handleChange} className="p-2 border rounded">
        <option value="">Fuel Type</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
      </select>
      <input name="seats" type="number" value={filters.seats} onChange={handleChange} placeholder="Seats" className="p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white" />
      <input name="minPrice" type="number" value={filters.minPrice} onChange={handleChange} placeholder="Min Price" className="p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white" />
      <input name="maxPrice" type="number" value={filters.maxPrice} onChange={handleChange} placeholder="Max Price" className="p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white" />
    </div>
  );
};

export default Filters;
