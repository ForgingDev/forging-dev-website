"use client";

import { Button } from "@/components/ui/button";
import NavbarLink from "@/components/ui/navbar/navbar-link";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon, CodeIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { useCallback, useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1024 && isMenuOpen) {
      setIsMenuOpen(false);

      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const newState = !prev;

      document.body.style.overflow = newState ? "hidden" : "auto";

      return newState;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Determine if navbar should have elevated style
  const isElevated = scrollPosition > 20;

  return (
    <>
      <Script
        id="navbar-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            name: ["Home", "About", "Services", "Portfolio", "Contact"],
            url: ["/", "/#about", "/#services", "/#portfolio", "/#contact"],
          }),
        }}
      />

      <header className="fixed top-0 right-0 left-0 z-40 w-full">
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={navVariants}
          className={cn(
            "w-full transition-all",
            !isMenuOpen && "backdrop-blur-lg",
            isElevated ? "py-3" : "py-5",
          )}
          style={{
            borderBottom: isElevated
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "none",
            boxShadow: isElevated ? "0 4px 30px rgba(0, 0, 0, 0.3)" : "none",
          }}
          aria-label="Main Navigation"
        >
          <motion.div
            className="absolute inset-0 -z-10 transition-all"
            animate={{
              opacity: isElevated ? 1 : 0,
              background: isElevated
                ? "linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(13, 6, 30, 0.75))"
                : "transparent",
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Accent line */}
          <motion.div
            className="from-forge-secondary/70 absolute bottom-0 left-0 h-[1px] bg-gradient-to-r via-blue-500/50 to-transparent"
            animate={{
              width: isElevated ? "100%" : "0%",
            }}
            transition={{ duration: 0.6 }}
          />

          <div className="container mx-auto flex items-center justify-between px-4">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="z-50 flex items-center gap-2"
            >
              <Link
                href="/"
                className="flex items-center gap-2"
                aria-label="Forging Dev - Home"
              >
                <div className="from-forge-secondary/80 flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br to-purple-500/80 shadow-lg">
                  <CodeIcon className="h-4 w-4 text-white" />
                </div>
                <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-xl font-bold text-transparent">
                  Forging Dev
                </span>
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="z-50 lg:hidden"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-colors hover:bg-white/20">
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close-icon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="size-5 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu-icon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="size-5 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>

            {/* Desktop navigation */}
            <motion.div
              variants={itemVariants}
              className="hidden items-center gap-8 lg:flex"
              role="menubar"
              aria-label="Desktop navigation"
            >
              <motion.div variants={itemVariants}>
                <NavbarLink href="/" role="menuitem">
                  Home
                </NavbarLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavbarLink href="/#about" role="menuitem">
                  About
                </NavbarLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavbarLink href="/#services" role="menuitem">
                  Services
                </NavbarLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavbarLink href="/#portfolio" role="menuitem">
                  Portfolio
                </NavbarLink>
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="button"
                  asChild
                  className="from-forge-secondary shadow-forge-secondary/20 hover:shadow-forge-secondary/40 hover:from-forge-secondary relative border-none bg-gradient-to-r to-blue-600 px-7 py-6 text-white shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:to-blue-600"
                >
                  <Link
                    href="/#contact"
                    role="menuitem"
                    aria-label="Contact us"
                    className="relative z-10 flex items-center"
                  >
                    Let&apos;s Talk{" "}
                    <ArrowRightIcon
                      className="ml-2 size-4"
                      aria-hidden="true"
                    />
                    <span className="absolute inset-0 rounded-md bg-black opacity-0 transition-opacity duration-300 hover:opacity-20"></span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile menu overlay */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  id="mobile-menu"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={mobileMenuVariants}
                  className="fixed inset-0 h-screen w-screen bg-gradient-to-b from-black/90 to-purple-950/90 backdrop-blur-md lg:hidden"
                  aria-hidden={!isMenuOpen}
                >
                  <motion.div
                    className="flex h-full flex-col items-center justify-center gap-8 p-6"
                    role="menu"
                    aria-label="Mobile navigation"
                  >
                    <motion.div
                      variants={mobileItemVariants}
                      whileTap={{ scale: 0.95 }}
                      className="relative"
                    >
                      <NavbarLink
                        href="/"
                        role="menuitem"
                        className="text-2xl font-medium"
                      >
                        Home
                      </NavbarLink>
                      <motion.div
                        className="bg-forge-secondary absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2"
                        whileHover={{ width: "80%" }}
                      />
                    </motion.div>
                    <motion.div
                      variants={mobileItemVariants}
                      whileTap={{ scale: 0.95 }}
                      className="relative"
                    >
                      <NavbarLink
                        href="/#about"
                        role="menuitem"
                        className="text-2xl font-medium"
                      >
                        About
                      </NavbarLink>
                      <motion.div
                        className="bg-forge-secondary absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2"
                        whileHover={{ width: "80%" }}
                      />
                    </motion.div>
                    <motion.div
                      variants={mobileItemVariants}
                      whileTap={{ scale: 0.95 }}
                      className="relative"
                    >
                      <NavbarLink
                        href="/#services"
                        role="menuitem"
                        className="text-2xl font-medium"
                      >
                        Services
                      </NavbarLink>
                      <motion.div
                        className="bg-forge-secondary absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2"
                        whileHover={{ width: "80%" }}
                      />
                    </motion.div>
                    <motion.div
                      variants={mobileItemVariants}
                      whileTap={{ scale: 0.95 }}
                      className="relative"
                    >
                      <NavbarLink
                        href="/#portfolio"
                        role="menuitem"
                        className="text-2xl font-medium"
                      >
                        Portfolio
                      </NavbarLink>
                      <motion.div
                        className="bg-forge-secondary absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2"
                        whileHover={{ width: "80%" }}
                      />
                    </motion.div>
                    <motion.div
                      variants={mobileItemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4"
                    >
                      <Button
                        type="button"
                        asChild
                        className="from-forge-secondary shadow-forge-secondary/20 hover:shadow-forge-secondary/40 relative border-none bg-gradient-to-r to-blue-600 px-8 py-6 text-lg text-white shadow-lg"
                      >
                        <Link
                          href="/#contact"
                          role="menuitem"
                          aria-label="Contact us"
                          className="relative z-10 flex items-center"
                        >
                          Let&apos;s Talk{" "}
                          <ArrowRightIcon
                            className="ml-2 size-4"
                            aria-hidden="true"
                          />
                          <span className="absolute inset-0 rounded-md bg-black opacity-0 transition-opacity duration-300 hover:opacity-20"></span>
                        </Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      </header>
    </>
  );
};

export default Navbar;
