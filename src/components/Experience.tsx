const Experience = () => {
  return (
    <section id="experience" className="flex">
      <div className="container">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="mt-6 grid gap-4">
          <div className="bg-background-secondary-light dark:bg-background-secondary-dark p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold pb-3">MasterCard</h3>
            <div className="experience-card">
              <div>
                <p>Software engineering intern</p>
                <p>Spring boot, React, Oracle, Redux, PCF</p>
              </div>
              <div className="left-side">
                <p>May 2024 to July 2024</p>
                <p>Vadodara, Gujarat</p>
              </div>
            </div>
            <div className="small-text">
              <ul className="list-disc mt-5 ms-5">
                <li>
                  Developed a <strong>subscription management portal</strong>{" "}
                  for the product owners in organization.
                </li>
                <li>
                  Created an innovative solution for{" "}
                  <strong>automating redundant code</strong> creation within the
                  project, significantly improving development efficiency and
                  consistency.
                </li>
                <li>
                  Implemented diverse{" "}
                  <strong>automation testing techniques</strong>, including
                  functional and unit tests, for{" "}
                  <strong>100% line and conditional coverage</strong> on code
                  logic, significantly improving overall product
                  maintainability.
                </li>
                <li>
                  Utilized tools like <strong>PCF</strong> for seamless cloud
                  deployment,
                  <strong>Confluence</strong> for effective documentation, and{" "}
                  <strong>SonarQube</strong>
                  to continuously monitor and ensure high code quality
                  throughout the development process.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-4">
          <div className="bg-background-secondary-light dark:bg-background-secondary-dark p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold pb-3">Krewbee</h3>
            <div className="experience-card">
              <div>
                <p>Backend engineer</p>
                <p>Dotnet APIs, Docker, Postgres, Azure</p>
              </div>
              <div className="left-side">
                <p>December 2023 to April 2024</p>
                <p>Remote</p>
              </div>
            </div>
            <div className="small-text">
              <ul className="list-disc mt-5 ms-5">
                <li>
                  Developed a <strong>SaaS-based hostel management</strong> back
                  end, leveraging <strong>.NET API</strong>
                  to create RESTful APIs within a microservices architecture,
                  and containerized the services using <strong>Docker</strong>.
                </li>
                <li>
                  Engineered and deployed <strong>eight microservices</strong>{" "}
                  following the <strong>CQRS pattern</strong>, improving
                  scalability, maintainability, and reusability by distributing
                  the project into manageable components.
                </li>
                <li>
                  Mastered unit testing with <strong>xUnit</strong>, for robust
                  code through various testing strategies.
                </li>
                <li>
                  Enhanced project management skills through effective use of{" "}
                  <strong>Jira</strong> and
                  <strong>Confluence</strong>, and refined Git expertise to
                  streamline version control and collaboration.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
