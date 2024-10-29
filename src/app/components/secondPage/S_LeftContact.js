import Image from 'next/image';
// import ContactMe from '../components/ContactMe';
import Languages from "../secondPage/Languages";
import Skills from "../secondPage/Skills";
import ToolsSection from "../secondPage/ToolsSection";
import HobbiesSection from "../secondPage/HobbiesSection";
// import SkillsSummary from '../components/SkillsSummary';
// import Interests from '../components/Interests';

const Contact = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-[500px] mt-2">
                {/* <div class="flex justify-center items-center flex-col mt-10"> */}
                <div className="flex ml-8 flex-col mt-20">
                    {/* <ContactMe /> */}
                    <Languages />
                    <Skills />
                    <ToolsSection />
                    <HobbiesSection />
                    {/* <SkillsSummary />
                    <Interests /> */}
                </div>
            </div>
        </div>
    );
};

export default Contact;

//! Below code is good
// import Image from 'next/image';
// import ContactMe from '../components/ContactMe';

// const SkillBar = ({ level, skill }) => {
//     return (
//         <div className="flex items-center mb-4">
//             <div className="flex space-x-1 mr-4">
//                 {[...Array(4)].map((_, i) => (
//                     <div
//                         key={i}
//                         className={`h-3 w-3 rounded-full ${i < level ? 'bg-white' : 'bg-blue-300'
//                             }`}
//                     ></div>
//                 ))}
//             </div>
//             <span className="text-white text-lg">{skill}</span>
//         </div>
//     );
// };

// const Contact = () => {
//     const skills = [
//         { skill: 'Adaptability', level: 4 },
//         { skill: 'Communication', level: 3 },
//         { skill: 'Foreign language', level: 2 },
//         { skill: 'Ability to work under pressure', level: 3 },
//         { skill: 'Critical thinking', level: 3 },
//         { skill: 'Teamwork', level: 3 },
//     ];

//     return (
//         <div className="flex justify-center items-center">
//             {/* <div class=" bg-orange-300 w-[500px] grid place-content-center h-48 ..."> */}
//             {/* <div className=" bg-orange-600 w-[500px] mt-2"> */}
//             <div className="w-[500px] mt-2">
//                 <div className="flex justify-center">
//                     {/* <img src="picture.png" alt="Your Image" className="w-[220px] h-[220px] object-cover rounded-full mt-20" /> */}
//                     <Image
//                         src="/picture.png" // Adjust path based on your image location
//                         alt="Your Image"
//                         width={1000}
//                         height={1000}
//                         className="w-[160px] h-[175px] object-cover rounded-full mt-14"
//                     />
//                 </div>
//                 {/* <div class="flex justify-center items-center flex-col mt-10"> */}
//                 <div className="flex ml-8 flex-col mt-10">
//                     <div className=" bg-slate-600 mt-4 text-white">CONTACT ME AT</div>
//                     <div className="mr-2 flex flex-row bg-emerald-500 mt-2">
//                         <div className="mr-2 w-8 bg-slate-400">
//                             <Image
//                                 src="/mail.png" // Adjust path based on your image location
//                                 alt="Your Image"
//                                 width={1000}
//                                 height={1000}
//                                 className="w-[40px] h-[30px]"
//                             />
//                         </div>
//                         <div className="mt-1 w-20 text-lg bg-indigo-200">6431503130@lamduan.mfu.ac.th</div>
//                     </div>
//                     <div className="mr-2 flex flex-row mt-2">
//                         <div className="mr-2 w-8">
//                             <Image
//                                 src="/phone.png" // Adjust path based on your image location
//                                 alt="Your Image"
//                                 width={1000}
//                                 height={1000}
//                                 className="w-[40px] h-[30px]"
//                             />
//                         </div>
//                         <div className="mt-1 text-lg text-white">093-443-8586</div>
//                     </div>
//                     <div className="mr-2 flex flex-row mt-2">
//                         <div className="mr-2 w-8">
//                             <Image
//                                 src="/website.png" // Adjust path based on your image location
//                                 alt="Your Image"
//                                 width={1000}
//                                 height={1000}
//                                 className="w-[40px] h-[30px]"
//                             />
//                         </div>
//                         <a className="mt-1 w-20 text-white text-lg hover:text-slate-500" href='https://chatgpt.com/c/6717b402-0ca8-8000-834c-f0d08012f56a' target='blank'>https://mywebsite.com</a>
//                     </div>
//                     <div className="mr-2 flex flex-row mt-2">
//                         <div className="mr-2 w-8">
//                             <Image
//                                 src="/git.png" // Adjust path based on your image location
//                                 alt="Your Image"
//                                 width={1000}
//                                 height={1000}
//                                 className="w-[40px] h-[30px]"
//                             />
//                         </div>
//                         <p className="mt-1 w-20 text-lg text-white" >https://github.com</p>
//                     </div>
//                     <div className="mr-2 flex flex-row mt-2">
//                         <div className="mr-2 w-8">
//                             <Image
//                                 src="/facebook.png" // Adjust path based on your image location
//                                 alt="Your Image"
//                                 width={1000}
//                                 height={1000}
//                                 className="w-[40px] h-[30px]"
//                             />
//                         </div>
//                         <a className="mt-1 text-lg text-white hover:text-slate-500" target='blank' href='https://www.facebook.com/profile.php?id=100010304749441&mibextid=ZbWKwL'>Tar Soegay</a>
//                     </div>
//                     <ContactMe />
//                     <div className=" bg-slate-600 mt-8 text-white">SKILLS SUMMARY</div>
//                     {/* <div className="bg-blue-800 p-8 rounded-lg"> */}
//                     <div className=" p-8 rounded-lg">
//                         <h2 className="text-white text-2xl font-bold mb-6">Skills Summary</h2>
//                         {skills.map((item, index) => (
//                             <SkillBar key={index} level={item.level} skill={item.skill} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;

