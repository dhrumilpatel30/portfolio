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
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4">
          Email:{" "}
          <a
            href="mailto:dhrumil.connect@gmail.com"
            className="text-foreground-secondary-light dark:text-foreground-secondary-dark hover:underline"
          >
            dhrumil.connect@gmail.com
          </a>
        </p>

        <p className="mt-2">
          Resume:{" "}
          <a
            target="_blank"
            href="./resume.pdf"
            className="text-foreground-secondary-light dark:text-foreground-secondary-dark hover:underline"
          >
            View
          </a>{" "}
          or{" "}
          <button
            onClick={handleCopyLink}
            className="text-foreground-secondary-light dark:text-foreground-secondary-dark hover:underline"
          >
            Copy Link
          </button>
          <span
            className={`ml-2 text-green-500 transition-opacity duration-500 ${
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
            className="text-foreground-secondary-light dark:text-foreground-secondary-dark hover:underline"
          >
            @dhrumilpatel30
          </a>
        </p>
        <p className="mt-2">
          GitHub:{" "}
          <a
            target="_blank"
            href="https://github.com/dhrumilpatel30/"
            className="text-foreground-secondary-light dark:text-foreground-secondary-dark hover:underline"
          >
            @dhrumilpatel30
          </a>
        </p>
        <p className="mt-2">
          Leetcode:{" "}
          <a
            target="_blank"
            href="https://leetcode.com/dhrumilpatel30/"
            className="text-foreground-secondary-light dark:text-foreground-secondary-dark hover:underline"
          >
            @dhrumilpatel30
          </a>
        </p>
        <p className="mt-2">
          X(Twitter):{" "}
          <a
            target="_blank"
            href="https://x.com/dhrumilpatel30/"
            className="text-foreground-secondary-light dark:text-foreground-secondary-dark hover:underline"
          >
            @dhrumilpatel30
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
