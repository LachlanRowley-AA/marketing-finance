import { Button, ButtonProps } from "@relume_io/relume-ui";
import {BiPhone} from "react-icons/bi";
import { HiCursorClick } from "react-icons/hi";
import { Contact12 } from "./Contact";
import { useState } from "react";

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

export type Cta25Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;


export const Contact = (props: Cta25Props) => {
  const [showContact, setContact] = useState(false);

  const handleButtonClick = (index: number) => {
    if (index === 1) {
      setContact(true);
    }
  }

  const { heading, description, buttons } = {
    ...Cta25Defaults,
    ...props,
  };
  return (
    <div>
      <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-20 bg-[#01E194]">
        <div className="container max-w-lg text-center">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md text-lg">{description}</p>
          <div className="mt-6 flex items-center justify-center gap-20 md:mt-8">
            {buttons.map((button, index) => (
              <Button
                key={index}
                {...button}
                className="rounded-3xl text-5xl px-6 py-2 flex items-center gap-2"
                onClick = {() => handleButtonClick(index)}
              >
                {index === 0 && <BiPhone />}
                {index === 1 && <HiCursorClick />}
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </section>
      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Contact12 />
        </div>
        )}
    </div>
    
  );
};

export const Cta25Defaults: Props = {
  heading: "READY TO GET STARTED?",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  buttons: [{ title: "1300 144 542" }, { title: "Contact Form", variant: "secondary" }],
};
