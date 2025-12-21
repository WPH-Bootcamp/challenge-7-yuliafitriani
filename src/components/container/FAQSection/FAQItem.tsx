import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

const FAQItem = ({ question, answer, defaultOpen = false }: FAQItemProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 dark:border-gray-800 py-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="text-lg font-semibold text-gray-900 dark:text-white max-w-[310px] lg:max-w-full">
          {question}
        </div>

        <svg
          className="w-6 h-6 transition-all duration-300 text-black dark:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {open ? (
            // MINUS
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 8H15"
            />
          ) : (
            // PLUS
            <>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 1V15"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 8H15"
              />
            </>
          )}
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 dark:text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
