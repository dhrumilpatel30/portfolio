import { useEffect } from "react";

const MouseEffect = () => {
  useEffect(() => {
    const overlay = document.querySelector(".overlay") as HTMLElement;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (overlay) {
        overlay.style.setProperty("--x", `${x}px`);
        overlay.style.setProperty("--y", `${y}px`);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="overlay"></div>;
};

export default MouseEffect;
