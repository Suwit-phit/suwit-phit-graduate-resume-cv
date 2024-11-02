// "use client"; // Ensures the component is a client component

// import { useState } from 'react';

// export default function Home() {
//   const [showRightArrow, setShowRightArrow] = useState(false);
//   const [showLeftArrow, setShowLeftArrow] = useState(false);

//   const handleMouseEnterRight = () => setShowRightArrow(true);
//   const handleMouseLeaveRight = () => setShowRightArrow(false);

//   const handleMouseEnterLeft = () => setShowLeftArrow(true);
//   const handleMouseLeaveLeft = () => setShowLeftArrow(false);

//   const handleRightArrowClick = () => {
//     // Navigate to the next page
//     window.location.href = '/next-page'; // Update with your actual route
//   };

//   const handleLeftArrowClick = () => {
//     // Navigate to the previous page
//     window.location.href = '/previous-page'; // Update with your actual route
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center p-4">
//         <div
//           className="relative shadow-[-10px_5px_21px_15px_rgba(0,0,0,0.3)] flex w-[1296px] h-[843px]"
//           onMouseLeave={() => { setShowRightArrow(false); setShowLeftArrow(false); }}
//         >
//           {/* Left Side with Color 335384 */}
//           <div
//             className="absolute left-0 top-0 bottom-0 w-[520px] -ml-4 bg-[#335384] z-10"
//             onMouseEnter={handleMouseEnterLeft}
//             onMouseLeave={handleMouseLeaveLeft}
//           >
//           </div>

//           {/* Right Side with Color FFFFFF */}
//           {/* <div className="relative flex w-full h-64 bg-black" */}
//           <div className="relative flex w-full bg-white"
//             onMouseEnter={handleMouseEnterRight}
//             onMouseLeave={handleMouseLeaveRight}
//           >
//             {/* <div className="w-1/2 z-20"></div> Empty div to keep the left side color */}

//             {/* Right Content */}
//             {/* <div className="w-1/2 p-6 flex items-center justify-center z-30">
//               <div className="text-center">
//                 <h2 className="text-2xl font-semibold text-gray-800">Card Title</h2>
//                 <p className="text-gray-600 mt-2">
//                   This is some content on the right side of the card.
//                 </p>
//               </div>
//             </div> */}
//           </div>

//           {/* Right Arrow - Appears when hovering near the right */}
//           {showRightArrow && (
//             <div
//               className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 z-40 cursor-pointer"
//               onClick={handleRightArrowClick}
//             >
//               <img src="/next.png" alt="Next" className="w-12 h-12" />
//             </div>
//           )}

//           {/* Left Arrow - Appears when hovering near the left */}
//           {showLeftArrow && (
//             <div
//               className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 z-40 cursor-pointer"
//               onClick={handleLeftArrowClick}
//             >
//               <img src="/back.png" alt="Back" className="w-12 h-12" />
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }


