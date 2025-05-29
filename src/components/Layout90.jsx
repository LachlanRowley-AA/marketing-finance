"use client";

import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export function Layout90() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="relative sm:h-[60vh] lg:h-[100vh] w-full">
      {/* Fixed Video Background */}
      <div className="fixed inset-0 -z-30">
        <video
          className="h-full w-full object-cover hidden md:block"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="./Mountain.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Scrollable Polygon Layer */}
        <div
          className="clip-polygon-1 lg:clip-polygon-2 bg-[#01E194] w-full h-full"
        >
        <div className="container relative px-[2%] pointer-events-auto">
          <div className="mb-0 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:mb-20 lg:gap-x-12">
            <div className="mt-[10vh] md:mt-[20vh] lg:mt-[35vh]">
              {["Elevate Your Brand.", "Accelerate Your Growth", "Finance Your Vision."].map((text, index) => {
                const [highlight, ...rest] = text.split(" ");
                return (
                  <h3
                    key={index}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.2] text-text-secondary"
                  >
                    <span className="text-text-primary">{highlight}&nbsp;</span>
                    {rest.join(" ")}
                  </h3>
                );
              })}
            </div>
            <p className="mt-0 md:mt-[20vh] lg:mt-[35vh] mb-[5vh] text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-text-secondary">
              Stop dreaming about a powerful brand identity and start building it. 
              Secure the funding you need to collaborate with a leading design agency and craft a branding deck 
              that reflects your company's true value and ambition.
            </p>
          </div>
        </div>
        </div>
      {/* Scrollable Text Content */}

    </section>
  );
}
