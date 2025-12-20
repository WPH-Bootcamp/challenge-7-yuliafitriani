type ProcessTimelineProps = {
  children: React.ReactNode;
};

const ProcessTimeline = ({ children }: ProcessTimelineProps) => {
  return (
    <div className="relative">
      {/* CENTER LINE */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />

      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};

export default ProcessTimeline;
