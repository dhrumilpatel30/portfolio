const Education = () => {
  return (
    <section id="education" className="flex">
      <div className="container">
        <div className="text-4xl font-bold">Education</div>
        <div className="mt-6 grid gap-4">
          <div>
            <div className="text-3xl font-semibold pb-2">
              Dharmsinh Desai University
            </div>
            <div className="experience-card">
              <div>
                <p>
                  <strong>Bachelor of Technology</strong> in{" "}
                  <strong>Computer Engineering</strong>
                </p>
                <p>
                  <strong>9.15 CPI</strong>
                </p>
              </div>
              <div className="left-side">
                <p>October 2021 to May 2025</p>
                <p>Nadiad, Gujarat</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-4">
          <div>
            <div className="text-3xl font-semibold pb-2">
              Jawahar Navodaya Vidyalaya
            </div>
            <p>HSC & SSC</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
