import { useState } from "react";
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.",
    name: "Sarah Tan",
    role: "Product Manager at Finovate",
    avatar: "/assets/images/profile-1.png",
  },
  {
    quote:
      "Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.",
    name: "John Lee",
    role: "Creative Director at Innovate Corp",
    avatar: "/assets/images/profile-2.png",
  },
  {
    quote:
      "The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.",
    name: "Bobby Chen",
    role: "Marketing Head at Tech Solutions",
    avatar: "/assets/images/profile-3.png",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <div className="relative py-12 my-12">
      {/* Carousel */}
      <div className="overflow-hidden lg:grid lg:grid-cols-3 md:grid md:grid-cols-2">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="pl-4 basis-full shrink-0">
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-1/6 bg-gradient-to-r from-white dark:from-black to-transparent"
      />

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-1/6 bg-gradient-to-l from-white dark:from-black to-transparent"
      />

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`
              h-2 rounded-full transition-all duration-300
              ${
                index === i
                  ? "w-6 bg-orange-500"
                  : "w-2 bg-gray-300 dark:bg-gray-600"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
