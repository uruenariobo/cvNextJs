import Header from './Header';
import MyKnowledge from './MyKnowledge';
import Education from './Education';
import Portfolio from './Portfolio';
import Footer from './Footer';

const MainSection = () => {
  return (
    <div className="w-[988px] px-[9px] grid grid-rows-auto gap-y-42">
      <Header />
      <MyKnowledge />
      <Education />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default MainSection;
