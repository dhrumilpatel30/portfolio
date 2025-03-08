const Education = () => {
  return (
    <section id="education" className="flex">
      <div className="container">
        <h2 className="text-3xl font-bold">Education</h2>
        <div className="mt-6 grid gap-4">
          <div className="bg-background-secondary-light dark:bg-background-secondary-dark p-4 rounded-lg shadow-lg text-lg">
            <h3 className="text-2xl font-semibold pb-2">
              Dharmsinh Desai University
            </h3>
            <div className="experience-card">
              <div>
                <p>Bachelor of Technology in Computer Engineering</p>
                <p>9.08 CPI</p>
              </div>
              <div className="left-side">
                <p>October 2021 to May 2025</p>
                <p>Nadiad, Gujarat</p>
              </div>
            </div>
            <p>· final year student</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4">
          <div className="bg-background-secondary-light dark:bg-background-secondary-dark p-4 rounded-lg shadow-lg text-lg">
            <h3 className="text-2xl font-semibold pb-2">
              Jawahar Navodaya Vidyalaya
            </h3>
            <p>HSC & SSC</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
