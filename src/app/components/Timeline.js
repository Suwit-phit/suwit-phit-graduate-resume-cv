// components/Timeline.js
import React from 'react';

const timelineData = [
    {
        title: "Software Engineering (volunteer)",
        // location: "Mae Fah Luang University, Chiang Rai",
        // date: "Feb 2024 - present",
        date: "Applied Digital Technology | Feb 2021 - Feb 2025",
        description: [
            "Developed a Talent Pool Database platform for organization, enabling efficient management, match and search of employee profiles and skillsets",
            "Used: Figma, React, TailwindCSS, Java-Spring Boot, Typescript, PostgreSQL, Git for version control and Code Collaboration",
        ],
    },
    {
        title: "Web Application Developer (volunteer)",
        // location: "Mae Fah Luang University, Chiang Rai",
        // date: "Feb 2024 - present",
        date: "KTP compassion | March 2025 - present",
        description: [
            "Managed web app for organization and for hackathon competition.",
            "Used: Vue, Nuxt, Node, Javascript, MongoDB, Git for version control and Code Collaboration",
        ],
    },
    {
        title: "Agoda Tech Camp Day",
        // location: "Mae Fah Luang University, Chiang Rai",
        // date: "Feb 2024 - present",
        date: "Science and Technology Park | September 11-12, 2024, 1:00 p.m. - 4:30 p.m.",
        description: [
            "Attended a workshop led by Agoda computer engineers on Create an easy app with Line Chat Bot, focusing on building user-friendly applications with CodeSandbox.",
            "Used: Code Creator, Line Chat Bot, Node.js, SQLite3, LINE App, LINE Developers Console, CodeSandbox, Google Cloud Functions, Git (version control and code collaboration)",
        ],
    },
    {
        title: "Mobile developer (MovieMM)",
        // location: "Mae Fah Luang University, Chiang Rai",
        // date: "Feb 2024 - present",
        date: "Freelance | January 2023 - May 2023",
        description: [
            "Developed a review Movie platform, designed to help user rate and improve their desiring on what they watch.",
            "Used: Figma, Flutter, Firebase, Dart, REST APIs, Git for version control and Code Collaboration",
        ],
    },
    {
        title: "CITS (part-time)",
        // location: "Mae Fah Luang University, Chiang Rai",
        // date: "Feb 2024 - present",
        date: "H3 Academy | Feb 2023 - Dec 2023",
        description: [
            "Responsible for assisting with writing articles and posting them on the website",
            "Used: Vue, Nuxt, Node, Javascript, MySQL, Git for version control and Code Collaboration",
        ],
    },
    // {
    //     title: "CodecrabMM",
    //     // location: "Mae Fah Luang University, Chiang Rai",
    //     // date: "Feb 2024 - present",
    //     date: "Mae Fah Luang University, Chiang Rai | Jan 2022- May 2022",
    //     description: [
    //         "Developed a product rating platform enabling users to rate and review products such as clothes, shoes, and accessories, with personalized recommendations based on user preferences.",
    //         "Used: Figma, Flutter, Firebase, Dart, Firestore Database, REST APIs, Google Cloud Functions, OAuth for authentication",
    //     ],
    // },
    // Add more items similarly...
];

