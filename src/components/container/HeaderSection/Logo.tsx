import React from "react";

type LogoProps = {
  logoClass?: string;
  textClass?: string;
  imgClass?: string;
};

const Logo: React.FC<LogoProps> = ({
  logoClass = "",
  textClass = "",
  imgClass = "",
}) => {
  const baseWrapperStyle = "flex items-center font-black";

  const baseLinkStyle = "flex items-center gap-2";

  const combinedWrapperClassName = [baseWrapperStyle, logoClass].join(" ");

  const combinedTextClassName = [
    "font-bold text-[21.33px] color-[#000000] leading-[32px] tracking-normal dark:text-white",
    textClass,
  ].join(" ");

  const combinedImgClassName = ["h-8 w-auto", imgClass].join(" ");

  return (
    <div className={combinedWrapperClassName}>
      <a href="#" className={baseLinkStyle} aria-label="Home">
        <img
          src="/assets/images/logo-symbol.svg"
          alt="Your Logo"
          className={combinedImgClassName}
        />
        <span className={combinedTextClassName}>Your Logo</span>
      </a>
    </div>
  );
};

export default Logo;
