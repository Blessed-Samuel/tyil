"use client";

import React, { useState, useEffect } from "react";
import { navLinks } from "@/constants/navbar";
import Link from "next/link";
import Button from "../ui/Button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PiHandHeartFill } from "react-icons/pi";
import { HiMenuAlt1, HiX } from "react-icons/hi";

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
          bg-primaryWhite fixed top-6 left-1/2 transform -translate-x-1/2 z-50
          py-3 flex justify-between rounded-full items-center px-4 sm:px-6 lg:px-6 
          border border-gray-200 dark:bg-primaryBlack dark:border-gray-700
          transition-all duration-300 ease-in-out
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
          w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] lg:w-[calc(100%-14rem)] max-w-5xl
          backdrop-blur-sm
          hidden md:flex
        `}
      >
        {/* Brand logo */}
        <Link
          href="/"
          className="font-black tracking-tighter text-base flex items-center justify-center gap-2"
        >
          <Image
            src="/tyil-logo.svg"
            alt="TYIL Logo"
            priority
            width={40}
            height={40}
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
                className={`mx-2 text-sm font-normal relative transition-all duration-300 ease-out ${
                  isActive
                    ? "text-white rounded-full font-black bg-primaryBlack px-4 py-2 dark:bg-white dark:text-primaryBlack"
                    : "text-primaryBlack/90 hover:text-gray-900 dark:text-primaryWhite/70 dark:hover:text-white"
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

        {/* Desktop Donate button */}
        <Button
          primaryText="Donate Now"
          hoverText="Donate Now"
          icon={PiHandHeartFill}
          iconPosition="left"
          onClick={() => alert("Button Clicked!")}
          className="gap-2"
          aria-label="Donation button"
        />
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`
          bg-primaryWhite backdrop-blur-md fixed top-4 left-4 right-4 z-50
          py-2 px-4 flex justify-between items-center rounded-full
          border border-gray-200/20 dark:bg-primaryBlack dark:border-gray-700
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
            src="/tyil-logo.svg"
            alt="TYIL Logo"
            priority
            width={32}
            height={32}
          />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="p-2 cursor-pointer rounded-lg text-primaryBlack dark:text-primaryWhite hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenuAlt1 className="w-6 h-6" />
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
          fixed top-0 right-0 h-full w-98 max-w-[90vw] z-50
          bg-primaryWhite dark:bg-primaryBlack
          border-l border-gray-200 dark:border-gray-700
          transform transition-transform duration-300 ease-in-out
          md:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <Link
            href="/"
            className="font-black tracking-tighter text-lg flex items-center gap-2"
            onClick={handleLinkClick}
          >
            {/* <Image
              src="/tyil-logo.svg"
              alt="TYIL Logo"
              priority
              width={32}
              height={32}
            /> */}
            {/* TYIL */}
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="p-2 cursor-pointer rounded-lg text-primaryBlack dark:text-primaryWhite hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Close mobile menu"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile navigation links */}
        <div className="flex flex-col p-6 space-y-1">
          {navLinks.map(link => {
            const isActive = pathname === link.href;

            return (
              <Link
                href={link.href}
                key={link.label}
                onClick={handleLinkClick}
                className={`
                  px-4 py-3 rounded-full text-base font-medium
                  transition-all duration-200 ease-out
                  ${
                    isActive
                      ? "bg-primaryBlack text-white dark:bg-white dark:text-primaryBlack font-bold"
                      : "text-primaryBlack/90 hover:text-gray-900 hover:bg-gray-50 dark:text-primaryWhite/70 dark:hover:text-white dark:hover:bg-gray-800"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile donate button */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700 mt-auto">
          <Button
            primaryText="Donate Now"
            hoverText="Donate Now"
            icon={PiHandHeartFill}
            iconPosition="left"
            onClick={() => {
              alert("Button Clicked!");
              setIsMobileMenuOpen(false);
            }}
            className="w-full gap-2 justify-center"
            aria-label="Donation button"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
