type Props = {
  title: string;
  description: string;
  image: string;
};

const IndustryContent = ({ title, description, image }: Props) => {
  return (
    <div className="col-span-12 md:col-span-8 transition-all duration-700">
      <div className="animate-in fade-in duration-500">
        <div className="mb-6">
          <p className="text-neutral-800 dark:text-neutral-200 text-lg font-semibold leading-relaxed">
            {description}
          </p>
        </div>

        <div className="rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-80 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default IndustryContent;
