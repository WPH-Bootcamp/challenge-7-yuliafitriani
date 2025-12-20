import HeaderText from "../../ui/HeaderText/HeaderText";
import SubHeaderText from "../../ui/SubHeaderText/SubHeaderText";
import TestimonialsCarousel from "./TestimonialsCarousel";
const Testimonial = () => {
  return (
    <section className="px-4 w-full mx-auto">
      <div className="text-center">
        <HeaderText>What Partners Say About Working With Us</HeaderText>
        <SubHeaderText>
          Trusted voices. Real experiences. Proven results.
        </SubHeaderText>
      </div>
      <TestimonialsCarousel />
    </section>
  );
};

export default Testimonial;
