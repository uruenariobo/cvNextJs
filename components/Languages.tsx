import ProgressBar from './ProgressBar'; // Importa el componente ProgressBar que creamos anteriormente

const Languages = () => {
  return (
    <div className="w-[220px] h-[153px] relative">
      <div className="titulo-sidebar">Languages</div>
      <div className="mb-2">
        <ProgressBar title="English" percentage={80} />
      </div>
      <div className="mb-2">
        <ProgressBar title="Italian" percentage={60} />
      </div>
    </div>
  );
};

export default Languages;
