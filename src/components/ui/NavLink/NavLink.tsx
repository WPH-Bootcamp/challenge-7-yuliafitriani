import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className = "",
}) => {
  const baseStyle =
    "inline-flex items-center justify-center" +
    "w-[78px] h-[36px] py-2 px-4 gap-[6px] " +
    "rounded-full text-neutral-25 font-semibold " +
    "transition-colors duration-200 hover:text-white hover:bg-neutral-500 dark:text-dark-neutral-25";

  return (
    <a href={href} className={`${baseStyle} ${className}`}>
      {children}
    </a>
  );
};

export default NavLink;
