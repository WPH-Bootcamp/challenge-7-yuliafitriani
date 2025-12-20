const Footer = () => {
  return (
    <footer className="bg-neutral-50 border border-neutral-300 rounded-xl m-5 mb-20 dark:border-neutral-900 dark:bg-neutral-25">
      <div className="container px-6 py-8 mx-auto">
        {/* TOP */}
        <div className="flex md:flex-row flex-col-reverse justify-between gap-5">
          <div className="w-full lg:w-[381px]">
            <h3 className="font-bold text-[28px] lg:text-4xl md:text-3xl text-neutral-25 dark:text-neutral-50">
              LET&apos;S DISCUSS YOUR IDEAS
            </h3>
          </div>

          <div className="w-full md:flex md:justify-end">
            <img
              className="w-32 h-auto dark:hidden"
              src="/assets/images/logo.svg"
              alt="Logo"
            />
            <img
              className="w-32 h-auto hidden dark:block"
              src="/assets/images/logo-dark.svg"
              alt="Logo Dark"
            />
          </div>
        </div>

        <hr className="my-10 border-neutral-300 dark:border-neutral-800" />

        {/* BOTTOM */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-6">
          {/* LINKS */}
          <nav className="flex -mx-2">
            {["About", "Service", "Projects", "Testimonials", "FAQ"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    mx-2
                    text-sm
                    text-neutral-25
                    dark:text-neutral-50
                    transition-colors
                    duration-300
                    hover:text-orange-500
                  "
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* SOCIAL – LIGHT */}
          <div className="flex gap-3 dark:hidden">
            {["fb", "ig", "in", "tiktok"].map((icon) => (
              <img
                key={icon}
                src={`/assets/images/${icon}.svg`}
                alt={icon}
                className="h-6 w-6 cursor-pointer transition-transform duration-300 hover:scale-110"
              />
            ))}
          </div>

          {/* SOCIAL – DARK */}
          <div className="hidden gap-3 dark:flex">
            {["fb-dark", "ig-dark", "in-dark", "tiktok-dark"].map((icon) => (
              <img
                key={icon}
                src={`/assets/images/${icon}.svg`}
                alt={icon}
                className="h-6 w-6 cursor-pointer transition-transform duration-300 hover:scale-110"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
