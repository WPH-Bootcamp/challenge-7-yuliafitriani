import LogoMarqueeTrack from "./LogoMarqueeTrack";

const LogoMarquee = () => {
  return (
    <section className="relative">
      <span className="text-neutral-25 dark:text-neutral-50 font-bold text-md text-center block">
        Trusted by Global Innovators &amp; Leading Brands
      </span>

      <div className="relative overflow-hidden w-full h-[128px] lg:h-[200px] place-content-center">
        <LogoMarqueeTrack />
      </div>

      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/6 bg-gradient-to-r from-white to-transparent dark:from-black" />

      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/6 bg-gradient-to-l from-white to-transparent dark:from-black" />
    </section>
  );
};

export default LogoMarquee;