//! Below with comments
// import Image from 'next/image';

// const Contact = () => {
//     return (
//         // <div className="bg-white p-6 shadow-md rounded-lg mb-4">
//         // <div className="flex justify-center items-center">
//         //     <div className=" bg-slate-400 w-[500px] mt-2">
//         //         <div className="bg-red-300 w-10 h-10 mt-20">

//         //         </div>
//         //     </div>

//         // </div>
//         // <div className="flex justify-center items-center">
//         //     <div className="bg-slate-400 w-[500px] mt-2">
//         //         {/* <div className="flex justify-center items-center bg-red-300 w-10 h-10 mt-20">
//         //         </div> */}

//         //     </div>
//         // </div>

//         <div className="flex justify-center items-center">
//             {/* <div class=" bg-orange-300 w-[500px] grid place-content-center h-48 ..."> */}
//             <div className=" bg-orange-600 w-[500px] mt-2">
//                 {/* <div className=" bg-orange-300 w-[500px] grid place-content-center mt-2"> */}
//                 {/* <div className=" bg-slate-400 w-[250px] h-[250px]  mt-20 rounded-full"> */}
//                 {/* <img src="picture.png" alt="Your Image" className="w-full h-full object-cover rounded-full" /> */}
//                 {/* <img src="picture.png" alt="Your Image" className="w-[120%] h-[70%] object-cover rounded-full mt-8" /> */}
//                 <div className="flex justify-center">
//                     {/* <img src="picture.png" alt="Your Image" className="w-[220px] h-[220px] object-cover rounded-full mt-20" /> */}
//                     <Image
//                         src="/picture.png" // Adjust path based on your image location
//                         alt="Your Image"
//                         width={1000}
//                         height={1000}
//                         className="w-[160px] h-[175px] object-cover rounded-full mt-14"
//                     />
//                 </div>
//                 {/* <div class="flex justify-center items-center flex-col mt-10"> */}
//                 <div className="flex ml-8 flex-col mt-10">
//                     <div className=" bg-slate-600 mt-4 text-white">CONTACT ME AT</div>
//                     <div className="mr-2 flex flex-row bg-emerald-500 mt-2">
//                         <div className="mr-2 w-8 bg-slate-400">
//                             <Image
//                                 src="/mail.png" // Adjust path based on your image location
//                                 alt="Your Image"
//                                 width={1000}
//                                 height={1000}
//                                 className="w-[40px] h-[30px]"
//                             />
//                         </div>
//                         <div className="mt-1 w-20 text-base bg-indigo-200">6431503130@lamduan.mfu.ac.th</div>
//                     </div>
//                     <div className="mr-2 flex flex-row bg-emerald-500 mt-2">
//                         <div className="mr-2 w-8 bg-slate-400">
//                             <Image
//                                 src="/phone.png" // Adjust path based on your image location
//                                 alt="Your Image"
//                                 width={1000}
//                                 height={1000}
//                                 className="w-[40px] h-[30px]"
//                             />
//                         </div>
//                         <div className="mt-1 text-lg bg-indigo-200">093-443-8586</div>
//                     </div>
//                     <div className="mr-2 flex flex-row bg-emerald-500 mt-2">
//                         <div className="mr-2 w-8 bg-slate-400">
//                             <Image
//                                 src="/website.png" // Adjust path based on your image location
//                                 alt="Your Image"
//                                 width={1000}
//                                 height={1000}
//                                 className="w-[40px] h-[30px]"
//                             />
//                         </div>
//                         <a className="mt-1 w-20 text-white text-lg bg-indigo-200 hover:text-slate-500" href='https://chatgpt.com/c/6717b402-0ca8-8000-834c-f0d08012f56a' target='blank'>https://mywebsite.com</a>
//                     </div>
//                     <div className="mr-2 flex flex-row bg-emerald-500 mt-2">
//                         <div className="mr-2 w-8 bg-slate-400">
//                             <Image
//                                 src="/git.png" // Adjust path based on your image location
//                                 alt="Your Image"
//                                 width={1000}
//                                 height={1000}
//                                 className="w-[40px] h-[30px]"
//                             />
//                         </div>
//                         <p className="mt-1 w-20 text-lg bg-indigo-200" >https://github.com</p>
//                     </div>
//                     <div className="mr-2 flex flex-row bg-emerald-500 mt-2">
//                         <div className="mr-2 w-8 bg-slate-400">
//                             <Image
//                                 src="/facebook.png" // Adjust path based on your image location
//                                 alt="Your Image"
//                                 width={1000}
//                                 height={1000}
//                                 className="w-[40px] h-[30px]"
//                             />
//                         </div>
//                         <a className="mt-1 text-lg text-white bg-indigo-200 hover:text-slate-500" target='blank' href='https://www.facebook.com/profile.php?id=100010304749441&mibextid=ZbWKwL'>Tar Soegay</a>
//                     </div>
//                     <div>03</div>
//                 </div>


