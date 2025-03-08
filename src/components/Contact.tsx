import { useState } from "react";

const Contact = () => {
  const [copyConfirmation, setCopyConfirmation] = useState(false);

  const handleCopyLink = () => {
    const resumeLink = window.location.origin + "/resume.pdf";
    navigator.clipboard.writeText(resumeLink).then(() => {
      setCopyConfirmation(true);
      setTimeout(() => {
        setCopyConfirmation(false);
      }, 2000);
    });
  };

  return (
    <section id="contact" className="flex">
      <div className="container">
        <div className="text-4xl font-bold">Contact</div>
        <p className="mt-4">
          Email:{" "}
          <a
            href="mailto:dhrumil.connect@gmail.com"
            className="hover:underline"
          >
            dhrumilp063@gmail.com
          </a>
        </p>

        <p className="mt-2">
          GitHub:{" "}
          <a
            target="_blank"
            href="https://github.com/dhrumilpatel30/"
            className="hover:underline"
          >
            @dhrumilpatel30
          </a>
        </p>
        <p className="mt-2">
          Resume:{" "}
          <a target="_blank" href="./resume.pdf" className="hover:underline">
            View
          </a>{" "}
          or{" "}
          <a onClick={handleCopyLink} className="hover:underline">
            Copy Link
          </a>
          <span
            className={`ml-2 transition-opacity duration-500 ${
              copyConfirmation ? "opacity-100" : "opacity-0"
            }`}
          >
            ✓ Copied!
          </span>
        </p>
        <p className="mt-2">
          LinkedIn:{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/dhrumilpatel30/"
            className="hover:underline"
          >
            @dhrumilpatel30
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
