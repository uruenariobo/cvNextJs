const Footer: React.FC = () => {
  return (
    <div className="w-[970px] h-[60px] relative mt-4">
      <div className="w-[970px] h-[60px] left-0 top-0 absolute bg-white" />
      <div className="w-[290px] h-6 left-[340px] top-[18px] absolute text-center"> {/* Agrega text-center para centrar el texto */}
        <div className="left-[39px] top-0 absolute text-zinc-800 text-[15px] font-normal font-['Inter'] capitalize leading-normal">
          2023 - All Rights Reserved @uruenariobo
        </div>
        <div className="w-6 h-6 left-0 top-0 absolute justify-center items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
            <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

