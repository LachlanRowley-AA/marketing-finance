import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  RadioGroup,
  RadioGroupItem,
  Input,
  Label,
  Checkbox,
  Textarea,
  Button,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React, { useEffect, useRef } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import { useState } from "react";

type LinkProps = {
  label: string;
  url: string;
};

type Contact = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: LinkProps;
  button?: ButtonProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  contacts: Contact[];
  button: ButtonProps;
};

export type Contact12Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Contact12 = (props: Contact12Props & {onClose?: () => void}) => {
  const { tagline, heading, description, contacts, button, onClose } = {
    ...Contact12Defaults,
    ...props,
  };

  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose?.();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => 
      document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);
  

  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");

  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const [selectedItem, setSelectedItem] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");

  const [messageInput, setMessageInput] = useState("");
  const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(false);

  const selectItems = [
    { value: "first-choice", label: "First Choice" },
    { value: "second-choice", label: "Second Choice" },
    { value: "third-choice", label: "Third Choice" },
  ];

  const radioItems = [
    { value: "first-choice", label: "First choice" },
    { value: "second-choice", label: "Second choice" },
    { value: "third-choice", label: "Third choice" },
    { value: "fourth-choice", label: "Fourth choice" },
    { value: "fifth-choice", label: "Fifth choice" },
    { value: "other", label: "Other" },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      firstNameInput,
      lastNameInput,
      emailInput,
      phoneInput,
      selectedItem,
      selectedRadio,
      messageInput,
      acceptTerms,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <section ref={modalRef} id="relume" className="fixed pl-[3%] py-12 md:py-24 lg:py-16 bg-[#ebebeb] rounded-lg">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl"
            aria-label="Close"
          >
            &times;
          </button>
        )}

      <div className="container">
        <div className="rb-12 mb-8 max-w-lg md:mb-12">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-text-secondary">
            {heading}
          </h2>
          <p className="md:text-md text-text-secondary">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[1fr_0.75fr] md:gap-y-16 lg:gap-x-20 border-y">
          <form className="grid grid-cols-1 grid-rows-[auto_auto] gap-6  text-text-secondary" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="grid w-full items-center">
                <Label htmlFor="firstName" className="mb-2">
                  First name
                </Label>
                <Input
                  type="text"
                  id="firstName"
                  value={firstNameInput}
                  onChange={(e) => setFirstNameInput(e.target.value)}
                  style={{ backgroundColor: "#FFFFFF" }}
                />
              </div>

              <div className="grid w-full items-center">
                <Label htmlFor="lastName" className="mb-2">
                  Last name
                </Label>
                <Input
                  type="text"
                  id="lastName"
                  value={lastNameInput}
                  onChange={(e) => setLastNameInput(e.target.value)}
                  style={{ backgroundColor: "#FFFFFF" }}

                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="grid w-full items-center">
                <Label htmlFor="email" className="mb-2">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  style={{ backgroundColor: "#FFFFFF" }}

                />
              </div>

              <div className="grid w-full items-center">
                <Label htmlFor="phone" className="mb-2">
                  Phone number
                </Label>
                <Input
                  type="text"
                  id="phone"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  style={{ backgroundColor: "#FFFFFF" }}

                />
              </div>
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="message" className="mb-2">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message..."
                className="min-h-[11.25rem] overflow-auto"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
            </div>

            <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
              <Checkbox id="terms" checked={acceptTerms} onCheckedChange={setAcceptTerms} />
              <Label htmlFor="terms" className="cursor-pointer">
                I accept the{" "}
                <a className="text-link-primary underline" href="#">
                  Terms
                </a>
              </Label>
            </div>

            <div>
              <Button {...button}>{button.title}</Button>
            </div>
          </form>
          <div className="mb-auto grid gap-x-4 gap-y-10 py-2 sm:grid-cols-2 hidden md:block">
            {contacts.map((contact, index) => (
              <div key={index}>
                <div className="mb-1 md:mb-2 mt-5">{contact.icon}</div>
                <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl text-text-secondary">{contact.title}</h3>
                <p className="mb-2 text-text-secondary">{contact.description}</p>
                {contact.title === "Office" && contact.button ? (
                  <div className="mt-5 md:mt-6 ">
                    <Button style={{color:"#000"}} {...contact.button}>{contact.button.title}</Button>
                  </div>
                ) : (
                  contact.link && (
                    <a className="underline text-text-secondary" href={contact.link.url}>
                      {contact.link.label}
                    </a>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export const Contact12Defaults: Props = {
  tagline: "Tagline",
  heading: "Contact us",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  contacts: [
    {
      icon: <BiPhone className="size-8 fill-black" />,
      title: "Phone",
      description: "Lorem ipsum dolor sit amet.",
      link: {
        label: "+1 (555) 000-0000",
        url: "#",
      },
    },
    {
      icon: <BiMap className="size-8 fill-black" />,
      title: "Office",
      description: "14 Lexington Dr, Bella Vista NSW 2153 AU",
      button: {
        title: "Get Directions",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
  button: { title: "Submit" },
};
