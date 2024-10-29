// components/Timeline.js
import React from 'react';
import Image from 'next/image';

import { UserGroupIcon } from '@heroicons/react/solid';

const timelineData = [
    {
        title: "MFU - ATA IT project (Loyalty program)",
        // location: "Mae Fah Luang University, Chiang Rai",
        // date: "Feb 2024 - present",
        date: "Mae Fah Luang University, Chiang Rai | August 2022- December 2022",
        description: [
            "Develop an application Loyalty Program that enables employees to collect points for participating in events.",
            "Used: Figma, Next, UI-Library, Node, Javascript, MongoDB, Git for version control and Code Collaboration",
        ],

    },
    {
        title: "MLII",
        // location: "Mae Fah Luang University, Chiang Rai",
        // date: "Feb 2024 - present",
        date: "Mae Fah Luang University, Chiang Rai | Aug 2022-Nov 2022",
        description: [
            "Add subtitle to the Professor move on the Youtube Channel",
            "Used: MFU Academy Studio, studio.youtube",
        ],

    },
    {
        title: "Student Union Member",
        // location: "Mae Fah Luang University, Chiang Rai",
        // date: "Feb 2024 - present",
        date: "Mae Fah Luang University, Chiang Rai | March 2022-Aug 2022",
        description: [
            "A part of the student union group in Mae Fah Luang University, responsible for preparing and taking part in the school's activities",
        ],

    },
    {
        title: "Music Leader and Teacher",
        // location: "Mae Fah Luang University, Chiang Rai",
        // date: "Feb 2024 - present",
        date: "Sunshine orchard learning center, Mae Song | Jun 2022- July 2022",
        description: [
            "Interned as a teacher and an music leader, taught the younger pupils music and English",
            "Managed all social media accounts and newsletter writer for the school's organization",
        ],

    },
    {
        title: "Volunteer and Internship",
        // location: "Mae Fah Luang University, Chiang Rai",
        // date: "Feb 2024 - present",
        date: "Mae Tao Clinic, Mae Sot | Sep 2019",
        description: [
            "Doing volunteer and internship at Mae Tao Clinic as a GED graduated student in the Admin department.",
        ],
    },
    // Add more items similarly...
];

const educationData = [
    {
        title: "Bachelor degree of Software Engineering",
        // location: "Mae Fah Luang University, Chiang Rai",
        // date: "Feb 2024 - present",
        date: "Mae Fah Luang University, Chiang Rai | Jun 2021 - present",
        description: [
            "Studied subjects: Web, Mobile & Platform development, Software Project Management, Software Business Entrepreneurship, Enterprise Architecture and Digital Strategy, SRAS, etc.",
        ],

    },
    {
        title: "Vocational and mechanical School",
        // location: "Mae Fah Luang University, Chiang Rai",
        // date: "Feb 2024 - present",
        date: "GAP Organization, Mae Ramat| April 2019",
        description: [
            "Studied subjects: Science, Mathematics, Physic, tech-design, Thai, Burmese, Karen, Geography, and History",
        ],

    },
    {
        title: "GED Diploma",
        // location: "Mae Fah Luang University, Chiang Rai",
        // date: "Feb 2024 - present",
        date: "BEAM Education Foundation| Apr 2019 - Jun 2018",
        description: [
            "Studied 4 subjects: Science, Social Studies, Mathematics, and Language Arts",
            "GED (General Education Development) US High School Diploma, GPA 3.14",
        ],

    },
    {
        title: "High School",
        // location: "Mae Fah Luang University, Chiang Rai",
        // date: "Feb 2024 - present",
        date: "EVA (Eden Valley Academy) Tak, Mae Lar refugee camp| Mar 2018 - Jun 2010",
        description: [
            "Studied subjects: Science, Social Studies, Mathematics, Language Arts, Community Development, English and Bible, Physic, Biology, Geography, Karen, Thai, Vocational, Civics",
        ],

    },
    // Add more items similarly...
];

