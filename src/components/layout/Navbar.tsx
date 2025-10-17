"use client";

import React, { useState, useEffect } from "react";
import { navLinks } from "@/constants/navbar";
import Link from "next/link";
import Button from "../ui/Button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Cross1Icon, TextAlignLeftIcon } from "@radix-ui/react-icons";
import { HiExternalLink } from "react-icons/hi";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const controlNavbar = (): void => {
      const currentScrollY = window.scrollY;

      // Show navbar when at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding navbar
      }
      // Show navbar when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", controlNavbar, { passive: true });

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <nav
        className={`
          bg-primaryWhite fixed font-primaryFont left-1/2 transform -translate-x-1/2 z-50
          py-3 flex justify-between items-center px-4 sm:px-6 lg:px-6 
          border border-gray-200
          transition-all duration-300 ease-in-out
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
          w-full backdrop-blur-sm hidden md:flex
        `}
      >
        {/* Brand logo */}
        <Link
          href="/"
          className="font-black tracking-tighter text-base flex items-center justify-center gap-2"
        >
          <Image
            src="/tyil_logo.svg"
            alt="TYIL Logo"
            priority
            width={40}
            height={40}
            className="w-auto h-auto"
          />
        </Link>

        {/* Desktop navlinks */}
        <div className="flex justify-between items-center gap-3">
          {navLinks.map(link => {
            const isActive = pathname === link.href;

            return (
              <Link
                href={link.href}
                key={link.label}
                className={`mx-2 text-xs relative transition-all duration-300 ease-out ${
                  isActive
                    ? "text-white font-bold rounded-full bg-primaryRed px-8 py-3"
                    : "font-normal hover:text-primaryRed"
                }`}
              >
                <span
                  className={`transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-90"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Desktop waitList button */}
        <Button
          primaryText="Join the WaitList"
          hoverText="Join the WaitList"
          icon={HiExternalLink}
          iconPosition="left"
          onClick={() => alert("Button Clicked!")}
          className="gap-2"
          aria-label="WaitList button"
        />
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`
          bg-primaryWhite backdrop-blur-md fixed w-full z-50
          py-4 px-4 flex justify-between items-center
          border border-gray-200/20
          transition-all duration-300 ease-in-out
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
          backdrop-blur-sm
          md:hidden
        `}
      >
        {/* Mobile Brand logo */}
        <Link
          href="/"
          className="font-black tracking-tighter text-base flex items-center justify-center gap-2"
          onClick={handleLinkClick}
        >
          <Image
            src="/tyil_logo.svg"
            alt="TYIL Logo"
            priority
            width={32}
            height={32}
            className="w-auto h-auto"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="p-2 cursor-pointer rounded-lg text-primaryBlack hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <Cross1Icon className="w-8 h-8" />
          ) : (
            <TextAlignLeftIcon className="w-8 h-8" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/60 backdrop-blur-sm
          transition-opacity duration-300 ease-in-out
          md:hidden
          ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`
          fixed top-0 h-screen w-full z-50
          bg-primaryRed transform transition-transform duration-300 ease-in-out
          md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between p-8 border-b border-white/50">
          <button
            onClick={toggleMobileMenu}
            className="p-2 cursor-pointer right-0 rounded-lg text-primaryWhite hover:bg-red-700 transition-colors duration-200"
            aria-label="Close mobile menu"
          >
            <Cross1Icon className="w-8 h-8" />
          </button>
        </div>

        {/* Mobile navigation links */}
        <div className="flex flex-col space-y-3">
          {navLinks.map(link => {
            const isActive = pathname === link.href;

            return (
              <Link
                href={link.href}
                key={link.label}
                onClick={handleLinkClick}
                className={`
                   py-5 px-8 text-base transition-all font-mono duration-200 ease-out border-b border-b-white/30
                  ${
                    isActive
                      ? "font-medium hover:text-white/70 text-white"
                      : "text-primaryWhite hover:text-white/70"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
