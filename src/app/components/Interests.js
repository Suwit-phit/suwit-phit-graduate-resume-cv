import Image from 'next/image';

export default function Interests() {
    return (
        // <div className="bg-blue-900 text-white p-8 rounded-lg max-w-md mx-auto mt-3 h-[445px]">
        <div className=" text-white p-8 rounded-lg max-w-md mx-auto mt-3 h-[445px]">
            <h2 className="text-xl font-bold tracking-[7px] mb-6">INTERESTS</h2>

            <div className="space-y-6">
                <div className="flex items-center space-x-4">
                    <Image src="/ui.png" alt="UX/UI" width={50} height={50} />
                    <span>UX/UI Designer</span>
                </div>

                <div className="flex items-center space-x-4">
                    <Image src="/full-stack.png" alt="Frontend Backend" width={50} height={50} />
                    <span>Frontend, Backend, Full-stack Developer</span>
                </div>

                <div className="flex items-center space-x-4">
                    <Image src="/project-management.png" alt="Project Manager" width={50} height={50} />
                    <span>Project Manager, IT Manager, QA, Business Analysis</span>
                </div>

                <div className="flex items-center space-x-4">
                    <Image src="/data-science.png" alt="Data Engineering" width={50} height={50} />
                    <span>Data Engineering, Data Analysis, Data Science</span>
                </div>

                <div className="flex items-center space-x-4">
                    <Image src="/innovation.png" alt="AI" width={50} height={50} />
                    <span>AI, Intelligent Computing</span>
                </div>
            </div>
        </div>
    );
}
