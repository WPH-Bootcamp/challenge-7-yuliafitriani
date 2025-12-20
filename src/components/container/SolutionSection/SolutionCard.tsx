type SolutionCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
};

const SolutionCard = ({
  title,
  description,
  imageSrc,
  imageAlt = title,
}: SolutionCardProps) => {
  return (
    <div
      className="
        group
        relative
        flex
        flex-col
        w-full
        rounded-xl
        border
        border-neutral-300
        bg-neutral-50
        dark:border-neutral-900
        dark:bg-neutral-25
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        hover:border-orange-500/60
      "
    >
      <div className="relative w-full p-6 pt-[40px] md:pt-[50px] lg:pt-[60px]">
        {/* ICON */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="
            absolute
            -top-6
            left-6
            h-[60px]
            w-[60px]
            md:h-[80px]
            md:w-[80px]
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />

        {/* TITLE */}
        <h5
          className="
            mb-3
            font-bold
            text-xl
            text-neutral-25
            dark:text-neutral-50
            transition-colors
            duration-300
            group-hover:text-orange-500
          "
        >
          {title}
        </h5>

        {/* DESCRIPTION */}
        <p
          className="
            text-sm
            font-medium
            leading-snug
            tracking-wide
            text-neutral-500
            dark:text-neutral-400
            transition-colors
            duration-300
            group-hover:text-neutral-600
            dark:group-hover:text-neutral-300
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default SolutionCard;
