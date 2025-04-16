"use client";

import { Button } from "@/components/ui/button";
import NavbarLink from "@/components/ui/navbar/navbar-link";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isMenuOpen && e.key === "Escape") {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
        menuButtonRef.current?.focus();
      }
    },
    [isMenuOpen],
  );

  // Focus trap for mobile menu
  const handleTabKey = useCallback(
    (e: KeyboardEvent) => {
      if (isMenuOpen && e.key === "Tab" && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll(
          'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    },
    [isMenuOpen],
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keydown", handleTabKey);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keydown", handleTabKey);
    };
  }, [handleScroll, handleKeyDown, handleTabKey]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Auto-focus first element when menu opens
  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      const firstFocusable = menuRef.current.querySelector(
        "a, button",
      ) as HTMLElement;
      if (firstFocusable) {
        setTimeout(() => firstFocusable.focus(), 100);
      }
    }
  }, [isMenuOpen]);

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
        <nav
          className={cn(
            "w-full border-b py-4 transition-all",
            scrollPosition > 20
              ? "border-neutral-700 bg-black/30 shadow-md"
              : "border-transparent bg-transparent",
            !isMenuOpen && "backdrop-blur-lg",
          )}
          aria-label="Main Navigation"
        >
          <div className="container mx-auto flex items-center justify-between px-4">
            <Link
              href="/"
              className="z-50 text-xl font-semibold"
              aria-label="Forging Dev - Home"
            >
              Forging Dev
            </Link>

            {/* Mobile menu button */}
            <button
              ref={menuButtonRef}
              className="focus:ring-primary focus:ring-offset-background z-50 focus:ring-2 focus:ring-offset-2 focus:outline-none lg:hidden"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>

            {/* Desktop navigation */}
            <div
              className="hidden items-center gap-6 lg:flex"
              role="menubar"
              aria-label="Desktop navigation"
            >
              <NavbarLink href="/" role="menuitem">
                Home
              </NavbarLink>
              <NavbarLink href="/#about" role="menuitem">
                About
              </NavbarLink>
              <NavbarLink href="/#services" role="menuitem">
                Services
              </NavbarLink>
              <NavbarLink href="/#portfolio" role="menuitem">
                Portfolio
              </NavbarLink>
              <Button type="button" asChild>
                <Link href="/#contact" role="menuitem" aria-label="Contact us">
                  Let&apos;s Talk{" "}
                  <ArrowRightIcon className="ml-1 size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            {/* Mobile menu overlay */}
            <div
              id="mobile-menu"
              ref={menuRef}
              className={cn(
                "fixed inset-0 h-screen w-screen bg-black/80 backdrop-blur-md transition-all lg:hidden",
                isMenuOpen ? "visible opacity-100" : "invisible opacity-0",
              )}
              aria-hidden={!isMenuOpen}
            >
              <div
                className="flex h-full flex-col items-center justify-center gap-8 p-6"
                role="menu"
                aria-label="Mobile navigation"
              >
                <NavbarLink href="/" role="menuitem">
                  Home
                </NavbarLink>
                <NavbarLink href="/#about" role="menuitem">
                  About
                </NavbarLink>
                <NavbarLink href="/#services" role="menuitem">
                  Services
                </NavbarLink>
                <NavbarLink href="/#portfolio" role="menuitem">
                  Portfolio
                </NavbarLink>
                <Button type="button" asChild>
                  <Link
                    href="/#contact"
                    role="menuitem"
                    aria-label="Contact us"
                  >
                    Let&apos;s Talk{" "}
                    <ArrowRightIcon
                      className="ml-1 size-4"
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
