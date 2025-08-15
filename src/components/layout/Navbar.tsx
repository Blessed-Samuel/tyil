"use client";

import React, { useState, useEffect } from "react";
import { navLinks } from "@/constants/navbar";
import Link from "next/link";
import Button from "../ui/Button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PiHandHeartFill } from "react-icons/pi";

const Navbar = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
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

  return (
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
        w-[calc(100%-14rem)] max-w-5xl
        backdrop-blur-sm
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
        {/* TYIL */}
      </Link>

      {/* navlinks */}
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
                  : "text-primaryBlack/70 hover:text-gray-900 dark:text-primaryWhite/70 dark:hover:text-white"
              }`}
            >
              <span
                className={`transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-80"
                }`}
              >
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Donate button */}
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
  );
};

export default Navbar;
