import ProgressBar from './ProgressBar'; // Importa el componente ProgressBar que creamos anteriormente

const Skills = () => {
  return (
    <div className="w-[220px] h-[153px] relative">
      <div className="titulo-sidebar">Programming Languages</div>
      <div className="mb-2">
        <ProgressBar title="Java" percentage={90} />
      </div>
      <div className="mb-2">
        <ProgressBar title="Python" percentage={50} />
      </div>
    </div>
  );
};


export default Skills;
