type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export const TestimonialCard = ({
  quote,
  name,
  role,
  avatar,
}: TestimonialCardProps) => {
  return (
    <div className="py-8 h-full">
      <div className="relative flex flex-col items-center bg-[#FAFAFA] dark:bg-[#0A0D12] border border-[#DEDCDC] dark:border-[#181D27] hover:-translate-y-1 hover:border-orange-500 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-colors duration-300 rounded-2xl p-8 text-center h-full pb-16">
        {/* Quote icon */}
        <img
          src="/assets/images/testimonial-icon.svg"
          alt="Quote"
          className="absolute left-8 -top-6 w-12 h-12"
        />

        {/* Stars */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <img
              key={i}
              src="/assets/images/star-filled.svg"
              alt="star"
              className="w-5 h-5"
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-sm font-semibold lg:text-lg text-gray-700 dark:text-gray-300 mb-8 flex-grow">
          “{quote}”
        </blockquote>

        {/* Author */}
        <div className="text-center mb-2">
          <div className="text-sm font-semibold lg:text-lg text-gray-900 dark:text-white">
            {name}
          </div>
          <div className="text-sm font-semibold lg:text-lg text-orange-500">
            {role}
          </div>
        </div>

        {/* Avatar */}
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full absolute -bottom-8 border-4 border-white dark:border-gray-900"
        />
      </div>
    </div>
  );
};
