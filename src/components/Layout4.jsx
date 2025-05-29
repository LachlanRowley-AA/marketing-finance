"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { Comparison1 } from "./Comparison";

export function Layout4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 relative z-10 bg-white text-text-secondary">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-text-secondary leading-tight">
              <span className="text-text-secondary">The </span>
              <span className="text-text-accent text-text-brand">Right </span>
              <span className="text-text-secondary">Broker Makes All the Difference</span>
            </h1>
            <p className="mb-6 md:mb-8 md:text-md text-text-secondary">
              Most brokers don’t understand branding projects. We do – 
              and we’ve built lender relationships to get you funded faster, with terms that actually make sense.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl text-text-secondary">
                  Flexible Options
                </h6>
                <p className="text-text-secondary">
                  Choose financing plans that adapt to your unique business
                  requirements and goals.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl ">
                  Expert Support
                </h6>
                <p>
                  Our team is here to guide you through every step of the
                  financing process.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Sign Up"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Sign Up
              </Button>
            </div>
          </div>
          <div>
            <img
              src="./smiley-man-working-laptop.jpg"
              className="w-full rounded-image object-cover rounded-lg  drop-shadow-[0_10px_10px_#000]"
              alt="Relume placeholder"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
