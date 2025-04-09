// src/components/DarkModeToggle.jsx
import React from "react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
    onClick={() => setDarkMode(!darkMode)}
    className={`transition px-4 py-2 rounded-full shadow-md font-semibold 
      ${darkMode ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"} 
      hover:scale-105`}
  >
    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
