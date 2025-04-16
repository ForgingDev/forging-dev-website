import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Marquee from "@/components/sections/marquee";
import Process from "@/components/sections/process";
import Projects from "@/components/sections/projects";

const Homepage = () => {
  return (
    <main className="flex flex-col gap-32">
      <Hero />
      <Marquee />
      <About />
      <Process />
      <Projects />
      <Contact />
    </main>
  );
};

export default Homepage;
