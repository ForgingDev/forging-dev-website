import { HeroBackground } from "@/components/sections/hero/hero-background";
import { HeroCtaButtons } from "@/components/sections/hero/hero-cta-buttons";
import { HeroHeading } from "@/components/sections/hero/hero-heading";
import { HeroIllustration } from "@/components/sections/hero/hero-illustration";
import { HeroSocialLinks } from "@/components/sections/hero/hero-social-links";

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[80vh] items-center"
    >
      <HeroBackground />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Left content column */}
          <div className="lg:w-3/5">
            <HeroHeading />
            <HeroCtaButtons />
            <HeroSocialLinks />
          </div>

          {/* Right illustration/mockup */}
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
};

export default Hero;