//                 {/* </div> */}
//                 {/* <div className=" bg-slate-400 mt-20">
//                     <img src="/back.png" alt="Back" className="w-12 h-12" />
//                 </div> */}
//                 {/* <div className=" bg-slate-600 mt-4 text-center text-white">CONTACT ME AT</div> */}
//                 <div className=" bg-slate-600 mt-4 text-white">CONTACT ME AT</div>
//                 <div className=" bg-slate-600 mt-1 text-white">
//                     <div className="grid grid-cols-2 place-content-center">
//                         <div class="flex ... bg-neutral-400">
//                             {/* <div class="flex-none w-14 h-14 ...">
//                                 01
//                             </div> */}
//                             <div class="grow bg-emerald-500">
//                                 02
//                             </div>
//                             <div class="flex-none w-full bg-cyan-300">
//                                 03asdfasdasdfasdfsdadf
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;

{/* <h2 className="text-xl font-bold mb-4">Contact</h2>
            <ul className="list-disc ml-6">
                <li>Email: 6431503130@lamduan.mfu.ac.th</li>
                <li>Phone: 093-443-8586</li>
                <li>Website: <a href="https://mywebsite.com" className="text-blue-500">https://mywebsite.com</a></li>
                <li>GitHub: <a href="https://github.com" className="text-blue-500">GitHub Profile</a></li>
            </ul> */}