const Timeline = () => {

    return (
        // <div className="container mx-auto p-6 bg-lime-200 h-[990px]">
        //     <div className="flex -ml-5 -mt-4 bg-cyan-400">
        <div className="container mx-auto p-6 h-[990px]">
            <div className="flex -ml-5 -mt-4">
                {/* <div className="flex-none w-6 h-[980px] bg-amber-400"> */}
                <div className="flex-none w-6 h-[980px] ">
                    <div className="flex flex-col items-center">
                        {/* Timeline Container */}
                        <div className="relative flex flex-col items-center">
                            {/* Timeline Line */}
                            {/* <div className="absolute h-full w-1 bg-blue-800"></div> */}
                            <div className="absolute h-[975px] w-1 bg-[#335384]"></div>

                            {/* Timeline Points */}
                            <div className="relative z-10 w-4 h-4 border-4 border-[#335384] rounded-full bg-white mb-10 "></div>

                            {/* Last Timeline Point with Hollow Circle */}
                            <div className="relative mt-[155px] z-10 w-4 h-4 border-4 border-[#335384] rounded-full bg-white"></div>
                            <div className="relative mt-[140px] z-10 w-4 h-4 border-4 border-[#335384] rounded-full bg-white"></div>
                            <div className="relative mt-[252px] z-10 w-4 h-4 border-4 border-[#335384] rounded-full bg-white"></div>
                            <div className="relative mt-[168px] z-10 w-4 h-4 border-4 border-[#335384] rounded-full bg-white"></div>

                            {/* T-shaped horizontal line */}
                            {/* <div className="relative rounded w-4 h-1 bg-[#335384] mt-[165px]"></div> */}
                        </div>
                    </div>
                </div>
                {/* <div className="flex-1 bg-slate-300 h-[980px]"> */}
                <div className="flex-1 w-64 h-[980px]">
                    {/* <div className="container mx-auto px-4 py-8 -mt-3"> */}
                    <div className="container w-[580px] -mt-1.5 -ml-2">
                        {timelineData.map((item, index) => (
                            // <div key={index} className="mb-8 ml-4">
                            <div key={index} className="mb-4 ml-4">
                                {/* <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white"></div> */}
                                <div className="absolute mt-2 w-3 h-3 bg-white rounded-full -left-1.5 border-[3px] border-[#335384]"></div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                {/* <h3 className="text-lg font-medium text-gray-900">{item.title}</h3> */}
                                {/* <time className="mb-1 text-sm font-normal text-gray-400"> */}
                                <time className="mb-1 text-lg font-semibold text-[#5ba7d1]">
                                    {item.date}
                                </time>
                                {/* <p className="text-lg font-light">{item.location}</p> */}
                                <ul className="list-disc pl-5 font-thin text-lg">
                                    {item.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    {/* </div> */}
                </div>
                {/* <div class="flex-1 w-32 ...">
                    03
                </div> */}
            </div>
        </div>
    );
};

export default Timeline;

//! Below code with comments
// // components/Timeline.js
// import React from 'react';

// const timelineData = [
//     {
//         title: "MFU-Senior Project 1 & 2 (ATA IT - Talent Pool Database)",
//         // location: "Mae Fah Luang University, Chiang Rai",
//         // date: "Feb 2024 - present",
//         date: "Mae Fah Luang University, Chiang Rai | Feb 2024- present",
//         description: [
//             "Developed a Talent Pool Database platform for ATA IT, enabling efficient management, match and search of employee profiles and skillsets",
//             "Used: React, TailwindCSS, Java-Spring Boot, Typescript, PostgreSQL, Git for version control and Code Collaboration",
//         ],
//         techStack: [
//             "React", "TailwindCSS", "Java-Spring Boot", "Typescript", "PostgreSQL", "Git",
//         ],
//     },
//     {
//         title: "School of Applied Digital Technology",
//         // location: "Mae Fah Luang University, Chiang Rai",
//         // date: "Feb 2024 - present",
//         date: "Mae Fah Luang University, Chiang Rai | August 17-18, 2024",
//         description: [
//             "Participated in hackathon competition at Mae Fah Luang University.",
//             "Used: Vue, Nuxt, Node, Javascript, MySQL, Git for version control and Code Collaboration",
//         ],
//         techStack: [
//             "React", "TailwindCSS", "Java-Spring Boot", "Typescript", "PostgreSQL", "Git",
//         ],
//     },
//     {
//         title: "MovieMM",
//         // location: "Mae Fah Luang University, Chiang Rai",
//         // date: "Feb 2024 - present",
//         date: "Mae Fah Luang University, Chiang Rai | January 2023 - May 2023",
//         description: [
//             "Developed a review Movie platform (CodecrabMM), designed to help user rate and improve their desiring on what they watch.",
//             "Used: Flutter, Firebase, Dart, REST APIs, Git for version control and Code Collaboration",
//         ],
//         techStack: [
//             "React", "TailwindCSS", "Java-Spring Boot", "Typescript", "PostgreSQL", "Git",
//         ],
//     },
//     // Add more items similarly...
// ];

// const Timeline = () => {
//     // const events = [
//     //     {
//     //         title: "MFU-Senior Project 1 & 2 (ATA IT - Talent Pool Database)",
//     //         location: "Mae Fah Luang University, Chiang Rai",
//     //         duration: "Feb 2024 - present",
//     //         description: [
//     //             "Developed a Talent Pool Database platform for ATA IT, enabling efficient management, match and search of employee profiles and skillsets",
//     //             "Used: React, TailwindCSS, Java-Spring Boot, Typescript, PostgreSQL, Git for version control and Code Collaboration"
//     //         ]
//     //     },
//     //     {
//     //         title: "School of Applied Digital Technology",
//     //         location: "Mae Fah Luang University, Chiang Rai",
//     //         duration: "August 17-18, 2024",
//     //         description: [
//     //             "Participated in hackathon competition at Mae Fah Luang University.",
//     //             "Used: Vue, Nuxt, Node, Javascript, MySQL, Git for version control and Code Collaboration"
//     //         ]
//     //     }
//     // ];

//     return (
//         <div className="container mx-auto p-6 bg-lime-400">
//             <div className="flex -ml-5 -mt-4 bg-cyan-400">
//                 {/* <div class="flex-none w-14 bg-amber-400">
//                     01
//                 </div> */}
//                 <div className="flex-none w-6 h-[900px] bg-amber-400">
//                     <div className="flex flex-col items-center">
//                         {/* Timeline Container */}
//                         {/* <div className="relative flex flex-col items-center h-full"> */}
//                         <div className="relative flex flex-col items-center h-[700px]">
//                             {/* Timeline Line */}
//                             {/* <div className="absolute h-full w-1 bg-blue-800"></div> */}
//                             <div className="absolute h-[700px] w-1 bg-blue-800"></div>

//                             {/* Timeline Points */}
//                             {/* <div className="relative z-10 w-6 h-6 bg-blue-800 rounded-full mb-10 "></div> */}
//                             <div className="relative z-10 w-4 h-4 border-4 border-blue-800 rounded-full bg-white mb-10 "></div>
//                             {/* <div className="relative z-10 w-4 h-4 border-4 border-blue-800 rounded-full bg-white mb-10"></div> */}
//                             {/* <div className="relative z-10 w-4 h-4 border-4 border-blue-800 rounded-full bg-white mb-10"></div> */}

//                             {/* Last Timeline Point with Hollow Circle */}
//                             <div className="relative mt-[108px] z-10 w-4 h-4 border-4 border-blue-800 rounded-full bg-white"></div>
//                             <div className="relative mt-[123px] z-10 w-4 h-4 border-4 border-blue-800 rounded-full bg-white"></div>
//                             <div className="relative mt-[123px] z-10 w-4 h-4 border-4 border-blue-800 rounded-full bg-white"></div>

//                             {/* T-shaped horizontal line */}
//                             <div className="relative w-4 h-1 bg-blue-800 mt-[150px]"></div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* <div class="flex-1 w-64 bg-slate-500">
//                     02
//                 </div> */}
//                 <div className="flex-1 w-64 bg-slate-500">
//                     {/* <div className="container mx-auto px-4 py-8 -mt-3"> */}
//                     <div className="container mx-auto -mt-1.5 -ml-2">
//                         {/* <div className="relative border-l border-blue-200 dark:border-gray-700"> */}
//                         {/* <div className="relative border-l border-[#335384] dark:border-gray-700"> */}
//                         {timelineData.map((item, index) => (
//                             // <div key={index} className="mb-8 ml-4">
//                             <div key={index} className="mb-4 ml-4">
//                                 {/* <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white"></div> */}
//                                 <div className="absolute mt-2 w-3 h-3 bg-white rounded-full -left-1.5 border-[3px] border-[#335384]"></div>
//                                 <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
//                                 {/* <time className="mb-1 text-sm font-normal text-gray-400"> */}
//                                 <time className="mb-1 text-sm font-normal text-[#5ba7d1]">
//                                     {item.date}
//                                 </time>
//                                 {/* <p className="text-sm font-light text-gray-600">{item.location}</p>
//                                 <ul className="list-disc pl-5 text-gray-700"> */}
//                                 <p className="text-sm font-light">{item.location}</p>
//                                 <ul className="list-disc pl-5">
//                                     {item.description.map((desc, i) => (
//                                         <li key={i}>{desc}</li>
//                                     ))}
//                                 </ul>
//                                 {/* <div className="mt-2">
//                                     <strong>Used:</strong>{" "}
//                                     <span className="italic">{item.techStack.join(", ")}</span>
//                                 </div> */}
//                             </div>
//                         ))}
//                     </div>
//                     {/* </div> */}
//                 </div>
//                 {/* <div class="flex-1 w-32 ...">
//                     03
//                 </div> */}
//             </div>

//             {/* {events.map((event, index) => (
//                 <div key={index} className="flex mb-10">
//                     <div className="w-1/12 flex justify-center">
//                         <div className="w-4 h-4 bg-blue-600 rounded-full mt-1"></div>
//                         <div className="w-1 bg-blue-600 flex-grow"></div>
//                     </div>
//                     <div className="w-11/12 pl-6">
//                         <h3 className="text-xl font-semibold">{event.title}</h3>
//                         <p className="text-blue-500">{event.location} | {event.duration}</p>
//                         <ul className="mt-2 list-disc pl-5">
//                             {event.description.map((item, idx) => (
//                                 <li key={idx} className="mb-1">{item}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             ))} */}
//         </div>
//     );
// };

// export default Timeline;


//! End
// // components/Timeline.js
// import React from "react";

// const timelineData = [
//     {
//         title: "MFU-Senior Project 1 & 2 (ATA IT - Talent Pool Database)",
//         location: "Mae Fah Luang University, Chiang Rai",
//         date: "Feb 2024 - present",
//         description: [
//             "Developed a Talent Pool Database platform for ATA IT, enabling efficient management, match and search of employee profiles and skillsets",
//         ],
//         techStack: [
//             "React", "TailwindCSS", "Java-Spring Boot", "Typescript", "PostgreSQL", "Git",
//         ],
//     },
//     // Add more items similarly...
// ];

// const Timeline = () => {
//     return (
// <div className="container mx-auto px-4 py-8 -mt-3">
//     {/* <div className="relative border-l border-blue-200 dark:border-gray-700"> */}
//     <div className="relative border-l border-[#335384] dark:border-gray-700">
//         {timelineData.map((item, index) => (
//             // <div key={index} className="mb-8 ml-4">
//             <div key={index} className="mb-4 ml-4">
//                 {/* <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white"></div> */}
//                 <div className="absolute mt-2 w-3 h-3 bg-white rounded-full -left-1.5 border-[3px] border-[#335384]"></div>
//                 <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
//                 <time className="mb-1 text-sm font-normal text-gray-400">
//                     {item.date}
//                 </time>
//                 <p className="text-sm font-light text-gray-600">{item.location}</p>
//                 <ul className="list-disc pl-5 text-gray-700">
//                     {item.description.map((desc, i) => (
//                         <li key={i}>{desc}</li>
//                     ))}
//                 </ul>
//                 <div className="mt-2">
//                     <strong>Used:</strong>{" "}
//                     <span className="italic">{item.techStack.join(", ")}</span>
//                 </div>
//             </div>
//         ))}
//     </div>
// </div>
//     );
// };

// export default Timeline;
