import KnowledgeItem from './KnowledgeItem';
import EtiquetaMain from './EtiquetaMain'; // Importa el componente EtiquetaMain
import { FaCode, FaPaintBrush, FaVolumeUp } from 'react-icons/fa'; // Importa los iconos deseados desde react-icons

const MyKnowledge: React.FC = () => {
  return (
    <div className="w-[970px] h-auto relative flex flex-col items-center justify-start">
      {/* Invoca el componente EtiquetaMain */}
      <EtiquetaMain
        title="my Knowledge"
        description="I'm a seasoned Software Developer proficient in Java, Javascript, Python, C, C++ and C#. My expertise spans cloud computing and quality assurance, with a strong focus on efficient database management."
      />

      {/* KnowledgeItem Section */}
      <div className="flex justify-center mt-4">
        <KnowledgeItem
          title="web development"
          description="blog, e-commerce"
          icon={FaCode} // Icono de desarrollo web
        />
        <KnowledgeItem
          title="ui/ux design"
          description="mobile app, website design"
          icon={FaPaintBrush} // Icono de diseño UI/UX
        />
        <KnowledgeItem
          title="sound design"
          description="voice over, beat making"
          icon={FaVolumeUp} // Icono de diseño de sonido
        />
      </div>
      {/* End of KnowledgeItem Section */}
    </div>
  );
};

export default MyKnowledge;
