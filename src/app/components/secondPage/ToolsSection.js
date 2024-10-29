// import Image from 'next/image';

// const tools = [
//     { name: 'Visual Studio Code', icon: '/second-page/vsc.png' },
//     { name: 'pgAdmin 4', icon: '/second-page/pgAdmin.png' },
//     { name: 'Visual Studio', icon: '/second-page/vs.png' },
//     { name: 'MySQL Workbench', icon: '/second-page/MySQLWorkbench (1).png' },
//     { name: 'Postman', icon: '/second-page/postman-icon (2).svg' },
//     { name: 'MongoDB Compass', icon: '/second-page/MC (1).png' },
//     { name: 'IntelliJ', icon: '/second-page/intellij.png' },
//     { name: 'Figma', icon: '/second-page/figma.png' },
//     { name: 'Github', icon: '/second-page/github_.png' },
//     { name: 'Docker', icon: '/second-page/docker.png' },
//     { name: 'Gitlab', icon: '/second-page/gitlab.png' },
//     { name: 'DBeaver', icon: '/second-page/DBeaver_logo (1).png' },
//     { name: 'Anaconda-Navigator', icon: '/second-page/Anaconda_Logo (1).png' },
// ];

// export default function ToolsSection() {
//     return (
//         <div className="bg-blue-500 text-white p-10">
//             <h1 className="text-xl font-bold tracking-[7px] mb-4 -mt-5">TOOLS</h1>
//             <div className="grid grid-cols-2 gap-x-[45px] gap-6 -ml-10 gap-y-[10px] bg-slate-500">
//                 {tools.slice(0, 10).map((tool, index) => (
//                     <div key={index} className="flex items-center gap-x-1 space-x-2 w-[160px] bg-red-300">
//                         <Image
//                             src={tool.icon}
//                             alt={tool.name}
//                             width={40}
//                             height={40}
//                         />
//                         <span className="text-lg">{tool.name}</span>
//                     </div>
//                 ))}

//                 {/* Last row with 3 items */}
//                 {/* <div className="col-span-2 flex justify-center gap-x-6 mt-4">
//                     {tools.slice(10).map((tool, index) => (
//                         <div key={index} className="flex items-center gap-x-2 w-[200px] bg-red-300">
//                             <Image
//                                 // src={tool[12].icon}
//                                 src={tools[12].icon}
//                                 alt={tools[12].name}
//                                 width={40}
//                                 height={40}
//                             />
//                             <span className="text-lg">{tools[12].name}</span>
//                         </div>
//                     ))}
//                 </div> */}
//             </div>
//         </div>
//     );
// }


import Image from 'next/image';

const tools = [
    { name: 'Visual Studio Code', icon: '/second-page/vsc.png' },
    { name: 'pgAdmin 4', icon: '/second-page/pgAdmin.png' },
    { name: 'Visual Studio', icon: '/second-page/vs.png' },
    { name: 'MySQL Workbench', icon: '/second-page/MySQLWorkbench (1).png' },
    { name: 'Postman', icon: '/second-page/postman-icon (2).svg' },
    { name: 'MongoDB Compass', icon: '/second-page/MC (1).png' },
    { name: 'IntelliJ', icon: '/second-page/intellij.png' },
    { name: 'Figma', icon: '/second-page/figma.png' },
    { name: 'Github', icon: '/second-page/github_.png' },
    { name: 'Docker', icon: '/second-page/docker.png' },
    { name: 'Gitlab', icon: '/second-page/gitlab.png' },
    { name: 'DBeaver', icon: '/second-page/DBeaver_logo (1).png' },
    // { name: 'Anaconda-Navigator', icon: '/second-page/Anaconda_Logo (1).png' },
];

export default function ToolsSection() {
    return (
        // <div className="bg-blue-500 text-white p-10 h-[450px]">
        <div className=" text-white p-10 h-[450px]">
            {/* <h1 className="text-3xl font-bold mb-8">TOOLS</h1> */}
            <h1 className="text-xl font-bold tracking-[7px] mb-4 -mt-5">TOOLS</h1>
            {/* <div className=" -mt-2 grid grid-cols-2 gap-x-[45px] gap-6 -ml-10 gap-y-[10px] bg-slate-500"> */}
            <div className=" -mt-2 grid grid-cols-2 gap-x-[45px] gap-6 -ml-10 gap-y-[10px]">
                {tools.map((tool, index) => (
                    // <div key={index} className="flex items-center gap-x-1 space-x-2 w-[160px] bg-red-300">
                    <div key={index} className="flex items-center gap-x-1 space-x-2 w-[160px]">
                        {/* <img src={tool.icon} alt={tool.name} className="h-10 w-10" /> */}
                        <Image
                            src={tool.icon}
                            alt={tool.name}
                            width={40}
                            height={40}
                            className="h-10 w-10"
                        />
                        <span className="text-lg">{tool.name}</span>
                    </div>
                ))}
            </div>
            {/* <div className="flex items-center mt-3 gap-x-1 space-x-2 w-[260px] bg-red-300"> */}
            <div className="flex items-center -ml-6 mt-3 gap-x-1 space-x-2 w-[260px]">
                {/* <img src={tool.icon} alt={tool.name} className="h-10 w-10" /> */}
                <Image
                    src={'/second-page/Anaconda_Logo (1).png'}
                    alt={'Anaconda-Navigator'}
                    width={40}
                    height={40}
                    className="h-10 w-[80px]"
                />
                <span className="text-lg">Anaconda-Navigator</span>
            </div>
        </div>
    );
}
