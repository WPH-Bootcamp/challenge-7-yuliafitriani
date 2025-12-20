import React from "react";

interface RoundedCardProps {
  value: string;
  label: string;
  className?: string;
}

const RoundedCard: React.FC<RoundedCardProps> = ({
  value,
  label,
  className = "",
}) => {
  const baseStyle =
    "w-full aspect-square border border-neutral-300 dark:border-neutral-900 " +
    "bg-neutral-50 dark:bg-neutral-25 rounded-full " +
    "flex flex-col items-center justify-center text-center p-[16px] " +
    "lg:w-[275px]";

  return (
    <div className={`${baseStyle} ${className}`}>
      <span className="text-primary-200 font-bold text-4xl lg:text-[40px] lg:tracking-tight block h-[44px] lg:h-[60px]">
        {value}
      </span>
      <span className="text-neutral-25 dark:text-neutral-50 font-semibold text-md">
        {label}
      </span>
    </div>
  );
};

export default RoundedCard;
