import { FaBookmark } from 'react-icons/fa'; // Import a bookmark icon

const hobbies = [
    "Playing Instrument, Singing",
    "Traveling",
    "Jogging",
    "Playing Football, Volleyball",
    "Writing"
];

export default function HobbiesSection() {
    return (
        // <div className="bg-[#8ecdf7] text-white p-10 w-full max-w-sm h-[300px]">
        <div className=" text-white p-10 w-full max-w-sm h-[300px]">
            <h1 className="text-xl font-bold tracking-[7px] mb-6">HOBBIES</h1>
            <ul className="space-y-4 -mt-3.5 -ml-0.5">
                {hobbies.map((hobby, index) => (
                    <li key={index} className="flex items-center space-x-4">
                        <FaBookmark className="text-white h-5 w-5" />
                        <span className="text-lg">{hobby}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
