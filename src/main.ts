import "./App.css";

// Import your interactive components
import { ThemeToggle } from "./scripts/theme-toggle";
import { MouseEffect } from "./scripts/mouse-effect";
import { ContactFeatures } from "./scripts/contact";

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new ThemeToggle();
  new MouseEffect();
  new ContactFeatures();
});
