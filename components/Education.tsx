import ItemEducation from './ItemEducation';
import EtiquetaMain from './EtiquetaMain';

const Education = () => {
  return (
    <div className="w-[970px] h-auto relative flex flex-col items-center">
      {/* Renderiza la etiqueta utilizando EtiquetaMain */}
      <EtiquetaMain
        title="Education"
        description="Discover my educational journey and how it has contributed to my development as a developer and digital professional."
      />
      
      {/* Agrega un div para contener el componente ItemEducation */}
      <div className=" h-auto mt-4 flex">
          
        <ItemEducation
          title="Systems Engineering"
          institution="UdeA"
          duration="May 2019 - June 2024"
          description="The Department of Systems Engineering will be a global benchmark, recognized for its excellence in extension, research and training of well-rounded professionals who contribute to the planning, direction and execution of computational projects aimed at technological transformation for the development of society."
        />
      </div>
    </div>
  );
};

export default Education;
