const WorkExperience = () => {
    return (
        <div className="bg-white p-6 shadow-md rounded-lg mb-4">
            <h2 className="text-xl font-bold mb-4">Work Experience</h2>

            <div className="mb-4">
                <h3 className="font-semibold">MFU - Senior Project 1 & 2 (ATA IT)</h3>
                <p className="text-gray-600">Mae Fah Luang University | Feb 2024 - Present</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Developed a Talent Pool Database platform...</li>
                    <li>Used: React, TailwindCSS, PostgreSQL...</li>
                </ul>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold">MovieMM</h3>
                <p className="text-gray-600">Mae Fah Luang University | Jan 2023 - May 2023</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Developed a review Movie platform...</li>
                    <li>Used: Flutter, Firebase, Dart...</li>
                </ul>
            </div>

            {/* Add other experiences similarly */}
        </div>
    );
};

export default WorkExperience;
