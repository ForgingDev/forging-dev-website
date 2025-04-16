import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";
import {
  FoldersIcon,
  InstagramIcon,
  MailIcon,
  MessageCircleIcon,
  MessageCircleMoreIcon,
} from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section aria-labelledby="hero-title" className="pt-24">
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-medium text-neutral-200" id="hero-subtitle">
          🚀 Elevate Your Business with{" "}
          <span className="text-forge-primary font-semibold">Forging Dev</span>
        </h2>
        <h1 className="text-6xl leading-tight font-semibold" id="hero-title">
          Software Development <br /> We Get It Right
        </h1>
        <p className="mb-14 text-neutral-400">
          We help businesses evolve with modern, high-performance software that
          enhances user experience, <br /> boosts productivity, and drives
          growth. Innovation meets execution, all in one place.
        </p>
      </div>
      <div className="mb-6 flex gap-x-6">
        <Link href="/#contact">
          <Button className="border-forge-primary bg-forge-primary/10 hover:bg-forge-primary/20 text-forge-primary focus:ring-forge-primary border-2 py-6 text-lg focus:ring-2 focus:outline-none">
            Get in Touch
            <MessageCircleMoreIcon
              className="ml-1 size-5"
              role="img"
              aria-label="Get in touch icon"
            />
          </Button>
        </Link>
        <Link href="/#portfolio">
          <Button className="focus:ring-forge-primary border-2 bg-transparent py-6 text-lg hover:bg-transparent focus:ring-2 focus:outline-none">
            Explore our Portfolio
            <FoldersIcon
              className="ml-1 size-5"
              role="img"
              aria-label="Portfolio icon"
            />
          </Button>
        </Link>
      </div>
      <div className="flex gap-x-3">
        <Link
          href={CONTACT_INFO.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="focus:ring-forge-primary rounded-md focus:ring-2 focus:outline-none"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircleIcon
            className="hover:text-forge-primary size-8 cursor-pointer rounded-md p-1.5 text-neutral-300 shadow-inner shadow-neutral-700 transition-all hover:border-transparent"
            role="img"
            aria-label="WhatsApp chat"
          />
        </Link>
        <Link
          href={`mailto:${CONTACT_INFO.email}`}
          className="focus:ring-forge-primary rounded-md focus:ring-2 focus:outline-none"
          aria-label="Email us"
        >
          <MailIcon
            className="hover:text-forge-primary size-8 cursor-pointer rounded-md p-1.5 text-neutral-300 shadow-inner shadow-neutral-700 transition-all hover:border-transparent"
            role="img"
            aria-label="Email"
          />
        </Link>

        <Link
          href={CONTACT_INFO.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="focus:ring-forge-primary rounded-md focus:ring-2 focus:outline-none"
          aria-label="Visit our Instagram"
        >
          <InstagramIcon
            className="hover:text-forge-primary size-8 cursor-pointer rounded-md p-1.5 text-neutral-300 shadow-inner shadow-neutral-700 transition-all hover:border-transparent"
            role="img"
            aria-label="Instagram"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
