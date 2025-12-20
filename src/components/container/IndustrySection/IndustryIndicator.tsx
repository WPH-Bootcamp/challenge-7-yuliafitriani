type Props = {
  items: { label: string }[];
  activeIndex: number;
  onChange: (index: number) => void;
};

const IndustryIndicator = ({ items, activeIndex, onChange }: Props) => {
  return (
    <div className="col-span-12 md:col-span-4 space-y-2">
      {items.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={item.label}
            onClick={() => onChange(index)}
            className="w-full text-left py-4 rounded-lg transition-all duration-300"
          >
            <div className="flex items-center">
              <div
                className={`w-1 h-8 rounded-full mr-4 transition-colors duration-300 ${
                  isActive ? "bg-orange-500" : "bg-gray-300 dark:bg-gray-600"
                }`}
              />

              <span
                className={`text-md lg:text-xl font-bold transition-colors duration-300 ${
                  isActive
                    ? "text-neutral-25 dark:text-dark-neutral-25"
                    : "text-[#AAAAAA] hover:text-neutral-25 dark:hover:text-dark-neutral-25"
                }`}
              >
                {item.label}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default IndustryIndicator;
