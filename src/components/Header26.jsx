"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header26() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-12">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-xl"> {/* Increased max width for better text flow */}
              <h1 className="mb-6 text-6xl font-black leading-[0.9] md:mb-8 md:text-[120px] lg:text-[120px] lg:leading-[0.9]">
                Bad Branding Costs Sales.
              </h1>
              <h1 className="mb-6 text-6xl font-black leading-[0.9] md:mb-8 md:text-[120px] lg:text-[120px] lg:leading-[0.9]
              text-transparent bg-clip-text bg-gradient-to-br from-text-brand to-brand-shade">
                Finance the Fix Now
              </h1>

              <p className="mb-8 text-xl leading-relaxed md:text-2xl md:leading-relaxed lg:mb-12"> {/* Larger paragraph text */}
                Unlock explosive growth with a killer branding deck – and the smart financing to make it happen
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-6 md:mt-8"> {/* Increased button spacing */}
                <Button className="px-8 py-4 text-lg md:px-10 md:py-5 md:text-xl bg-gradient-to-b from-brand-primary to-brand-shade hover:bg-brand-primary/90 text-white rounded-3xl" title="Learn More">
                  Learn More
                </Button>
                <Button className="px-8 py-4 text-lg md:px-10 md:py-5 md:text-xl bg-gradient-to-b from-brand-primary to-brand-shade hover:bg-brand-primary text-white rounded-3xl" title="Apply Now" variant="secondary">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-16 lg:mt-20"> {/* Added margin to image container */}
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="size-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}