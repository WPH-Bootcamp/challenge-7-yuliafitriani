import FAQList from "./FAQList";
import Button from "../../ui/Button";

const FAQ = () => {
  return (
    <section className="px-4 w-full mx-auto lg:w-[1200px] pt-20 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between  place-items-end text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-25 dark:text-dark-neutral-25">
          Need Help? Start <br className="hidden md:block" />
          Here.
        </h2>

        <p className="text-neutral-400 md:text-right">
          Everything you need to <br className="hidden md:block" />
          know — all in one place.
        </p>
      </div>

      <hr className="my-8 border-gray-200 dark:border-gray-800" />

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-2 justify-between">
        <div className=" lg:w-[798px]">
          <FAQList />
        </div>

        {/* Side CTA */}
        <div className="bg-primary-200 rounded-3xl p-6 text-white w-full mt-5 lg:w-[329px] md:w-[329px] lg:m-0 md:m-0">
          <h3 className="text-3xl font-bold mb-2 text-left">
            Let’s talk it through
          </h3>

          <p className="mb-2 opacity-90 text-left">
            book a free consultation with our team.
          </p>

          <img
            src="/assets/images/consultation-image.png"
            alt="Consultation"
            className="w-full lg:w-[281px] mb-5"
          />

          <Button
            size="md"
            className="w-full !bg-black dark:!bg-white dark:text-neutral-25 text-md"
          >
            Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
