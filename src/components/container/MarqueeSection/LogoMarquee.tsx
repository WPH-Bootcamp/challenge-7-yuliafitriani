import LogoMarqueeTrack from "./LogoMarqueeTrack";

const LogoMarquee = () => {
  return (
    <section className="py-10">
      <span className="text-neutral-25 dark:text-neutral-50 font-bold text-md text-center block mb-6">
        Trusted by Global Innovators &amp; Leading Brands
      </span>

      <div className="relative overflow-hidden w-full h-[128px] lg:h-[200px] place-content-center">
        <LogoMarqueeTrack />
      </div>
    </section>
  );
};

export default LogoMarquee;
