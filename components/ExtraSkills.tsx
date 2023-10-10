import ModelExtraSkill from './ModelExtraSkill';

const ExtraSkills = () => {
  return (
    <div className="w-[220px] h-[153px] relative">
      <div className="titulo-sidebar mb-4">Extra Skills</div>
      <div className="my-4">
        <ModelExtraSkill name="Agile/Scrum methodology" />
      </div>

      <div className="my-4">
        <ModelExtraSkill name="GIT Knowledge" />
      </div>
    </div>
  );
};

export default ExtraSkills;
