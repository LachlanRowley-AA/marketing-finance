type ImageProps = {
  src: string;
  alt?: string;
};

type FeaturesProps = {
  icon: ImageProps;
  paragraph: string;
};

type Props = {
  heading: string;
  description: string;
  features: FeaturesProps[];
  image: ImageProps;
};

export type Layout18Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Briefing = (props: Layout18Props) => {
  const { heading, description, features, image } = {
    ...Layout18Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-black">
        <div className="container">
            <div className="flex flex-col items-center px-4 md:px-24">
            <div className="max-w-3xl w-full">
                <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl text-center">
                {heading}
                </h3>
                <p className="mb-5 md:mb-6 md:text-md text-center">{description}</p>

                <ul className="grid grid-cols-1 gap-4 py-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start justify-center gap-4">
                    <img src={feature.icon.src} alt={feature.icon.alt} className="size-6" />
                    <p>{feature.paragraph}</p>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </div>
    </section>
    );
};

export const Layout18Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  features: [
    {
      icon: { src: "Asset Alley Brandmark_ColourScreenUse_Cropped.png", alt: "Relume logo 1" },

      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: { src: "Asset Alley Brandmark_ColourScreenUse_Cropped.png", alt: "Relume logo 2" },
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: { src: "Asset Alley Brandmark_ColourScreenUse_Cropped.png", alt: "Relume logo 3" },
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};
