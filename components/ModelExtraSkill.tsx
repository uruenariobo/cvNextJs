import Image from 'next/image';

interface ModelExtraSkillProps {
  name: string;
}

const ModelExtraSkill: React.FC<ModelExtraSkillProps> = ({ name }) => {
  return (
    
    <div className="w-[186px] h-6 left-0 flex items-center">
      <div className="left-0 ">
        <Image src="/extraskill.svg" alt={name} />
      </div>
      <div className="left-[30px] absolute text-neutral-500 text-[15px] font-normal font-['Inter'] capitalize leading-normal">
        {name}
      </div>
    </div>
  );
};

export default ModelExtraSkill;
