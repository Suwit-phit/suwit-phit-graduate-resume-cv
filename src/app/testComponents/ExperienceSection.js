// components/ExperienceSection.js
const ExperienceSection = () => (
    <div className="p-8">
        <h2 className="text-2xl font-bold">Work Experience</h2>
        <div className="mt-4 space-y-8">
            <div>
                <h3 className="text-xl font-semibold">MFU-Senior Project 1 & 2 (ATA IT - Talent Pool Database)</h3>
                <p className="text-gray-700">Mae Fah Luang University, Feb 2024 - Present</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li>Developed a Talent Pool Database platform...</li>
                    <li>Used: React, TailwindCSS, Java-Spring Boot, PostgreSQL...</li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold">School of Applied Digital Technology</h3>
                <p className="text-gray-700">Mae Fah Luang University, Aug 2024</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li>Participated in a hackathon competition...</li>
                    <li>Used: Vue, Nuxt, Node.js, MySQL...</li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold">MovieMM</h3>
                <p className="text-gray-700">Mae Fah Luang University, Jan 2023 - May 2023</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li>Developed a review movie platform (CodecrabMM)...</li>
                    <li>Used: Flutter, Firebase, Dart, REST APIs...</li>
                </ul>
            </div>

            {/* Add other work experiences */}
        </div>
    </div>
);

export default ExperienceSection;
