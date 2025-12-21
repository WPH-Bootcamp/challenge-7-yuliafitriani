import HeaderText from "../../ui/HeaderText/HeaderText";
import SubHeaderText from "../../ui/SubHeaderText/SubHeaderText";
import SolutionCard from "./SolutionCard";

type SolutionItem = {
  title: string;
  description: string;
  imageSrc: string;
};

/* DATA ARRAY */
const solutionsData: SolutionItem[] = [
  {
    title: "Web Development",
    description: "Build fast, scalable, and SEO-friendly websites.",
    imageSrc: "/assets/images/solution-1.svg",
  },
  {
    title: "Mobile App Development",
    description: "Create high-performance mobile apps for iOS and Android.",
    imageSrc: "/assets/images/solution-2.svg",
  },
  {
    title: "UI/UX Design",
    description: "Design intuitive and engaging user experiences.",
    imageSrc: "/assets/images/solution-3.svg",
  },
  {
    title: "Cloud Solutions",
    description: "Deploy secure and scalable cloud infrastructure.",
    imageSrc: "/assets/images/solution-4.svg",
  },
  {
    title: "Software Development",
    description: "Custom solutions built around your business logic.",
    imageSrc: "/assets/images/solution-5.svg",
  },
  {
    title: "IT Infrastructure",
    description: "Scale your backend with reliable tech foundations.",
    imageSrc: "/assets/images/solution-6.svg",
  },
  {
    title: "Cybersecurity Services",
    description: "Stay protected with enterprise-grade security.",
    imageSrc: "/assets/images/solution-7.svg",
  },
  {
    title: "QA Solutions",
    description: "Ensure performance with rigorous testing frameworks.",
    imageSrc: "/assets/images/solution-8.svg",
  },
  {
    title: "IT Consulting & Support",
    description: "Make smarter tech decisions with expert guidance.",
    imageSrc: "/assets/images/solution-9.svg",
  },
];

const Solution = () => {
  return (
    <section className="px-4 w-full mx-auto lg:w-[1160px] pt-20 py-10">
      <div className="text-center w-full mx-auto">
        <HeaderText>Smart IT Solutions That Grow With You</HeaderText>
        <SubHeaderText>
          Tailored tech to boost efficiency, security, and results.
        </SubHeaderText>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-10 justify-around">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        {solutionsData.map((item, index) => (
          <SolutionCard
            key={index}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
          />
        ))}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Solution;
