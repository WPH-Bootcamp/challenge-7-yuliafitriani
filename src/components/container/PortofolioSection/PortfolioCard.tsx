type Props = {
  image: string;
  category: string;
  title: string;
};

const PortfolioCard = ({ image, category, title }: Props) => {
  return (
    <div className="group w-full cursor-pointer">
      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="
            rounded-lg
            w-full
            lg:w-[373px]
            lg:h-[373px]
            object-cover
            transition-transform
            duration-500
            ease-out
            group-hover:scale-105
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-black/40
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
          "
        />
      </div>

      {/* CATEGORY */}
      <p className="text-primary-200 pt-3 text-sm md:text-md lg:text-md">
        {category}
      </p>

      {/* TITLE */}
      <p
        className="
          py-3
          block
          font-bold
          text-neutral-25
          dark:text-neutral-50
          text-md
          lg:text-xl
          transition-colors
          duration-300
          group-hover:text-orange-500
        "
      >
        {title}
      </p>
    </div>
  );
};

export default PortfolioCard;