//! End
// // pages/index.js
// import ProfileSection from '../app/components/ProfileSection';
// import SkillsSection from '../app/components/SkillsSection';
// import ExperienceSection from '../app/components/ExperienceSection';
import LeftContact from '../app/components/LeftContact';
import S_LeftContact from '../app/components/secondPage/S_LeftContact';
import S_RightContact from '../app/components/secondPage/S_RightContact';
import RightContact from '../app/components/RightContact';

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center p-4">
        {/* <div className="relative shadow-[-10px_5px_21px_15px_rgba(0,0,0,0.3)] flex w-[1296px] h-[843px]"> */}
        <div className="relative shadow-[-10px_10px_21px_15px_rgba(0,0,0,0.3)] flex w-[1000px] h-[1500px]">
          {/* Left Side with Color 335384 */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-[520px] -ml-4 bg-[#335384] z-10"> */}
          <div className="absolute left-0 top-0 bottom-0 w-[380px] -ml-4 bg-[#335384] z-10">
            <LeftContact />
          </div>
          {/* <div className="absolute left-0 top-0 bottom-0 w-1/2 -ml-4 bg-[#ffffff] z-10"></div> */}
          {/* Right Side with Color FFFFFF */}
          {/* <div className="relative flex w-full h-64 bg-white"> */}
          {/* <div className="relative flex w-full bg-green-500"> */}
          {/* <div className="relative flex w-full bg-white"> */}
          {/* Empty div to keep the left side color */}
          {/* <div className=" ml-96 w-1/2 z-20 bg-slate-500"> */}
          {/* <div className=" w-[900px] bg-slate-500">
            asdf
          </div> */}
          {/* <div className="w-[615px] bg-slate-500 ml-[38%]"> */}
          <div className="w-[615px] ml-[38%]">
            {/* asdf */}
            <RightContact />
          </div>

          {/* Right Content */}
          {/* <div className="w-1/2 p-6 flex items-center justify-center z-30"> */}
          {/* <div className="w-1/2 z-30">
              <div className=""> */}
          {/* <RightContact /> */}
          {/* <h2 className="text-2xl font-semibold text-gray-800">Card Title</h2>
                <p className="text-gray-600 mt-2">
                  This is some content on the right side of the card.
                </p>
              </div> */}
          {/* </div> */}
        </div>
        {/* Cover Letter Link outside, positioned independently */}
        <div className="fixed top-20 right-4">
          <p>Please click the link below</p>
          <p>to see the Cover Letter</p>
          <a className="underline text-blue-500 hover:text-blue-300" target='blank'
            // href="https://docs.google.com/document/d/160Zd19GmuUn4um8VWZ8XTJYGrEDsKVwkBbmDXsQGBbs/edit?usp=sharing" //! KTC
            // href="https://docs.google.com/document/d/1Bw5ZL6-K72zVK475_4HK-7xv2mj9Sp1-FR3GUYzT6sA/edit?usp=sharing" //! Lapaschawal
            // href="https://docs.google.com/document/d/1B-Aji8mXRmcYDV2PJCwsoshwRVo73mcTMOLGFN00LSE/edit?usp=sharing" //! marketing flow
            // href="https://docs.google.com/document/d/1Ooij3IatD4aA0lxe4ilvVaQCDJcohyBC2QMQjzBeGSM/edit?usp=sharing" //! GDK Group
            // href="https://docs.google.com/document/d/1ylKNkYRrEneI4YGZj18wbeSeFosVbxkQX1VCaOkUMW8/edit?usp=sharing" //! Huawei
            // href="https://docs.google.com/document/d/163GxeRrus9Hsgk8OUNUjg3uDrCDObPKx_SYkfvI7fus/edit?usp=sharing" //! Agoda
            href="https://docs.google.com/document/d/10vjlslSHJBOGefWtu7UKoug2SnrZZ-yh_Xn-44lhHXU/edit?usp=sharing" //! HD
          >Cover Letter</a>
        </div>
      </div>

      {/* Second Page */}
      <div className="flex justify-center items-center p-4">
        {/* <div className="relative shadow-[-10px_5px_21px_15px_rgba(0,0,0,0.3)] flex w-[1296px] h-[843px]"> */}
        {/* left, top, */}
        <div className="relative shadow-[-10px_50px_21px_15px_rgba(0,0,0,0.3)] flex w-[1000px] h-[1690px]">
          {/* Left Side with Color 335384 */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-[520px] -ml-4 bg-[#335384] z-10"> */}
          <div className="absolute left-0 top-0 bottom-0 w-[380px] -ml-4 bg-[#335384] z-10">
            <S_LeftContact />
          </div>
          {/* <div className="w-[615px] bg-slate-500 ml-[38%]"> */}
          <div className="w-[615px] ml-[38%]">
            <S_RightContact />
          </div>
        </div>
      </div>
      {/* <div>
        <p>Please click link below to see Cover letter</p>
        <a className=' underline' href="https://shorturl.at/pxZLr">Cover Letter</a>
      </div> */}
    </>
  );
}

{/* <div className="relative flex w-full h-64 bg-white"> */ }
{/* <div className="relative flex w-full bg-white"> */ }
// <div className="w-1/2 z-20"></div> {/* Empty div to keep the left side color */}
{/* Right Content */ }
// <div className="w-1/2 p-6 flex items-center justify-center z-30">
// <div className="text-center">
{/* <RightContact /> */ }
//       <h2 className="text-2xl font-semibold text-gray-800">Card Title</h2>
//       <p className="text-gray-600 mt-2">
//         This is some content on the right side of the card.
//       </p>
//     </div>
//   </div>
// </div>

//! End
// // pages/index.js
// import ProfileSection from '../app/components/ProfileSection';
// import SkillsSection from '../app/components/SkillsSection';
// import ExperienceSection from '../app/components/ExperienceSection';

// export default function Home() {
//   return (
//     <>
//       {/* <div className="flex justify-center items-center w-full h-full"> */}
//         {/* <div className="flex justify-center items-center w-[596px] h-[843px]"> */}
//         <div className="flex justify-center items-center p-4">
//           {/* <div className="flex justify-center items-center min-h-screen bg-gray-100"> */}
//           {/* Card Container */}
//           {/* <div className="relative w-full max-w-lg shadow-lg"> */}
//           {/* <div className="relative top-4 shadow-lg"> */}
//           {/* <div className="relative shadow-lg flex w-[596px] h-[843px]"> */}
//           {/* <div className="relative shadow-md shadow-x-2 shadow-y-4 shadow-blur-4 shadow-gray-500 flex w-[596px] h-[843px]"> */}
//           {/* <div className="relative shadow-[0_4px_12px_rgba(0,0,0,0.25)] flex w-[596px] h-[843px]"> */}
//           {/* <div className="relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] flex w-[1296px] h-[843px]"> */}
//           {/* <div className="relative shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] flex w-[1296px] h-[843px]"> */}
//           <div className="relative shadow-[-10px_5px_21px_15px_rgba(0,0,0,0.3)] flex w-[1296px] h-[843px]">
//           {/* <div className="relative shadow-[-20px_-20px_60px_-15px_rgba(0,0,0,0.3)] flex w-[1296px] h-[843px]"> */}

//             {/* Left Side with Color 335384 */}
//             <div className="absolute left-0 top-0 bottom-0 w-1/2 -ml-4 bg-[#335384] z-10"></div>
//             {/* <div className="absolute left-0 top-0 bottom-0 w-1/2 -ml-4 bg-[#ffffff] z-10"></div> */}
//             {/* Right Side with Color FFFFFF */}
//             <div className="relative flex w-full h-64 bg-white">
//               <div className="w-1/2 z-20"></div> {/* Empty div to keep the left side color */}
//               {/* Right Content */}
//               <div className="w-1/2 p-6 flex items-center justify-center z-30">
//                 <div className="text-center">
//                   <h2 className="text-2xl font-semibold text-gray-800">Card Title</h2>
//                   <p className="text-gray-600 mt-2">
//                     This is some content on the right side of the card.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       {/* </div> */}
//     </>
//     // <div className="min-h-screen bg-gray-50">
//     //   <ProfileSection />
//     //   <div className="grid md:grid-cols-3">
//     //     <div className="col-span-1">
//     //       <SkillsSection />
//     //     </div>
//     //     <div className="col-span-2">
//     //       <ExperienceSection />
//     //     </div>
//     //   </div>
//     // </div>
//   );
// }


//! End
// import Image from 'next/image';

// export default function Home() {
//   return (
//     <div className="max-w-5xl mx-auto p-8 font-sans">
//       {/* Profile Section */}
//       <div className="flex items-center mb-8">
//         <div className="mr-6">
//           <Image
//             src="/profile-pic.png"
//             alt="Profile Picture"
//             width={150}
//             height={150}
//             className="rounded-full"
//           />
//         </div>
//         <div className="space-y-2">
//           <p className="text-lg">Email: <a href="mailto:6431503130@lamduan.mfu.ac.th" className="text-blue-600">6431503130@lamduan.mfu.ac.th</a></p>
//           <p className="text-lg">Phone: <a href="tel:093-443-8586" className="text-blue-600">093-443-8586</a></p>
//           <p className="text-lg">Website: <a href="https://mywebsite.com" className="text-blue-600">https://mywebsite.com</a></p>
//           <p className="text-lg">GitHub: <a href="https://github.com" className="text-blue-600">https://github.com</a></p>
//           <p className="text-lg">Facebook: <a href="https://facebook.com/profile.php?id=..." className="text-blue-600">https://facebook.com/profile.php?id=...</a></p>
//         </div>
//       </div>

//       {/* Personal Profile */}
//       <section className="mb-8">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-4">Personal Profile</h2>
//         <p className="text-gray-700">
//           I am an independent and self-motivated university student with extensive volunteering and working experience. I am currently a 4th-year Software Engineering student at Mae Fah Luang University. I am committed and hard-working, actively participating in university activities, classroom group work, and volunteering.
//         </p>
//       </section>

//       {/* Work Experience */}
//       <section>
//         <h2 className="text-3xl font-semibold text-gray-800 mb-4">Work Experience</h2>

//         {/* Experience 1 */}
//         <div className="mb-6">
//           <h3 className="text-2xl font-semibold text-blue-600">MFU-Senior Project 1 & 2 (ATA IT - Talent Pool Database)</h3>
//           <p className="text-gray-500">Mae Fah Luang University, Feb 2024 - Present</p>
//           <p className="text-gray-700">
//             Developed a Talent Pool Database platform for ATA IT, enabling efficient management of employee profiles and skillsets.
//           </p>
//           <p className="text-gray-700">
//             Technologies: React, TailwindCSS, Java-Spring Boot, Typescript, PostgreSQL, Git for version control.
//           </p>
//         </div>

//         {/* Experience 2 */}
//         <div className="mb-6">
//           <h3 className="text-2xl font-semibold text-blue-600">School of Applied Digital Technology</h3>
//           <p className="text-gray-500">Mae Fah Luang University, August 17-18, 2024</p>
//           <p className="text-gray-700">
//             Participated in a hackathon competition.
//           </p>
//           <p className="text-gray-700">
//             Technologies: Vue, Nuxt, Node, JavaScript, MySQL, Git for version control.
//           </p>
//         </div>

//         {/* Add more experiences similarly */}
//       </section>
//     </div>
//   );
// }


//! End
// import Profile from '../app/components/Profile';
// import WorkExperience from '../app/components/WorkExperience';
// import Skills from '../app/components/Skills';
// import Languages from '../app/components/Languages';
// import Contact from '../app/components/Contact';
// import Education from '../app/components/Education';

// export default function Home() {
//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
//         {/* Left Section */}
//         <div className="space-y-4">
//           <Profile />
//           <Contact />
//           <Languages />
//           <Skills />
//         </div>

//         {/* Main Content */}
//         <div className="md:col-span-2 space-y-4">
//           <WorkExperience />
//           <Education />
//         </div>
//       </div>
//     </div>
//   );
// }


//! End
// // pages/index.js
// import Header from '../app/components/Header';
// import Sidebar from '../app/components/Sidebar';
// import MainContent from '../app/components/MainContent';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white flex flex-col md:flex-row">
//       <Sidebar />
//       <main className="flex-1">
//         <Header />
//         <MainContent />
//       </main>
//     </div>
//   );
// }



//! End
// // pages/index.js
// import Header from '../app/components/Header';
// import Sidebar from '../app/components/Sidebar';
// import MainContent from '../app/components/MainContent';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
//       <div className="flex">
//         <Sidebar />
//         <MainContent />
//       </div>
//     </div>
//   );
// }


//! End
// // import NavBar from '../app/components/Contact';
// import NavBar from '../app/components/NavBar';
// import Profile from '..//app/components/Profile';
// import Skills from '../app/components/Skills';
// import Experience from '../app/components/Experience';
// import Education from '../app/components/Education';
// import Contact from '../app/components/Contact';

// export default function Home() {
//   return (
//     <div>
//       <NavBar />
//       <Profile />
//       <Skills />
//       <Experience />
//       <Education />
//       <Contact />
//     </div>
//   );
// }

//! End
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.js
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

