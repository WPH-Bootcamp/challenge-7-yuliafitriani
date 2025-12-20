import HeaderText from "../../ui/HeaderText/HeaderText";
import SubHeaderText from "../../ui/SubHeaderText/SubHeaderText";
import ProcessTimeline from "./ProcessTimeline";
import ProcessTimelineItem from "./ProcessTimelineItem";

const steps = [
  {
    title: "Discovery & Consultation",
    description: "Understand Your Needs & Goals",
  },
  {
    title: "Planning & Strategy",
    description: "Build a Clear, Scalable Roadmap",
  },
  {
    title: "Design & Prototyping",
    description: "Craft UX That Converts",
  },
  {
    title: "Development & Implementation",
    description: "Deliver With Speed & Precision",
  },
  {
    title: "Testing & Optimization",
    description: "Ensure Quality at Every Step",
  },
  {
    title: "Launch & Growth",
    description: "Scale, Measure & Improve Continuously",
  },
];

const OurProcess = () => {
  return (
    <section className="px-4 w-full h-[653px] mx-auto lg:w-[1160px] py-[24px]">
      <div className="text-center">
        <HeaderText>Our Process</HeaderText>
        <SubHeaderText>
          Clear steps. Smart execution. Results you can count on.
        </SubHeaderText>
      </div>
      <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <ProcessTimeline>
          {steps.map((step, index) => (
            <ProcessTimelineItem
              key={index}
              step={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </ProcessTimeline>
      </div>
    </section>
  );
};

export default OurProcess;