const S_Timeline = () => {

    return (
        <>
            {/* <div className="container mx-auto p-6 bg-lime-200 h-[818px]">
                <div className="flex -ml-5 -mt-4 bg-cyan-400"> */}
            <div className="container mx-auto p-6 h-[818px]">
                <div className="flex -ml-5 -mt-4">
                    {/* <div className="flex-none w-6 h-[780px] bg-amber-400"> */}
                    <div className="flex-none w-6 h-[780px]">
                        <div className="flex flex-col items-center">
                            {/* Timeline Container */}
                            {/* <div className="relative flex flex-col items-center h-full"> */}
                            {/* <div className="relative flex flex-col items-center h-[700px]"> */}
                            <div className="relative flex flex-col items-center">
                                {/* Timeline Line */}
                                {/* <div className="absolute h-full w-1 bg-blue-800"></div> */}
                                <div className="absolute h-[780px] w-1 bg-[#335384]"></div>

                                {/* Timeline Points */}
                                <div className="relative z-10 w-4 h-4 border-4 border-[#335384] rounded-full bg-white mb-10 "></div>

                                {/* Last Timeline Point with Hollow Circle */}
                                <div className="relative mt-[155px] z-10 w-4 h-4 border-4 border-[#335384] rounded-full bg-white"></div>
                                <div className="relative mt-[113px] z-10 w-4 h-4 border-4 border-[#335384] rounded-full bg-white"></div>
                                <div className="relative mt-[112px] z-10 w-4 h-4 border-4 border-[#335384] rounded-full bg-white"></div>
                                <div className="relative mt-[196px] z-10 w-4 h-4 border-4 border-[#335384] rounded-full bg-white"></div>

                                {/* T-shaped horizontal line */}
                                <div className="relative rounded w-4 h-1 bg-[#335384] mt-[82px]"></div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex-1 w-64 bg-slate-300 h-[810px]"> */}
                    <div className="flex-1 w-64 h-[810px]">
                        {/* <div className="container mx-auto px-4 py-8 -mt-3"> */}
                        <div className="container mx-auto -mt-1.5 -ml-2">
                            {/* <div className="relative border-l border-blue-200 dark:border-gray-700"> */}
                            {/* <div className="relative border-l border-[#335384] dark:border-gray-700"> */}
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
                        {/* <hr className="border-t-2 border-gray-300 mt-4 rounded" /> */}
                        <hr className="border-t-2 border-[#eff0f2] mx-2 -mt-3 w-[535px] rounded" />
                    </div>
                </div>
            </div>

            {/* <div className="flex mt-9 items-center space-x-4 bg-yellow-600"> */}
            <div className="flex -mt-3 items-center space-x-4">
                <Image src="/second-page/education.png" alt="education.png" width={30} height={30} />
                <span className=' tracking-[10px] text-xl font-extrabold text-[#5ba7d1]'>EDUCATIONAL HISTORY</span>
            </div>

            {/* Second one */}
            {/* <div className="container mx-auto p-6 bg-lime-500 h-[650px] mt-[5px]">
                <div className="flex -ml-5 -mt-4 bg-cyan-400">
                    <div className="flex-none w-6 h-[650px] bg-amber-400"> */}
            <div className="container mx-auto p-6 h-[650px] mt-[0px]">
                <div className="flex -ml-5 -mt-4">
                    <div className="flex-none w-6 h-[650px]">
                        <div className="flex flex-col items-center">
                            {/* Timeline Container */}
                            <div className="relative flex flex-col items-center">
                                {/* Timeline Line */}
                                <div className="absolute h-[622px] w-1 bg-[#335384]"></div>

                                {/* Timeline Points */}
                                <div className="relative z-10 w-4 h-4 border-4 border-[#335384] rounded-full bg-white mb-10 "></div>

                                {/* Last Timeline Point with Hollow Circle */}
                                <div className="relative mt-[100px] z-10 w-4 h-4 border-4 border-[#335384] rounded-full bg-white"></div>
                                <div className="relative mt-[112px] z-10 w-4 h-4 border-4 border-[#335384] rounded-full bg-white"></div>
                                <div className="relative mt-[168px] z-10 w-4 h-4 border-4 border-[#335384] rounded-full bg-white"></div>
                                {/* <div className="relative mt-[168px] z-10 w-4 h-4 border-4 border-[#335384] rounded-full bg-white"></div> */}

                                {/* T-shaped horizontal line */}
                                <div className="relative rounded w-4 h-1 bg-[#335384] mt-[135px]"></div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex-1 w-64 bg-slate-300"> */}
                    <div className="flex-1 w-64">
                        <div className="container mx-auto -mt-1.5 -ml-2">
                            {educationData.map((item, index) => (
                                // <div key={index} className="mb-8 ml-4">
                                <div key={index} className="mb-4 ml-4">
                                    {/* <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white"></div> */}
                                    <div className="absolute mt-2 w-3 h-3 bg-white rounded-full -left-1.5 border-[3px] border-[#335384]"></div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
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
                    </div>
                </div>
                <hr className="border-t-2 border-[#eff0f2] mx-2 -mt-3 w-[535px] rounded" />
            </div>

            <div className=" -mb-2 text-blue-500 font-bold text-sm flex items-center space-x-2">
                <Image src="/second-page/referral.png" alt="education.png" width={30} height={30} />
                <span className=' tracking-[10px] text-xl font-extrabold text-[#5ba7d1]'>REFERENCE</span>
            </div>

            <div className="container mx-auto p-6 mt-[0px]">
                <div className="flex -ml-5 -mt-4">
                    <div className="flex-none w-6">
                        <div className="flex flex-col items-center">
                            {/* Timeline Container */}
                            <div className="relative flex flex-col items-center">
                                {/* Timeline Line */}
                                <div className="absolute h-[112px] mt-4 w-1 bg-[#335384]"></div>

                                {/* Timeline Points */}
                                <div className="relative mt-[6px] z-10 w-4 h-4 border-4 border-[#335384] rounded-full bg-white mb-10 "></div>

                                {/* Last Timeline Point with Hollow Circle */}
                                {/* <div className="relative mt-[100px] z-10 w-4 h-4 border-4 border-[#335384] rounded-full bg-white"></div>
                                <div className="relative mt-[112px] z-10 w-4 h-4 border-4 border-[#335384] rounded-full bg-white"></div>
                                <div className="relative mt-[168px] z-10 w-4 h-4 border-4 border-[#335384] rounded-full bg-white"></div> */}
                                {/* <div className="relative mt-[168px] z-10 w-4 h-4 border-4 border-[#335384] rounded-full bg-white"></div> */}

                                {/* T-shaped horizontal line */}
                                <div className="relative rounded w-4 h-1 bg-[#335384] mt-[63px]"></div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex-1 w-64 bg-slate-300"> */}
                    {/* <div className="mt-4 grid grid-cols-2 gap-8"> */}
                    {/* <div className=" grid grid-cols-2 gap-0 bg-lime-500"> */}
                    {/* First reference */}
                    <div className=' ml-2'>
                        <h3 className="font-semibold text-lg">Assistant Prof. Dr. Nacha Chondamrongkul</h3>
                        <p className="text-blue-500">Dean</p>
                        <ul className="mt-2 text-sm text-gray-600 space-y-1">
                            <li>• Tel: +66 (0) 5391 6757</li>
                            <li>• E-mail: nacha.cho@mfu.ac.th</li>
                        </ul>
                    </div>
                    {/* Second reference */}
                    <div className=''>
                        <h3 className="font-semibold text-lg">Anna Adams</h3>
                        <p className="text-blue-500">Sunshine Orchard Administration</p>
                        <ul className="mt-2 text-sm text-gray-600 space-y-1">
                            <li>• Tel: +66 (0) 828 841 437</li>
                            <li>• E-mail: sunshineorr.hardcenter@gmail.com</li>
                        </ul>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </>
    );
};

export default S_Timeline;

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
