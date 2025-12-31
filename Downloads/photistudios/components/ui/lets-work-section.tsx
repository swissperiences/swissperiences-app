"use client";

import React, { useState } from "react";
import { Calendar, ArrowUpRight } from "lucide-react";

export default function LetsWorkTogether() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setShowSuccess(true), 500);
  };

  return (
    <div className="flex items-center justify-center min-h-[50vh] bg-black p-6">
      <div
        className="relative w-full max-w-4xl"
        onMouseEnter={() => !isClicked && setIsHovered(true)}
        onMouseLeave={() => !isClicked && setIsHovered(false)}
      >
        {/* Main Heading */}
        <div
          className="relative cursor-pointer"
          onClick={!isClicked ? handleClick : undefined}
          style={{
            transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight"
            style={{
              fontFamily: "Inter, sans-serif",
              transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
              opacity: isClicked ? 0 : 1,
              transform: isClicked ? "translateY(-20px)" : "translateY(0)",
            }}
          >
            {["Let's", "work", "together"].map((word, index) => (
              <span
                key={index}
                className="inline-block mr-4 md:mr-6"
                style={{
                  transition: `transform 0.3s cubic-bezier(0.22, 1, 0.36, 1) ${
                    index * 0.05
                  }s`,
                  transform:
                    isHovered && !isClicked
                      ? `translateY(${index % 2 === 0 ? "-8px" : "8px"})`
                      : "translateY(0)",
                }}
              >
                {word}{" "}
              </span>
            ))}
          </h2>

          {/* Arrow Icon */}
          <div
            className="absolute -right-2 top-0 md:-right-4 md:top-2"
            style={{
              transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
              opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
              transform: isClicked
                ? "translate(20px, -20px) rotate(45deg)"
                : isHovered
                ? "translate(8px, -8px) rotate(0deg)"
                : "translate(0, 0) rotate(-45deg)",
            }}
          >
            <ArrowUpRight className="w-12 h-12 md:w-16 md:h-16 text-white" />
          </div>
        </div>

        {/* Success State */}
        {isClicked && (
          <div
            className="absolute inset-0 flex flex-col items-start justify-center"
            style={{
              transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
              opacity: showSuccess ? 1 : 0,
              transform: showSuccess ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              Perfect, Let's talk
            </h3>

            {/* Book a Call Button */}
            <button
              onClick={() => window.open("https://calendly.com/cauehvidal/30min", "_blank")}
              className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              style={{
                transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <Calendar className="w-5 h-5" />
              <span>Book a call</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        )}

        {/* Availability Badge */}
        {!isClicked && (
          <div
            className="mt-8 flex items-center gap-3"
            style={{
              transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
              opacity: isHovered ? 1 : 0.7,
            }}
          >
            <div className="relative flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75" />
            </div>
            <span className="text-gray-400 text-sm md:text-base font-medium">
              Available for new projects
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
