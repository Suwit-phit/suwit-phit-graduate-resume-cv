import Image from 'next/image';
import Timeline from "../components/Timeline";

export default function RightContact() {
    return (
        // <div className="flex mt-[60px] ml-1 flex-col bg-emerald-400">
        <div className="flex mt-[10px] ml-1 flex-col ">
            <div>
                {/* <h1 className="text-4xl font-bold text-[#335384]">SAW TAR SO GAY HTOO HTOO</h1> */}
                <h1 className="text-3xl font-bold text-[rgb(51,83,132)] uppercase">suwit phithakphatphon</h1>
                <p className=" tracking-[10px] text-[#5ba7d1] text-xl font-semibold">PERSONAL PROFILE</p>
                {/* <hr className="border-t-2 border-gray-300 my-2 rounded" /> */}
                <hr className="border-t-2 border-[#eff0f2] -mt-1 my-2 w-[353px] rounded" />
            </div>
            <div className="-mt-2">
                <p className='text-lg'>
                    &nbsp;&nbsp;I am an independent and self-motivated individual with extensive volunteering and work experience. I have completed the General Educational Development (GED) program and am eager to pursue higher education to further develop my skills. I am a committed and hard-working person who actively participates in school activities, classroom discussions, group work, and volunteer initiatives. I also invest time and effort into building positive relationships with my peers and team members in the workplace.
                </p>
                <p className="text-lg">
                    &nbsp;&nbsp;I grew up in a remote village surrounded by mountains and poverty. My father passed away when I was young, and I was raised by my single mother, who has been the sole provider for our family. Despite the financial hardships, my mother’s strength and sacrifice have inspired me to stay focused on my goals and make the most of every opportunity.
                </p>
                <p className="text-lg">
                    &nbsp;&nbsp;I am now seeking the opportunity to gain real-world experience where I can apply the knowledge I’ve acquired in the classroom, embrace challenges, contribute to organizational goals, and grow professionally through continuous learning and dedication.
                </p>
                {/* <hr className="border-t-2 border-gray-300 mt-4 rounded" /> */}
                <hr className="border-t-2 border-[#eff0f2] -mt-1 my-2 w-[600px] rounded" />
                <div className="flex items-center space-x-4">
                    <Image src="/briefcase.png" alt="briefcase" width={30} height={30} />
                    <span className=' tracking-[10px] text-xl font-extrabold text-[#5ba7d1]'>WORK EXPERIENCE</span>
                </div>
            </div>
            <Timeline />
            {/* <div>03</div> */}
        </div>
    );
}

// export default function RightContact() {
//     return (
//         <div className="bg-white text-gray-800 p-8 max-w-4xl mx-auto">
//             {/* Header */}
//             <div className="text-center mb-8">
//                 <h1 className="text-4xl font-bold text-blue-900">SAW TAR SO GAY HTOO HTOO</h1>
//                 <p className="text-blue-500 text-lg font-semibold">PERSONAL PROFILE</p>
//             </div>

//             {/* Personal Profile */}
//             <div className="mb-10">
//                 <p className="text-base leading-relaxed">
//                     I am an independent and self-motivated university student with extensive volunteering
//                     and working experience, currently a 4th-year Software Engineering student at Mae Fah
//                     Luang University. I am a committed and hard-working person who is always actively
//                     taking part in university activities, classroom, group work, volunteering, and investing
//                     my time and effort in developing excellent relationships with my classmates.
//                 </p>
//                 <p className="mt-4 text-base leading-relaxed">
//                     Looking to gain further real-world experience where I can get the opportunities to prove
//                     my abilities and the things I have learned in class by accepting challenges, fulfilling
//                     organizational goals, and climbing the career ladder through continuous learning and commitment.
//                 </p>
//             </div>

//             {/* Work Experience */}
//             <div>
//                 <h2 className="text-2xl font-semibold text-blue-500 mb-4">
//                     <span role="img" aria-label="work experience icon">💼</span> WORK EXPERIENCE
//                 </h2>
//                 {/* Experience Item 1 */}
//                 <div className="border-l-4 border-blue-500 pl-4 mb-8">
//                     <h3 className="font-bold text-lg">MFU-Senior Project 1 & 2 (ATA IT - Talent Pool Database)</h3>
//                     <p className="text-sm text-gray-500">
//                         Mae Fah Luang University, Chiang Rai | Feb 2024 - Present
//                     </p>
//                     <ul className="list-disc list-inside mt-2">
//                         <li>Developed a Talent Pool Database platform for ATA IT, enabling efficient management, match, and search of employee profiles and skillsets.</li>
//                         <li>Used: React, TailwindCSS, Java-Spring Boot, Typescript, PostgreSQL, Git for version control and code collaboration.</li>
//                     </ul>
//                 </div>

//                 {/* Experience Item 2 */}
//                 <div className="border-l-4 border-blue-500 pl-4 mb-8">
//                     <h3 className="font-bold text-lg">School of Applied Digital Technology</h3>
//                     <p className="text-sm text-gray-500">
//                         Mae Fah Luang University, Chiang Rai | August 17-18, 2024
//                     </p>
//                     <ul className="list-disc list-inside mt-2">
//                         <li>Participated in hackathon competition at Mae Fah Luang University.</li>
//                         <li>Used: Vue, Nuxt, Node, JavaScript, MySQL, Git for version control and code collaboration.</li>
//                     </ul>
//                 </div>

//                 {/* Experience Item 3 */}
//                 <div className="border-l-4 border-blue-500 pl-4 mb-8">
//                     <h3 className="font-bold text-lg">MovieMM</h3>
//                     <p className="text-sm text-gray-500">
//                         Mae Fah Luang University, Chiang Rai | January 2023 - May 2023
//                     </p>
//                     <ul className="list-disc list-inside mt-2">
//                         <li>Developed a review Movie platform (CodecrabMM), designed to help users rate and improve their desiring on what they watch.</li>
//                         <li>Used: Flutter, Firebase, Dart, REST APIs, Git for version control and code collaboration.</li>
//                     </ul>
//                 </div>

//                 {/* Additional experiences follow the same structure */}
//                 <div className="border-l-4 border-blue-500 pl-4 mb-8">
//                     <h3 className="font-bold text-lg">MFU CITS (part-time)</h3>
//                     <p className="text-sm text-gray-500">
//                         Mae Fah Luang University, Chiang Rai | Feb 2023 - Present
//                     </p>
//                     <ul className="list-disc list-inside mt-2">
//                         <li>Responsible for writing articles and posting them on the website.</li>
//                         <li>Used: Vue, Nuxt, Node, JavaScript, MySQL, Git for version control and code collaboration.</li>
//                     </ul>
//                 </div>

//                 {/* More experiences */}
//                 <div className="border-l-4 border-blue-500 pl-4">
//                     <h3 className="font-bold text-lg">CodecrabMM</h3>
//                     <p className="text-sm text-gray-500">
//                         Mae Fah Luang University, Chiang Rai | Jan 2022 - May 2022
//                     </p>
//                     <ul className="list-disc list-inside mt-2">
//                         <li>Developed a product rating platform enabling users to rate and review products such as clothes, shoes, and accessories, with personalized recommendations based on user preferences.</li>
//                         <li>Used: Flutter, Firebase, Dart, Firestore Database, REST APIs, Google Cloud Functions, OAuth for authorization.</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }
