import React from "react";

type HeaderSize = "sm" | "md" | "lg";

interface HeaderProps {
  children: React.ReactNode;
  size?: HeaderSize;
  className?: string;
}

const HeaderText: React.FC<HeaderProps> = ({ children, className = "" }) => {
  const baseStyle =
    "text-center text-neutral-25 font-bold w-full block dark:text-dark-neutral-25 " +
    "w-[361px] h-[76px] text-2xl p-2 " +
    "md:w-[1160px] md:min-h-[56px] md:text-3xl md:p-3 " +
    "lg:w-[1160px] lg:text-4xl lg:p-4 ";

  const combinedClassName = [baseStyle, className].join(" ");

  return <h2 className={combinedClassName}>{children}</h2>;
};

export default HeaderText;
