"use client";

import React from 'react';
import { Flex, Progress } from 'antd';

const Languages = () => {
  return (
    // <div className="bg-blue-900 text-white p-8 rounded-lg max-w-md mx-auto ml-[8px] -mt-[88px] h-[335px]">
    <div className=" text-white p-8 rounded-lg max-w-md mx-auto ml-[8px] -mt-[88px] h-[335px]">
      <h2 className="text-xl font-bold tracking-[7px] mb-6">LANGUAGES</h2>

      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Progress
            type="circle"
            percent={67}
            size={30}
            strokeColor="#ffffff" // Customize the color (e.g., red)
            trailColor="#a6a6a6"
            strokeWidth={18} // Make it bolder
            format={() => ''} // Remove the 50% from the center
          />
          <span>English</span>
        </div>
        <div className="flex items-center space-x-4">
          <Progress
            type="circle"
            percent={100}
            size={30}
            strokeColor="#ffffff" // Customize the color (e.g., red)
            trailColor="#a6a6a6"
            strokeWidth={18} // Make it bolder
            format={() => ''} // Remove the 50% from the center
          />
          <span>Karen</span>
        </div>
        <div className="flex items-center space-x-4">
          <Progress
            type="circle"
            percent={71}
            size={30}
            strokeColor="#ffffff" // Customize the color (e.g., red)
            trailColor="#a6a6a6"
            strokeWidth={18} // Make it bolder
            format={() => ''} // Remove the 50% from the center
          />
          <span>Thai</span>
        </div>
        <div className="flex items-center space-x-4">
          <Progress
            type="circle"
            percent={82}
            size={30}
            strokeColor="#ffffff" // Customize the color (e.g., red)
            trailColor="#a6a6a6"
            strokeWidth={18} // Make it bolder
            format={() => ''} // Remove the 50% from the center
          />
          <span>Burmese</span>
        </div>
        <div className="flex items-center space-x-4">
          <Progress
            type="circle"
            percent={29}
            size={30}
            strokeColor="#ffffff" // Customize the color (e.g., red)
            trailColor="#a6a6a6"
            strokeWidth={18} // Make it bolder
            format={() => ''} // Remove the 50% from the center
          />
          <span>Chinese</span>
        </div>
      </div>
    </div>
  );
};

{/* <Flex align="center" wrap gap={30}> */ }
{/* <Progress type="circle" percent={50} /> */ }
{/* <Progress type="circle" percent={50} size="small" /> */ }
{/* <Progress type="circle" percent={50} size={30} />
          </Flex> */}
{/* <Image src="/ui.png" alt="UX/UI" width={50} height={50} /> */ }
{/* <Progress type="circle" percent={90} format={() => ''} /> */ }

// const LanguageItem = ({ label, checked }) => {
//   return (
//     <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//       <div
//         style={{
//           width: '20px',
//           height: '20px',
//           borderRadius: '50%',
//           border: '3px solid white',
//           backgroundColor: checked ? '#d9d9d9' : 'transparent',
//         }}
//       />
//       <span style={{ fontSize: '16px', color: 'white' }}>{label}</span>
//     </label>
//   );
// };

export default Languages;




// Ensures the component is a client component

// // components/Languages.js
// import React from 'react';

// const Languages = () => {
//   return (
//     <div className="bg-blue-800 p-6 rounded-md text-white w-64">
//       <h2 className="text-lg font-bold mb-4">LANGUAGES</h2>
//       <ul className="space-y-4">
//         {/* English */}
//         <li className="flex items-center space-x-4">
//           <div className="relative w-8 h-8">
//             <div className="absolute inset-0 rounded-full border-4 border-gray-500"></div>
//             {/* <div className="absolute inset-0 rounded-full border-t-4 border-l-4 border-gray-300"></div> */}
//             <div className="absolute inset-0 rounded-full border-t-4 border-l-4 border-white"></div>
//           </div>
//           <span>English</span>
//         </li>

//         {/* Karen */}
//         <li className="flex items-center space-x-4">
//           <div className="relative w-8 h-8">
//             <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
//             <div className="absolute inset-0 rounded-full border-t-4 border-gray-300"></div>
//           </div>
//           <span>Karen</span>
//         </li>

//         {/* Thai */}
//         <li className="flex items-center space-x-4">
//           <div className="relative w-8 h-8">
//             <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
//             <div className="absolute inset-0 rounded-full border-t-4 border-l-4 border-gray-300"></div>
//           </div>
//           <span>Thai</span>
//         </li>

//         {/* Burmese */}
//         <li className="flex items-center space-x-4">
//           <div className="relative w-8 h-8">
//             <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
//             <div className="absolute inset-0 rounded-full border-t-4 border-l-4 border-gray-300"></div>
//           </div>
//           <span>Burmese</span>
//         </li>

//         {/* Chinese */}
//         <li className="flex items-center space-x-4">
//           <div className="relative w-8 h-8">
//             <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
//             <div className="absolute inset-0 rounded-full border-t-4 border-l-4 border-gray-300"></div>
//           </div>
//           <span>Chinese</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Languages;

//! End
// import { useState } from 'react';

// const languages = ["English", "Karen", "Thai", "Burmese", "Chinese"];

// const Languages = () => {
//   const [selected, setSelected] = useState("");

//   return (
//     <div className="bg-blue-900 text-white p-4 rounded-lg w-64">
//       <h2 className="text-lg font-bold mb-4">LANGUAGES</h2>
//       {languages.map((language, index) => (
//         <div key={index} className="flex items-center mb-4">
//           <div
//             onClick={() => setSelected(language)}
//             className={`relative w-6 h-6 rounded-full border-2 border-white 
//               ${selected === language ? 'bg-gray-400' : 'bg-blue-900'} flex items-center justify-center`}
//           >
//             <div
//               className={`w-3 h-3 rounded-full 
//               ${selected === language ? 'bg-white' : 'bg-blue-900'} transition-all`}
//             ></div>
//           </div>
//           <label
//             htmlFor={language}
//             className="ml-3 text-base cursor-pointer"
//             onClick={() => setSelected(language)}
//           >
//             {language}
//           </label>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Languages;


