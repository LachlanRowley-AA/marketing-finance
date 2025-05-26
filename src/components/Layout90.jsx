"use client";

import React from "react";

export function Layout90() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-20 overflow-hidden">
      {/* Angled background */}
      <div
        className="absolute inset-0 -z-10 bg-[#01E194]"
        style={{
          clipPath: 'polygon(0 0vh, 100% 20vh, 100% 100%, 0% 100%)',
        }}
      />

      {/* Content Container */}
      <div className="container relative my-[15vh]">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-6xl leading-[1.2] font-bold md:text-5xl lg:text-8xl text-text-secondary">
              <span className="text-6xl leading-[1.2] font-bold md:text-5xl lg:text-8xl text-text-primary">
                &nbsp;Elevate&nbsp;
              </span>
                Your Brand.
            </h3>

            <h3 className="text-6xl leading-[1.2] font-bold md:text-5xl lg:text-8xl text-text-secondary">
              <span className="text-6xl leading-[1.2] font-bold md:text-5xl lg:text-8xl text-text-primary">
                &nbsp;Accelerate&nbsp;
              </span>
                Your Growth
            </h3>

            <h3 className="text-6xl leading-[1.2] font-bold md:text-5xl lg:text-8xl text-text-secondary">
              <span className="text-6xl leading-[1.2] font-bold md:text-5xl lg:text-8xl text-text-primary">
                &nbsp;Finance&nbsp;
              </span>
                Your Vision.
            </h3>
          </div>
          <p className="md:text-xl lg:text-2xl font-semibold text-text-secondary">
            Stop dreaming about a powerful brand identity and start building it. 
            Secure the funding you need to collaborate with a leading design agency and craft a branding deck 
            that reflects your company's true value and ambition.
          </p>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full rounded-image object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
