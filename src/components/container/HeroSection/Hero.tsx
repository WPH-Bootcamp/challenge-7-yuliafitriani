import Button from "../../ui/Button";

const Hero = () => {
  return (
    <section
      className="
          grid
          items-center
          grid-rows
          md:grid-cols-2 
          mx-4
          lg:mx-0
          "
    >
      {/* LEFT CONTENT */}
      <div className="w-auto h-[370px] lg:w-[653px] lg:h-[300px] relative lg:px-0 ">
        <div
          className="
          mt-[125px]
          w-full
          lg:mt-0
        "
        >
          <h1 className="text-4xl lg:text-7xl font-bold text-nowrap dark:text-dark-neutral-25">
            Your Tech Partner for
            <br />
            <span className="text-primary-200">Smarter Growth</span>
          </h1>

          <p className="font-semibold text-neutral-25 text-md py-3 dark:text-dark-neutral-25">
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>
        </div>
        <div className="absolute bottom-0 w-full">
          <Button className="w-full lg:w-[200px]">Let's Talk</Button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="-z-10 -mx-4 md:min-h-[747px] md:h-[747px]">
        {/* Light */}
        <img
          src="/assets/images/hero.jpg"
          className="md:absolute md:top-0 md:right-0 md:max-h-[800px] md:h-[700px] dark:hidden"
          alt="Your Tech Partner"
        />

        {/* Dark */}
        <img
          src="/assets/images/hero-dark.png"
          className="hidden md:absolute md:top-0 md:right-0 md:max-h-[800px] md:h-[700px] dark:block"
          alt="Your Tech Partner"
        />
      </div>
    </section>
  );
};

export default Hero;
