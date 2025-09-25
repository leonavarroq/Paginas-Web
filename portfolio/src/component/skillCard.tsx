// Componente auxiliar interno: SkillCard
interface SkillCardProps {
  skill: {
    id: number;
    title: string;
    description: string;
    specializations: string[];
  };
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="scale-90 backdrop-blur-sm bg-white/10 rounded-xl shadow-lg p-8 text-center hover:border hover:scale-100 border-gray-700/50 h-full transform transition-transform duration-300 2xl:p-[10%] 2xl:mx-[50px]">
      <h3 className="text-3xl font-bold text-blue-300 mb-4">
        <img
          src={"./src/assets/" + skill.title}
          alt="img"
          className="w-[56px] h-[56px] 2xl:w-1/6 2xl:h-auto"
        />
      </h3>
      <p className="text-white 2xl:text-4xl mb-6 font-bold">{skill.description}</p>
      <div className="flex flex-wrap gap-3">
        {skill.specializations.map((spec, index) => (
          <div key={index} className="w-full xl:ml-5 text-gray-400">
            <span key={index} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 2xl:size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
              <span className="mx-2 2xl:text-4xl">{spec}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SkillCard;
