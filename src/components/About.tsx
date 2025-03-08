const About = () => {
  return (
    <section id="about" className="flex">
      <div className="container flex space-x-1 about-section">
        <div className="block flex-1 self-center">
          <div className="heading-text font-bold">Dhrumil Patel</div>
        </div>
        <div className="flex-1 sm:ps-24 heading-section">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="mt-4 indent-8 text-xl">
            I'm a passionate and innovative developer focused on building
            impactful solutions...blah blah blah
          </p>
          <p className="mt-4 text-xl indent-8">
            Nothing special, see below you may find something!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
