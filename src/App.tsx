import { useEffect } from "react";
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
  useEffect(() => {
    // Add Google Analytics
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-98VLT31M6C";
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", "G-98VLT31M6C");

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
