import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggler = () => {
  // State to track the current theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Get saved theme from localStorage and apply it
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDarkMode(savedTheme === "dark");
    document.body.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const handleToggle = () => {
    // Toggle the theme
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={handleToggle}
      className="theme-toggler"
      aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDarkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
    </button>
  );
};

export default ThemeToggler;
