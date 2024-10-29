"use client";

// pages/skills.js
import React from 'react';
import { Progress } from 'antd';

const skillsData = [
    { name: 'Javascript', level: 70 },
    { name: 'Typescript', level: 70 },
    { name: 'React', level: 70 },
    { name: 'Nuxt', level: 72 },
    { name: 'Java', level: 54 },
    { name: 'PostgreSQL', level: 54 },
    { name: 'MySQL', level: 56 },
    { name: 'MongoDB', level: 49 },
    { name: 'Flutter', level: 56 },
    { name: 'Firebase', level: 50 },
    { name: 'TailwindCSS', level: 70 },
    { name: 'Spring Boot', level: 56 },
    { name: 'Vuetify', level: 78 },
    { name: 'Vue', level: 72 },
    { name: 'Matlab', level: 50 },
    { name: 'Python', level: 70 },
    { name: 'Dart', level: 50 },
    { name: 'Node', level: 55 },
    { name: 'C#', level: 55 },
    { name: 'Bootstrap', level: 70 }
];

const Skills = () => {
    return (
        // <div className="bg-blue-900 text-white p-8 rounded-lg h-[590px]">
        <div className=" text-white p-8 rounded-lg h-[590px]">
            {/* <h2 className="text-3xl font-bold mb-8">SKILLS</h2> */}
            <h2 className="text-xl font-bold tracking-[7px] ml-2 mb-4 -mt-2">SKILLS</h2>
            <div className="grid grid-cols-2 gap-x-14 gap-6">
                {skillsData.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3 -ml-6">
                        <Progress
                            type="circle"
                            percent={skill.level}
                            // strokeColor="#ffffff"
                            // trailColor="#707070"
                            strokeColor="#ffffff" // Customize the color (e.g., red)
                            trailColor="#a6a6a6"
                            strokeWidth={18} 
                            format={() => ''}
                            // width={50}
                            size={30}
                        />
                        <span className="text-lg">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
