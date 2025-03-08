const Experience = () => {
  return (
    <section id="experience" className="flex">
      <div className="container">
        <div className="text-4xl font-bold">Experience</div>
        <div className="mt-6 grid gap-4">
          <div>
            <div className="text-3xl font-semibold pb-3">Pleasantbiz</div>
            <div className="experience-card">
              <div>
                <p>Software Engineering Intern</p>
                <p>
                  Frappe, Python, MariaDB, Docker, Azure, Blob storage, Restic
                </p>
              </div>
              <div className="left-side">
                <p>Sep 2023 - Present (7 months)</p>
                <p>Remote</p>
              </div>
            </div>
            <div className="small-text">
              <ul className="list-disc mt-5 ms-5">
                <li>
                  Designed and created company wide{" "}
                  <strong>authentication server</strong> with Ory Kratos, Keto
                  and OAuthKeeper.
                </li>
                <li>
                  Self hosted <strong>ERPNext software</strong> with multi
                  company setup written in Frappe framework in azure using Azure
                  container apps and Github Actions.
                </li>
                <li>
                  Added additional features for custom use case like{" "}
                  <strong>hostel management</strong> in self hosted ERPNext.
                </li>
                <li>
                  Created <strong>automated backups</strong> with Restic in
                  Azure blob containers, Scheduled with cron jobs.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-4">
          <div>
            <div className="text-3xl font-semibold pb-3">MasterCard</div>
            <div className="experience-card">
              <div>
                <p>Software Engineering Intern</p>
                <p>Spring boot, React, PCF, Oracle, OpenAPI, Redux</p>
              </div>
              <div className="left-side">
                <p>May 2023 - July 2023 (2 months)</p>
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
                  deployment, <strong>Confluence</strong> for effective
                  documentation, and <strong>SonarQube</strong> to continuously
                  monitor and ensure high code quality throughout the
                  development process.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-4">
          <div>
            <div className="text-3xl font-semibold pb-3">KrewBee</div>
            <div className="experience-card">
              <div>
                <p>Software Engineer, Backend (Part-time)</p>
                <p>Dotnet, Postgres, Docker, Azure, Blob storage</p>
              </div>
              <div className="left-side">
                <p>Dec 2022 - April 2023 (5 months)</p>
                <p>Remote</p>
              </div>
            </div>
            <div className="small-text">
              <ul className="list-disc mt-5 ms-5">
                <li>
                  Developed a <strong>SaaS based hostel management</strong> back
                  end, leveraging <strong>.NET API</strong> to create RESTful
                  APIs within a micro-services architecture, and containerized
                  the services using <strong>Docker</strong> for deployment.
                </li>
                <li>
                  Architectured and deployed{" "}
                  <strong>eight micro-services</strong> following the{" "}
                  <strong>CQRS pattern</strong>, improving scalability,
                  maintainability, and reusability by distributing the project
                  into manageable components.
                </li>
                <li>
                  Mastered unit testing with <strong>xUnit</strong>, for robust
                  code through various testing strategies.
                </li>
                <li>
                  Enhanced project management skills through effective use of{" "}
                  <strong>Jira</strong> and <strong>Confluence</strong>, and
                  refined <strong>Git</strong>
                  expertise to streamline version control and collaboration.
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
