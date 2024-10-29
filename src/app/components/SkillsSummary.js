const SkillBar = ({ level, skill }) => {
    return (
        <div className="flex items-center mb-4">
            <div className="flex space-x-1 mr-4">
                {[...Array(4)].map((_, i) => (
                    <div
                        key={i}
                        className={`h-3 w-3 rounded-full ${i < level ? 'bg-white' : 'bg-blue-300'
                            }`}
                    ></div>
                ))}
            </div>
            <span className="text-white text-lg">{skill}</span>
        </div>
    );
};

const SkillsSummary = () => {
    const skills = [
        { skill: 'Adaptability', level: 4 },
        { skill: 'Communication', level: 3 },
        { skill: 'Foreign language', level: 3 },
        { skill: 'Ability to work under pressure', level: 3 },
        { skill: 'Critical thinking', level: 3 },
        { skill: 'Teamwork', level: 3 },
    ];

    return (
        // <div className="bg-blue-800 p-8 h-[370px] rounded-lg">
        <div className=" p-8 h-[370px] rounded-lg">
            <h2 className="text-white text-xl tracking-[7px] font-bold mb-6">SKILLS SUMMARY</h2>
            {skills.map((item, index) => (
                <SkillBar key={index} level={item.level} skill={item.skill} />
            ))}
        </div>
    );
};

export default SkillsSummary;
