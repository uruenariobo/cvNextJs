import { IconType } from 'react-icons';

interface KnowledgeItemProps {
  title: string;
  description: string;
  icon: IconType; // Tipo para el ícono de React
}

const KnowledgeItem: React.FC<KnowledgeItemProps> = ({ title, description, icon: Icon }) => (
  <div className="w-[310px] h-[225px] m-2 bg-white flex flex-col justify-center items-center mt-1">
    
    <Icon size={80} className="text-yellow-500 mb-4" /> {/* Tamaño el doble y margen hacia abajo */}
    <div className="text-zinc-800 text-lg font-medium font-['Inter'] capitalize leading-snug text-center">{title}</div>
    <div className="text-center text-neutral-500 text-[15px] font-normal font-['Inter'] capitalize leading-normal">{description}</div>
  </div>
);

export default KnowledgeItem;
