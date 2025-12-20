import React from "react";

type TextSize = "sm" | "md" | "lg";

interface TextProps {
  children: React.ReactNode;
  size?: TextSize;
  className?: string;
}

const SubHeaderText: React.FC<TextProps> = ({
  children,
  size = "md",
  className = "",
}) => {
  const baseStyle = "text-neutral-400 block w-full";

  const sizeStyle: Record<TextSize, string> = {
    sm: "h-[56px] text-sm",
    md: "h-[56px] text-base",
    lg: "w-[1160px] h-[32px] text-lg",
  };

  const combinedClassName = [baseStyle, sizeStyle[size], className].join(" ");

  return <p className={combinedClassName}>{children}</p>;
};

export default SubHeaderText;
