import { useState } from "react";

type ProcessCardProps = {
  title: string;
  description: string;
  delay?: number;
  order?: string; // 👈 NEW
};

const ProcessCard = ({
  title,
  description,
  delay = 0,
  order = "order-2", // 👈 default order
}: ProcessCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${order} flex-grow text-right animate-on-scroll fade-left `}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className="
          flex
          bg-[#FAFAFA]
          dark:bg-[#0A0D12]
          border border-[#DEDCDC]
          dark:border-[#181D27]
          rounded-xl
          p-[16px]
          transition-all
          duration-300
          lg:w-[532px]
          
        "
      >
        <div className="flex-1">
          {/* TITLE + CHEVRON */}
          <div className="flex items-start justify-between gap-4 ">
            <h3 className="text-md font-bold text-black dark:text-white text-left">
              {title}
            </h3>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle details"
              className="flex-shrink-0 text-gray-400 hover:text-orange-500 transition"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* EXPANDABLE DETAILS */}
          <div
            className={`
              mt-4
              overflow-hidden
              transition-all
              duration-300
              ease-in-out
              ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm text-left leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
