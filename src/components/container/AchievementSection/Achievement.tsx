import RoundedCard from "../Card/RoundedCard";
import HeaderText from "../../ui/HeaderText/HeaderText";
import SubHeaderText from "../../ui/SubHeaderText/SubHeaderText";

const Achievement = () => {
  return (
    <section className="px-4 w-full min-h-[688px] mx-auto lg:w-[1160px] lg:h-[598px] lg:py-[64px] place-content-center">
      <div className="text-center h-[143px] lg:h-[99px] lg:mb-[84px]">
        <HeaderText>End-to-End IT Solutions That Drive Results</HeaderText>
        <SubHeaderText>
          From strategy to execution, we deliver solutions that grow your
          business.
        </SubHeaderText>
      </div>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 md:grid-cols-4">
        <RoundedCard value="50+" label="Projects Delivered" />
        <RoundedCard value="5+" label="Years of Experience" />
        <RoundedCard value="10+" label="Industry Awards Won" />
        <RoundedCard value="100%" label="Client Satisfaction Rate" />
      </div>
    </section>
  );
};

export default Achievement;
