import React from "react";

type HeaderSize = "sm" | "md" | "lg";

interface HeaderProps {
  children: React.ReactNode;
  size?: HeaderSize;
  className?: string;
}

const HeaderText: React.FC<HeaderProps> = ({ children, className = "" }) => {
  const baseStyle =
    "text-neutral-25 font-bold w-full block dark:text-dark-neutral-25 " +
    "w-[361px] text-2xl mb-[11px] " +
    " md:min-h-[56px] md:text-3xl" +
    " lg:text-4xl ";

  const combinedClassName = [baseStyle, className].join(" ");

  return <h2 className={combinedClassName}>{children}</h2>;
};

export default HeaderText;
