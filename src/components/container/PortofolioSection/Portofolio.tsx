import HeaderText from "../../ui/HeaderText/HeaderText";
import SubHeaderText from "../../ui/SubHeaderText/SubHeaderText";
import PortfolioCard from "./PortfolioCard";

export type PortfolioItem = {
  image: string;
  category: string;
  title: string;
};

const portfolioData: PortfolioItem[] = [
  {
    image: "/assets/images/portofolio-1.png",
    category: "Landing Page",
    title: "Portofolio 1",
  },
  {
    image: "/assets/images/portofolio-2.png",
    category: "Landing Page",
    title: "Portofolio 2",
  },
  {
    image: "/assets/images/portofolio-3.png",
    category: "Landing Page",
    title: "Portofolio 3",
  },
];

const Portofolio = () => {
  return (
    <section className="px-4 w-full mx-auto lg:w-[1160px] pt-20">
      <div className="text-center">
        <HeaderText>From Vision to Launch! Projects We’re Proud Of</HeaderText>
        <SubHeaderText>
          Take a closer look at our recent work powering startups, enterprises,
          and everything in between.
        </SubHeaderText>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 my-20 gap-8">
        {portfolioData.map((item, index) => (
          <PortfolioCard
            key={index}
            image={item.image}
            category={item.category}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Portofolio;
