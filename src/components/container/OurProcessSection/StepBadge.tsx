type StepBadgeProps = {
  step: number;
};

const StepBadge = ({ step }: StepBadgeProps) => {
  return (
    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-md shadow-lg md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2 ">
      {step}
    </div>
  );
};

export default StepBadge;
