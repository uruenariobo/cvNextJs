import Profile from './Profile';
import Divider from './Divider'; 
import About from './About';
import Languages from './Languages';
import Skills from './Skills';
import ExtraSkills from './ExtraSkills';

const Sidebar = () => {
  return (
    <nav className="flex w-72 h-full bg-white">
      <div className="w-full flex flex-col mx-auto px-6 py-8">
        <Profile />
        <Divider />
        <About />
        <Divider />
        <Languages />
        <Divider />
        <Skills />
        <Divider />
        <ExtraSkills />
        <Divider />
        <div className="mb-4"></div>
      </div>
    </nav>
  );
};

export default Sidebar;
