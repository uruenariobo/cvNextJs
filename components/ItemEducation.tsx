interface ItemEducationProps {
  title: string;
  institution: string;
  duration: string;
  description: string;
}

const ItemEducation: React.FC<ItemEducationProps> = ({ title, institution, duration, description }) => {
  return (
    <div className="w-[904px] h-[150px] left-[37px] absolute bg-white">
      <div className="left-0 top-[4px] absolute text-zinc-800 text-lg font-medium font-['Inter'] capitalize leading-snug">{title}</div>
      <div className="left-0 top-[50px] absolute text-zinc-800 text-[15px] font-normal font-['Inter'] capitalize leading-normal">{institution}</div>
      <div className="w-[111px] h-[18px] left-[78px] top-[53px] absolute">
          <div className="w-[111px] h-[18px] left-0 top-0 absolute bg-yellow-500 rounded-[1px]" />
          <div className="left-[7px] top-[4px] absolute text-white text-[10px] font-normal font-['Inter'] leading-[10.09px]">{duration}</div>
      </div>
      <div className="left-[368px] top-0 absolute text-zinc-800 text-lg font-medium font-['Inter'] capitalize leading-snug">Description</div>
      <div className="w-[536px] h-[100px] left-[368px] top-[50px] absolute text-neutral-500 text-[15px] font-normal font-['Inter'] capitalize leading-normal">{description}</div>
    </div>
  );
};

export default ItemEducation;
