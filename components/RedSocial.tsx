interface RedSocialProps {
  icon: React.ReactNode; // Acepta cualquier nodo de React como ícono
  url: string; // URL de la red social
}

const RedSocial = ({ icon, url }: RedSocialProps) => {
  return (
    
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="w-12 h-12 relative">
        <div className="w-12 h-12 left-0 top-0 absolute bg-yellow-500 rounded-full" />
        <div className="w-7 h-7 left-[10px] top-[10px] absolute justify-center items-center inline-flex">
          {icon}
        </div>
      </div>
      
    </a>
    
  );
};

export default RedSocial;
