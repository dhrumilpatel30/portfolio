import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import MouseEffect from "./components/MouseEffect";
import Projects from "./components/Projects";
import ThemeToggle from "./components/ThemeToggle";
// Add type declaration for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const App = () => {
  return (
    <div className="shiny h-full dark:bg-[#100e05] dark:text-[#ccc8c1] bg-red">
      <div className="body-full">
        <ThemeToggle />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
      <MouseEffect />
    </div>
  );
};

export default App;
