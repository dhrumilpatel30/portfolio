import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);

    // Apply initial theme
    if (prefersDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="fixed top-4 right-4">
      <button onClick={toggleTheme} className="p-2 rounded-full text-2xl">
        <span className={isDarkMode ? "" : "hidden"}>☽</span>
        <span className={isDarkMode ? "hidden" : ""}>☀</span>
      </button>
    </div>
  );
};

export default ThemeToggle;
