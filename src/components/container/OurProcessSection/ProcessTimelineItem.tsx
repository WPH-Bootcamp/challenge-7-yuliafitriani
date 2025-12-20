import StepBadge from "./StepBadge";
import ProcessCard from "./ProcessCard";

type ProcessTimelineItemProps = {
  step: number;
  title: string;
  description: string;
};

const ProcessTimelineItem = ({
  step,
  title,
  description,
}: ProcessTimelineItemProps) => {
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse group is-active">
      {/* CENTER STEP */}
      <StepBadge step={step} />
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
        <ProcessCard title={title} description={description} />
      </div>
    </div>
  );
};

export default ProcessTimelineItem;
