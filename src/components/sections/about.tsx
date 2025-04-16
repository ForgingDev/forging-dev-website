const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24"
    >
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        <h2 id="about-heading" className="mb-4 text-4xl font-semibold md:mb-0">
          About Us
        </h2>
        <div className="md:w-2/3">
          <p className="mb-12 text-justify text-neutral-400">
            At Forging Dev, we specialize in delivering top-tier services
            designed to meet the unique needs of our clients. With years of
            industry expertise, we offer tailored solutions that drive success
            and growth. Our commitment to quality, customer satisfaction, and
            innovation sets us apart in the industry. Whether you&apos;re
            seeking personalized Software Development or Digital Business
            Growth, we are your trusted partner for reliable, high-quality
            results. We focus on building lasting relationships through
            exceptional service and transparent communication.
          </p>
          <dl
            className="flex flex-col gap-6 md:flex-row md:justify-around md:gap-4"
            aria-label="Company Stats"
          >
            <div className="flex flex-col items-center gap-3">
              <dt className="text-5xl font-semibold">4+</dt>
              <dd className="text-neutral-400">Years of Experience</dd>
            </div>
            <div className="flex flex-col items-center gap-3">
              <dt className="text-5xl font-semibold">6+</dt>
              <dd className="text-neutral-400">Happy Clients</dd>
            </div>
            <div className="flex flex-col items-center gap-3">
              <dt className="text-5xl font-semibold">10+</dt>
              <dd className="text-neutral-400">Projects Completed</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;
