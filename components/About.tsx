const About = () => {
  return (
    <div className="w-[220px] h-[126px] relative">
      <div className="mb-2 flex justify-between">
        <div className="text-titulo-about">Age:</div>
        <div className="text-titulo-about">21</div>
      </div>
      <div className="mb-2 flex justify-between">
        <div className="text-titulo-about">Residence:</div>
        <div className="text-titulo-about">CO</div>
      </div>
      <div className="mb-2 flex justify-between">
        <div className="text-titulo-about">Freelance:</div>
        <div className="text-descripcion-about">Available</div>
      </div>
      <div className="flex justify-between">
        <div className="text-titulo-about">Address:</div>
        <div className="text-titulo-about">Medellín, Colombia</div>
      </div>
    </div>
  );
};

export default About;
