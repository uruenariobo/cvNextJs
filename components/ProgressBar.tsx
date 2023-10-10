interface ProgressBarProps {
  title: string;
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ title, percentage }) => {
  const barWidth = `${percentage}%`;

  return (
    <div className="w-[220px] h-6 relative">
      <div className="flex justify-between">
        <div className="text-neutral-500 text-[15px] font-normal font-['Inter'] capitalize leading-normal">
          {title}
        </div>
        <div className="text-neutral-500 text-[15px] font-normal font-['Inter'] capitalize leading-normal">
          {percentage}%
        </div>
      </div>
      <div className="w-[220px] h-1 relative mt-1">
        <div className="w-[220px] h-1 left-0 top-0 absolute rounded-[30px] border border-yellow-500" />
        <div className="w-[220px] h-0.5 left-[1px] top-[1px] absolute bg-yellow-500 rounded-[30px]" style={{ width: barWidth }} />
      </div>
    </div>
  );
};

export default ProgressBar;
