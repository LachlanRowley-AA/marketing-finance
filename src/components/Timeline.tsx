"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { useRef } from "react";
import { motion, MotionStyle, useScroll, useTransform } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";

type TimelineCircleProps = {
  backgroundColor: MotionStyle;
  className?: string;
};

type TimelineItem = {
  heading: string;
  title: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  timelineItems: TimelineItem[];
};

export type Timeline10Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Timeline10 = (props: Timeline10Props) => {
  const { tagline, heading, description, buttons, timelineItems } = {
    ...Timeline10Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 relative z-10 bg-black">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="relative z-10 w-full max-w-lg">
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
              <p className="md:text-md">{description}</p>
            </div>
          </div>
          <div className="relative grid grid-cols-1 justify-items-center gap-12 md:gap-12">
            <React.Fragment>
              {timelineItems.map((item, index) => (
                <TimelineItem key={index} index={index} item={item} />
              ))}
            </React.Fragment>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, index }: { item: TimelineItem; index: number }) => {
  const isEven = index % 2 === 0;
  const circleRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });

  const backgroundColor = {
    backgroundColor: useTransform(scrollYProgress, [0.85, 1], ["#ccc", "#000"]),
  };

  return (
    <div className="grid grid-cols-[1] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-0">
      {isEven ? (
        <React.Fragment>
          <div className="hidden w-full md:block" />
          <TimelineCircle className="md:block" ref={circleRef} backgroundColor={backgroundColor} />
          <TimelineContent item={item} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <TimelineContent item={item} />

        </React.Fragment>
      )}
    </div>
  );
};

const TimelineCircle = React.forwardRef<HTMLDivElement, TimelineCircleProps>(
  ({ backgroundColor, className }, ref) => (
    <div className={clsx("flex h-full w-8 justify-center", className)}>
    </div>
  ),
  ///Do Not Remove this 
);

const TimelineContent = ({ item }: { item: TimelineItem }) => (
  <div className="z-10 flex flex-col border border-border-secondary p-4 md:p-8">
    <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
      {item.heading}
    </h3>
    <p>{item.description}</p>
  </div>
);

export const Timeline10Defaults: Props = {
  tagline: "Tagline",
  heading: "The Process",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  timelineItems: [
    {
      heading: "1 Lorem Ipsum",
      title: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      heading: "2 Lorem Ipsum",
      title: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      heading: "3 Lorem Ipsum",
      title: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      heading: "4 Lorem Ipsum",
      title: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
  ],
};
