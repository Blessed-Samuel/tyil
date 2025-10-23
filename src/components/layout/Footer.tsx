"use client";

import React from "react";
import Link from "next/link";
import { footerLinks, socialLinks, contactLinks } from "@/constants/footer";
import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import * as Tooltip from "@radix-ui/react-tooltip";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  // Separate socials and Contacts from other links
  const nonSocialLinks = footerLinks.filter(
    links => links.title !== "Socials" && links.title !== "Contacts"
  );
  const socialSection = footerLinks.find(links => links.title === "Socials");
  const contactSection = footerLinks.find(links => links.title === "Contacts");

  return (
    <div className="bg-primaryRed font-primaryFont">
      <footer className="bg-primaryWhite translate-y-1 border-t border-t-gray-200 py-5 text-sm text-primaryBlack">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-14 px-4 sm:px-6 lg:px-4 py-20">
          {/* brand logo */}
          <Image
            src="/tyil_logo.svg"
            alt="tyil-logo"
            width={60}
            height={60}
            priority
            draggable="false"
          />

          {/* Non-social links */}
          {nonSocialLinks.map(links => (
            <div key={links.title}>
              <h4 className="text-primaryBlack font-bold mb-4">
                {links.title}
              </h4>
              <ul className="space-y-2">
                {links.links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-primaryPurple hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* contact link section */}
          {contactSection && (
            <div>
              <h4 className="text-primaryBlack font-bold mb-4">
                {contactSection.title}
              </h4>

              <div className="flex flex-col items-start gap-3 sm:items-start sm:justify-start">
                {/* Email Card */}
                <a
                  href={contactLinks.email.href}
                  className="inline-block px-3 py-1 border border-primaryRed/30 rounded-md text-primaryRed hover:bg-primaryRed/10 transition w-auto text-center"
                >
                  {contactLinks.email.email}
                </a>

                {/* Phone Card */}
                <a
                  href={contactLinks.phoneNumber.href}
                  className="inline-block px-3 py-1 border border-primaryRed/30 rounded-md text-primaryRed hover:bg-primaryRed/10 transition w-auto text-center"
                >
                  {contactLinks.phoneNumber.number}
                </a>
              </div>
            </div>
          )}

          {/* social links section */}
          {socialSection && (
            <div>
              <h4 className="text-primaryBlack font-bold mb-4">
                {socialSection.title}
              </h4>
              <Tooltip.Provider>
                <div className="flex space-x-4">
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <a
                        href={socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="hover:text-primaryRed transition-transform hover:-translate-y-1"
                      >
                        <TwitterLogoIcon className="w-4 h-4" />
                      </a>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        side="top"
                        className="bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md z-50"
                        sideOffset={5}
                      >
                        Twitter
                        <Tooltip.Arrow className="fill-gray-800" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>

                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <a
                        href={socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:text-primaryRed transition-transform hover:-translate-y-1"
                      >
                        <InstagramLogoIcon className="w-4 h-4" />
                      </a>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        side="top"
                        className="bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md z-50"
                        sideOffset={5}
                      >
                        Instagram
                        <Tooltip.Arrow className="fill-gray-800" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>

                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-primaryRed transition-transform hover:-translate-y-1"
                      >
                        <LinkedInLogoIcon className="w-4 h-4" />
                      </a>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        side="top"
                        className="bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md z-50"
                        sideOffset={5}
                      >
                        LinkedIn
                        <Tooltip.Arrow className="fill-gray-800" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>

                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <a
                        href={socialLinks.whatsApp}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="hover:text-primaryRed transition-transform hover:-translate-y-1"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                      </a>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        side="top"
                        className="bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md z-50"
                        sideOffset={5}
                      >
                        WhatsApp
                        <Tooltip.Arrow className="fill-gray-800" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </div>
              </Tooltip.Provider>
            </div>
          )}
        </div>

        <div className="mt-5 border-t border-gray-200 pt-6 font-mono text-center text-xs text-gray-500 px-4">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://tyil.org.ng"
            className="hover:underline font-bold text-primaryRed"
          >
            TYIL
          </a>
          . All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
