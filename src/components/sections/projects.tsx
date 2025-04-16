import { PROJECTS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="scroll-mt-24"
    >
      <div className="mb-10 flex flex-col gap-2 md:flex-row md:justify-between">
        <div>
          <h2 id="portfolio-heading" className="mb-2 text-4xl font-semibold">
            Some of our projects
          </h2>
        </div>
        <p className="ml-auto w-full text-right text-neutral-400 md:w-1/2">
          Explore some of our recent work and see how we deliver impactful
          solutions that drive success for our clients.
        </p>
      </div>
      <div
        className="grid grid-cols-3 gap-10"
        role="region"
        aria-roledescription="carousel"
        aria-label="Project Gallery"
        aria-live="polite"
      >
        {PROJECTS.map((project) => (
          <Link
            href={project.link}
            key={project.title}
            className="group aspect-square transition-all hover:scale-105"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={500}
              className="border-forge-secondary h-96 overflow-hidden rounded-md border-2 object-cover object-center grayscale-50 transition-all group-hover:shadow-md group-hover:grayscale-0"
            />
            <p className="mt-1 text-center text-lg text-neutral-200 transition-all group-hover:text-white">
              {project.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
