import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="w-[970px] h-[467.09px] relative">
      <div className="w-[970px] h-[467px] left-0 top-0 absolute bg-white" />
      <div className="w-[500px] left-[60px] top-[93px] absolute">
        <span className="text-zinc-800 text-5xl font-bold font-['Inter'] leading-[59.33px]">I’m Miguel Urueña<br/></span>
        <span className="text-yellow-500 text-5xl font-bold font-['Inter'] leading-[59.33px]">Back-end</span>
        <span className="text-zinc-800 text-5xl font-bold font-['Inter'] leading-[59.33px]"> Developer </span>
      </div>
      <div className="w-[424px] h-[88px] left-[60px] top-[229px] absolute text-neutral-500 text-base font-normal font-['Inter'] leading-normal">
        From writing clean code to ensuring top-notch solutions, I thrive in backend web development. I'm enthusiastic about contributing my skills to drive seamless user experiences and innovative solutions.
      </div>
      <Image className="w-[325.72px] h-[459.09px] left-[592px] top-[8px] absolute" src="https://media.licdn.com/dms/image/D4E03AQH9OLlY7HkdLg/profile-displayphoto-shrink_800_800/0/1681477984393?e=1702512000&v=beta&t=gxWPc9MHU-YicDsS3QBNQuYO8uJaqjyvkce8zTtddTQ" alt="Texto descriptivo"/>
      <div className="w-[154px] h-[51px] left-[60px] top-[328px] absolute">
        <button className="dialog-button" onClick={handleOpenDialog}>
          HIRE ME
        </button>
        {isDialogOpen && (
          <div className="dialog-overlay">
            <div className="dialog-box">
              <div className="dialog-title">Gusto en conocerte</div>
              <div className="dialog-message">
                Puedes contactarme en miguel.uruena@udea.edu.co
              </div>
              <button className="dialog-button" onClick={handleCloseDialog}>
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
