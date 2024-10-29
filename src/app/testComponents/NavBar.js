import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <ul className="flex space-x-4 justify-center">
                <li><Link href="/">Home</Link></li>
                <li><Link href="#skills">Skills</Link></li>
                <li><Link href="#experience">Experience</Link></li>
                <li><Link href="#education">Education</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
        </nav>
    );
}
