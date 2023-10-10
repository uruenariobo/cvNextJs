import { FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaFacebookF, FaGithub } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import RedSocial from '@/components/RedSocial';

const Rightbar = () => {
  return (
    <nav className="flex w-16 h-full bg-white">
      <div className="w-full flex mx-auto px-6 py-8">
        <div className="w-full h-full flex flex-col items-center  text-gray-900 text-xl">
          <div className="text-zinc-800 text-lg font-bold font-['Inter'] capitalize mb-4">Links</div>
          <RedSocial icon={<FaLinkedinIn />} url="https://www.linkedin.com/in/uruenariobo/" />
          <div className="mb-4" /> {/* Espacio entre iconos */}
          <RedSocial icon={<FaGithub />} url="https://github.com/uruenariobo" />
        </div>
      </div>
    </nav>
  );
};

export default Rightbar;
