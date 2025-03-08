const Projects = () => {
  return (
    <section id="projects" className="flex">
      <div className="container">
        <div className="text-4xl font-bold">
          Projects
          <span className="text-lg ps-2 font-medium">
            (More on{" "}
            <a
              className="font-bold hover:underline text-blue-600 dark:text-blue-400"
              target="_blank"
              href="https://github.com/dhrumilpatel30"
            >
              GitHub
            </a>
            )
          </span>
        </div>
        <div className="mt-6 grid gap-4">
          <div>
            <div className="text-3xl font-semibold">
              PuzzlePro
              <a
                className="font-bold text-lg ps-2 hover:underline text-blue-600 dark:text-blue-400"
                target="_blank"
                href="https://github.com/PuzzleproAI"
              >
                (GitHub)
              </a>
            </div>
            <p>Flutter, Python FastAPI, Docker, Azure, CNN, Material UI</p>
            <div className="small-text">
              <ul className="list-disc mt-5 ms-5">
                <li>
                  Developed an all-in-one <strong>Sudoku application</strong>,
                  providing a comprehensive experience with features such as{" "}
                  <strong>Sudoku generation, hints, solutions</strong>, and
                  more.
                </li>
                <li>
                  Implemented a feature for{" "}
                  <strong>scanning Sudoku images</strong>
                  using a <strong>Convolutional Neural Network (CNN)</strong>
                  model, enhancing the application's functionality and accuracy.
                </li>
                <li>
                  Designed an intuitive interface with{" "}
                  <strong>Material UI</strong>, improving user engagement and
                  ease of use for <strong>solving and learning Sudoku</strong>.
                </li>
                <li>
                  Streamlined back-end deployment by containerizing the
                  application with
                  <strong>Docker</strong> and deploying it on{" "}
                  <strong>Azure</strong>, using <strong>CI/CD pipelines</strong>{" "}
                  with GitHub Actions for efficient and automated updates.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
