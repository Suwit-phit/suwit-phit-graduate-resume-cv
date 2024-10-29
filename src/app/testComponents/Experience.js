// components/Experience.js
const Experience = () => (
    <section className="p-6">
        <h2 className="text-3xl font-bold">Work Experience</h2>
        <div className="mt-4 space-y-6">
            <div>
                <h3 className="text-xl font-semibold">MFU Senior Project - Talent Pool Database</h3>
                <p className="text-sm">Feb 2024 - present</p>
                <p>Developed a Talent Pool Database platform for ATA IT...</p>
                <p className="text-sm text-gray-500">Technologies: React, TailwindCSS, Spring Boot, PostgreSQL</p>
            </div>
            <div>
                <h3 className="text-xl font-semibold">MovieMM Platform</h3>
                <p className="text-sm">Jan 2023 - May 2023</p>
                <p>Developed a review Movie platform (CodecrabMM)...</p>
                <p className="text-sm text-gray-500">Technologies: Flutter, Firebase, Dart</p>
            </div>
        </div>
    </section>
);

export default Experience;



//! End
// export default function Experience() {
//     return (
//         <section id="experience" className="py-10">
//             <h2 className="text-2xl font-bold text-center mb-6">Work Experience</h2>
//             <div className="space-y-6">
//                 <div>
//                     <h3 className="text-xl font-bold">ATA IT - Talent Pool Database</h3>
//                     <p>Developed a platform for managing employee profiles using React, Spring Boot, and PostgreSQL.</p>
//                     <p>Feb 2024 - Present</p>
//                 </div>
//                 <div>
//                     <h3 className="text-xl font-bold">MFU CITS (Part-time)</h3>
//                     <p>Assisted with writing articles and managing web content using Vue, Nuxt, and MySQL.</p>
//                     <p>Feb 2023 - Present</p>
//                 </div>
//                 <div>
//                     <h3 className="text-xl font-bold">MovieMM Platform</h3>
//                     <p>Developed a movie review platform using Flutter and Firebase.</p>
//                     <p>Jan 2023 - May 2023</p>
//                 </div>
//             </div>
//         </section>
//     );
// }
