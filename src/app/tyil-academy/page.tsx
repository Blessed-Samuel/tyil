"use client";

import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import { leadquestHeroContent } from "@/constants/hero";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { BookOpen, Users, Trophy, Sparkles, BellDot } from "lucide-react";

const TyilAcademy = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set launch date to January 1, 2030
  const launchDate = new Date("2030-01-01T00:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    // Replace with Google Apps Script Web App URL
    const SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      setMessage("✓ Thank you! You've been added to our waitlist.");
      setEmail("");
    } catch (error) {
      setMessage("✗ Something went wrong. Please try again.");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Expert-led courses designed for real-world impact",
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Connect with fellow changemakers across Africa",
    },
    {
      icon: Trophy,
      title: "Certifications",
      description: "Earn recognized credentials upon completion",
    },
  ];

  return (
    <section className="font-primaryFont">
      <Hero
        title={leadquestHeroContent.title as string}
        description={leadquestHeroContent.description as string}
      />

      {/* Coming Soon Section */}
      <Container>
        <div className="py-20 px-4">
          {/* Main Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              custom={0}
              variants={fadeIn}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-50 rounded-full"
            >
              <Sparkles className="w-5 h-5 text-primaryRed" />
              <span className="text-primaryRed font-semibold text-sm">
                Launching in 2030
              </span>
            </motion.div>

            <motion.h2
              custom={1}
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
            >
              TYIL Academy is <br />
              <span className="text-primaryRed italic font-secondaryFont">
                Coming in 2030
              </span>
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeIn}
              className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
            >
              We&apos;re crafting an exceptional learning experience for the
              next generation of African leaders. Get ready to transform your
              potential into impact.
            </motion.p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            custom={3}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  custom={index + 4}
                  variants={fadeIn}
                  className="bg-gradient-to-br from-red-50 to-white border py-10 border-red-100 rounded-2xl px-6 hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl md:text-7xl font-bold text-primaryRed mb-2">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-wider">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Preview */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h3
              custom={8}
              variants={fadeIn}
              className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900"
            >
              What to Expect
            </motion.h3>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  custom={9 + index}
                  variants={fadeIn}
                  className="text-center p-6 rounded-xl hover:bg-red-50 transition-colors group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-primaryRed/5 rounded-full group-hover:bg-primaryRed/20 transition-colors">
                    <feature.icon strokeWidth={1.5} className="w-8 h-8 text-primaryRed" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Notify Me Form */}
          <motion.div
            custom={12}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-md mx-auto text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6">
              Be the first to know when we launch. Join our waitlist today.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primaryRed focus:border-transparent disabled:bg-gray-100"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-primaryRed text-white rounded-full flex gap-3 items-center hover:bg-red-700 transition-all duratrion-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <BellDot/> {isSubmitting ? "Submitting..." : "Notify Me"}
              </button>
            </form>
            {message && (
              <p
                className={`mt-4 text-sm ${
                  message.includes("✓") ? "text-green-600" : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default TyilAcademy;
