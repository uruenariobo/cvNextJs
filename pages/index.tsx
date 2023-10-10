import Sidebar from '@/components/Sidebar';
import Main from '@/components/Main';
import Rightbar from '@/components/Rightbar';

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-100 text-white">
      {/* Sidebar fijo en la izquierda */}
      <div className="fixed left-0 top-0 h-screen">
        <Sidebar />
      </div>
      {/* Contenedor principal */}
      <div className="flex-grow flex flex-col items-center justify-start overflow-y-scroll bg-gray-100">
        {/* Espacio vacío para centrar el contenido en la parte superior */}
        <div className="flex-grow flex-shrink-0 w-1/2"></div>
        {/* Contenido principal */}
        <div className="w-1/2">
          <Main />
        </div>
      </div>
      {/* Rightbar fijo en la derecha */}
      <div className="fixed right-0 top-0 h-screen">
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
