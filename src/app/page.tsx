import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Process from "@/components/sections/process";
import Projects from "@/components/sections/projects";
import ServiceBadges from "@/components/sections/service-badges";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <ServiceBadges />
      <About />
      <Process />
      <Projects />
      <Contact />
    </main>
  );
};

export default Homepage;
