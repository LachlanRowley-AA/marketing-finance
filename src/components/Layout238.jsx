"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout238() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 relative z-10 bg-black">
      <div className="container bg-primary">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
              Unlock Your Brand's Potential with Flexible Financing Solutions
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="./stair.svg"
                alt="Relume logo"
                className="size-36"
              />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Empower Your Business Growth Through Strategic Financial Support
            </h3>
            <p>
              Our financing options enable companies to invest in top-tier
              branding agents without upfront costs.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Discover
              </Button>
            </div>
          </div>
          {/* <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo"
                className="size-12"
              />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Flexible Payment Plans Tailored to Your Business Needs
            </h3>
            <p>
              Choose a payment plan that aligns with your cash flow and business
              goals.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Explore
              </Button>
            </div>
          </div> */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="./assessment.svg"
                alt="Relume logo"
                className="size-36"
              />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Quick Approval Process to Get You Started Fast
            </h3>
            <p>
              Experience a streamlined application process that gets you funding
              in no time.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
