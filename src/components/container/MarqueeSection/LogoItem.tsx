type LogoItemProps = {
  src: string;
  alt: string;
};

const LogoItem = ({ src, alt }: LogoItemProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className="
        h-10 w-auto
        opacity-75
        grayscale
        transition
        duration-300
        ease-in-out
        hover:opacity-100
        hover:grayscale-0
      "
    />
  );
};

export default LogoItem;
