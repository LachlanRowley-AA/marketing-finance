import { Button, ButtonProps } from "@relume_io/relume-ui";
import clsx from "clsx";
import React from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

type Feature = {
  text: string;
  items: React.ReactNode[];
};

type ImageProps = {
  src: string;
  alt?: string;
};

type ComparisonProducts = {
  title?: string;
  products: Product[];
};

type Product = {
  icon: ImageProps;
  productName: string;
  description: string;
};

type Props = {
  heading: string;
  comparisonProducts: ComparisonProducts[];
  features: Feature[];
  buttons: ButtonProps[];
};

export type Comparison1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Comparison1 = (props: Comparison1Props) => {
  const { heading, comparisonProducts, features } = {
    ...Comparison1Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-black">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
        </div>
        <div className="mx-auto max-w-xl">
          <div className="grid grid-cols-3 border-y border-border-primary  md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            {comparisonProducts.map((comparison, index) => (
              <React.Fragment key={index}>
                <div className="hidden h-full flex-col items-start justify-end py-4 pr-4 sm:py-6 sm:pr-6 md:flex lg:py-6 lg:pr-6">
                  <h2 className="text-md font-bold leading-[1.4] md:text-xl">{comparison.title}</h2>
                </div>
                {comparison.products.map((plan, index) => (
                  <ProductPlan key={index} index={index} {...plan} />
                ))}
              </React.Fragment>
            ))}
          </div>
          <FeaturesSection features={features} />
        </div>
      </div>
    </section>
  );
};
const ProductPlan = ({ index, ...product }: Product & { index: number }) => {
  return (
    <div
      className={clsx("flex h-full flex-col justify-between px-2 py-4 sm:px-4 sm:py-6 lg:p-6", {
        "bg-primary": index === 0,
      })}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <img src={product.icon.src} alt={product.icon.alt} className="size-12" />
        <h2 className={clsx("text-md font-bold leading-[1.4]"
            , {
                "text-text-brand text-3xl" : index === 0,
                
                
            }
        )}>{product.productName}</h2>
      </div>
    </div>
  );
};

const FeaturesSection = ({ features }: { features: Feature[] }) => {
  return (
    <div className="divide-y divide-[#FFFFFF] border-y border-[#FFFFFF]">
      {features.map((feature, featureIndex) => (
        <div
          key={featureIndex}
          className="grid grid-cols-3 md:grid-cols-[1.5fr_1fr_1fr_1fr]"
        >
          <p className="col-span-3 row-span-1 py-4 pr-4 md:col-span-1 md:pr-6">
            {feature.text}
          </p>
          {feature.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={clsx(
                "flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6",
                {
                  "bg-primary": itemIndex === 0,
                },
              )}
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Comparison1Defaults: Props = {
  heading: "Branding Financing: The Smart Choice",
  comparisonProducts: [
    {
      title: "Product comparison",
      products: [
        {
          icon: {
            src: "./Asset Alley Brandmark_ColourScreenUse.png",
            alt: "Relume icon 1",
          },
          productName: "Asset Alley",
          description: "Lorem ipsum dolor sit amet",
        },
        {
          icon: {
            src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
            alt: "Relume icon 2",
          },
          productName: "Product name",
          description: "Lorem ipsum dolor sit amet",
        },
        {
          icon: {
            src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
            alt: "Relume icon 3",
          },
          productName: "Product name",
          description: "Lorem ipsum dolor sit amet",
        },
      ],
    },
  ],
  features: [
    {
      text: "Feature text goes here",
      items: ["Unlimited", "10", "10"],
    },
    {
      text: "Feature text goes here",
      items: [<BiCheck className="size-6" />, <BiCheck className="size-6" />, <BiCheck className="size-6" />],
    },
    {
      text: "Feature text goes here",
      items: [<BiCheck className="size-6" />, <BiCheck className="size-6" />, <BiCheck className="size-6" />],
    },
    {
      text: "Feature text goes here",
      items: [<BiCheck className="size-6" />, <BiX className="size-6" />, <BiX className="size-6" />],
    },
    {
      text: "Feature text goes here",
      items: [<BiCheck className="size-6" />, <BiX className="size-6" />, <BiX className="size-6" />],
    },
  ],
  buttons: [
    {
      title: "Button",
      variant: "secondary",
    },
    { title: "Button", variant: "link", size: "link", iconRight: <RxChevronRight /> },
  ],
};