import "./App.css";

// Import your interactive components
import { ThemeToggle } from "./scripts/theme-toggle";
import { MouseEffect } from "./scripts/mouse-effect";
import { ContactFeatures } from "./scripts/contact";

// Initialize when DOM is ready
function initComponents() {
  new ThemeToggle();
  new MouseEffect();
  new ContactFeatures();
}

document.addEventListener('DOMContentLoaded', () => {
  // Check if all fonts are loaded
  document.fonts.ready.then(() => {
    document.body.classList.add('fonts-loaded'); // CHANGED to document.body
    console.log('All CSS-specified fonts are loaded.');
    initComponents();
  }).catch(error => {
    console.error('Font loading error or timeout:', error);
    // Ensure content is shown even if fonts fail/timeout
    document.body.classList.add('fonts-loaded'); // CHANGED to document.body
    initComponents();
  });
});