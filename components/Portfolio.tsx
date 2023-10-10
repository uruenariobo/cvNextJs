import React, { useState } from 'react';
import EtiquetaMain from './EtiquetaMain';
import Image from 'next/image';

interface PortfolioItemProps {
  title: string;
  description: string;
  imageUrl: string;
  dialogMessage: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, imageUrl, dialogMessage }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="w-[310px] h-[474px] relative">
      <div className="w-[310px] h-[474px] left-0 top-0 absolute bg-white" />
      <Image className="w-[310px] h-[300px] left-0 top-0 absolute" src={imageUrl} alt={title} width={310} height={300}/>
      <div className="left-[25px] top-[325px] absolute text-zinc-800 text-lg font-medium font-['Inter'] capitalize leading-snug">
        {title}
      </div>
      <div className="w-[268px] h-[70px] left-[25px] top-[355px] absolute text-neutral-500 text-[15px] font-normal font-['Inter'] capitalize leading-normal">
        {description}
      </div>
      <div className="w-[119px] h-6 left-[25px] top-[434px] absolute">
        <button
          className="left-0 top-0 absolute text-yellow-500 text-lg font-medium font-['Inter'] capitalize leading-snug"
          onClick={handleOpenDialog}
        >
          Learn more
        </button>
        <div className="w-5 h-5 left-[99px] top-[4px] absolute" />
      </div>

      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <div className="dialog-title">{title}</div>
            <div className="dialog-message">
              {dialogMessage}
            </div>
            <button className="dialog-button" onClick={handleCloseDialog}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Portfolio: React.FC = () => {
  const portfolioItems: PortfolioItemProps[] = [
    {
      title: 'Web Development Project 1',
      description: 'Nullam euismod justo sed est convallis, non iaculis urna vulputate. Cras tincidunt sem eu lectus lacinia congue.',
      imageUrl: 'https://atifkhan.tech/wp-content/uploads/2022/11/Image-1.png',
      dialogMessage: 'This is a web development project. You can contact me at contact@example.com for more information.',
    },
    {
      title: 'Web Development Project 2',
      description: 'Nulla facilisi. Aliquam tristique vestibulum sapien, eu sagittis metus sodales id.',
      imageUrl: 'https://atifkhan.tech/wp-content/uploads/2022/11/Image-1.png',
      dialogMessage: 'This is another web development project. Feel free to reach out for details at contact@example.com.',
    },
    {
      title: 'Web Development Project 3',
      description: 'Nam volutpat, elit in euismod tincidunt, nulla arcu lacinia ligula, sed rutrum nunc justo a felis.',
      imageUrl: 'https://atifkhan.tech/wp-content/uploads/2022/11/Image-1.png',
      dialogMessage: 'Yet another web development project. Contact me at contact@example.com for inquiries.',
    },
  ];

  return (
    <div className="w-[970px] h-auto flex-col justify-start items-center gap-[33px] inline-flex mt-40">
      <EtiquetaMain
        title="Portfolio"
        description="Explore a sample of my web development projects. From web templates to custom web applications, these projects showcase my skills and creativity in the field of web development. Click 'Learn more' to get details about each project."
      />
      <div className="self-stretch justify-start items-center gap-[72px] inline-flex">
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            dialogMessage={item.dialogMessage}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
