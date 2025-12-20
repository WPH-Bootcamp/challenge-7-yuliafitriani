import React from "react";

type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  loading = false,
  disabled,
  className = "",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center text-sm gap-1 p-2 rounded-full font-bold transition focus:outline-none";

  const variantStyle =
    "bg-primary-200 text-white shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25)]";

  const sizeStyle: Record<ButtonSize, string> = {
    sm: "w-[361px] h-[44px]",
    md: "w-[200px] h-[48px]",
    lg: "w-[200px] h-[48px]",
  };

  const disabledStyle =
    disabled || loading ? "opacity-50 cursor-not-allowed" : "";

  const combinedClassName = [
    baseStyle,
    variantStyle,
    sizeStyle[size],
    disabledStyle,
    className,
  ].join(" ");

  return (
    <button
      className={combinedClassName}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
