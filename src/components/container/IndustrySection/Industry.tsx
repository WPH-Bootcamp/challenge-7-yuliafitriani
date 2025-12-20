import HeaderText from "../../ui/HeaderText/HeaderText";
import SubHeaderText from "../../ui/SubHeaderText/SubHeaderText";
import IndustryIndicator from "./IndustryIndicator";
import IndustryContent from "./IndustryContent";
import { useState } from "react";

export type IndustryItem = {
  label: string;
  description: string;
  image: string;
};

const industries: IndustryItem[] = [
  {
    label: "Fintech",
    description:
      "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
    image: "/assets/images/industry-image.jpg",
  },
  {
    label: "E-commerce",
    description:
      "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
    image: "/assets/images/ecommerce-image.jpg",
  },
  {
    label: "Healthcare",
    description:
      "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
    image: "/assets/images/healthcare-image.jpg",
  },
];

const Industry = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-4 w-full mx-auto lg:w-[1160px] pt-20 py-10">
      <div className="text-left">
        <HeaderText>Built for Your Industry</HeaderText>
        <SubHeaderText>
          We’ve helped companies across industries launch smarter, faster, and
          more securely.
        </SubHeaderText>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <IndustryIndicator
          items={industries}
          activeIndex={activeIndex}
          onChange={setActiveIndex}
        />

        <IndustryContent
          title={industries[activeIndex].label}
          description={industries[activeIndex].description}
          image={industries[activeIndex].image}
        />
      </div>
    </section>
  );
};

export default Industry;
