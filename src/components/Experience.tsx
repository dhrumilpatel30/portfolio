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
                <p>Software Engineer (Part-time + Intern)</p>
                <p>
                  <strong>Frappe</strong>, <strong>Python</strong>,{" "}
                  <strong>Azure</strong>, <strong>Ory</strong>,{" "}
                  <strong>Pub-Sub Model</strong>, <strong>Restic</strong>
                </p>
              </div>
              <div className="left-side">
                <p>Sep 2024 - Apr 2025 (8 months)</p>
                <p>Remote</p>
              </div>
            </div>
            <div className="small-text">
              <ul className="list-disc mt-5 ms-5">
                <li>
                  Managed and deployed infrastructure across{" "}
                  <strong>Azure</strong> using <strong>Container Apps</strong>,{" "}
                  <strong>Blob Storage</strong>, <strong>Service Bus</strong>,{" "}
                  <strong>Functions</strong>, <strong>VMs</strong>, and
                  maintained <strong>dev</strong>, <strong>UAT</strong>, and{" "}
                  <strong>production</strong> environments.
                </li>
                <li>
                  Self-hosted and extended <strong>ERPNext</strong> with{" "}
                  <strong>multi-company setup</strong>, including custom modules
                  like <strong>hostel management</strong>, deployed via{" "}
                  <strong>GitHub Actions</strong> and <strong>Docker</strong>.
                </li>
                <li>
                  Integrated <strong>Razorpay</strong> and{" "}
                  <strong>CCAvenue</strong> payment gateways; built{" "}
                  <strong>automation flows</strong> for tasks like invoice
                  generation.
                </li>
                <li>
                  Developed a <strong>publisher-subscriber system</strong> on{" "}
                  <strong>Azure Service Bus</strong> with a custom Frappe app
                  for publishing messages with{" "}
                  <strong>dynamic message templates</strong> and rendering
                  logic.
                </li>
                <li>
                  Designed and implemented an{" "}
                  <strong>authentication and authorization network</strong>{" "}
                  using <strong>Ory Kratos</strong>, <strong>Keto</strong>, and{" "}
                  <strong>OAuthKeeper</strong> with{" "}
                  <strong>role-based access control</strong>.
                </li>
                <li>
                  Automated and scheduled <strong>encrypted database</strong>{" "}
                  and file backups via <strong>Restic</strong> to{" "}
                  <strong>Azure Blob Storage</strong> using cron jobs.
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
                <p>
                  <strong>Spring boot</strong>, <strong>React</strong>,{" "}
                  <strong>PCF</strong>, <strong>Oracle</strong>,{" "}
                  <strong>OpenAPI</strong>, <strong>Redux</strong>
                </p>
              </div>
              <div className="left-side">
                <p>May 2024 - July 2024 (2 months)</p>
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
                <p>Software Engineer, Backend</p>
                <p>
                  <strong>Dotnet</strong>, <strong>Postgres</strong>,{" "}
                  <strong>Docker</strong>, <strong>Azure</strong>,{" "}
                  <strong>Blob storage</strong>
                </p>
              </div>
              <div className="left-side">
                <p>Dec 2023 - April 2024 (5 months)</p>
                <p>Remote (Part-time)</p>
              </div>
            </div>
            <div className="small-text">
              <ul className="list-disc mt-5 ms-5">
                <li>
                  Developed a <strong>SaaS-based hostel management</strong>{" "}
                  backend, leveraging <strong>.NET API</strong> to create{" "}
                  <strong>RESTful APIs</strong> within a{" "}
                  <strong>microservices architecture</strong>, and containerized
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
                  Mastered unit testing with <strong>xUnit</strong> to ensure
                  robust code through various testing strategies.
                </li>
                <li>
                  Enhanced project management skills through effective use of{" "}
                  <strong>Jira</strong> and <strong>Confluence</strong>, and
                  refined <strong>Git</strong> expertise to streamline version
                  control and collaboration.
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
