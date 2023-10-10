interface EtiquetaMainProps {
  title: string;
  description: string;
}

const EtiquetaMain: React.FC<EtiquetaMainProps> = ({ title, description }) => {
  return (
    <div className="text-center mt-8">
      <div className="text-zinc-800 text-[32px] font-bold font-['Inter'] capitalize leading-10">{title}</div>
      <div className="w-[438px] h-auto mt-4 flex items-center justify-center text-center text-neutral-500 text-[15px] font-normal font-['Inter'] leading-normal">{description}</div>
    </div>
  );
};

export default EtiquetaMain;
