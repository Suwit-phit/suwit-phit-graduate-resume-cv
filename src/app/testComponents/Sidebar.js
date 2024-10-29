// components/Sidebar.js
const Sidebar = () => (
    <aside className="bg-gray-100 p-6 w-full md:w-1/4">
        <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Skills</h3>
            <ul className="space-y-2">
                <li><strong>JavaScript:</strong> Expert</li>
                <li><strong>React:</strong> Advanced</li>
                <li><strong>Flutter:</strong> Intermediate</li>
                {/* Add other skills similarly */}
            </ul>
        </section>

        <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Languages</h3>
            <ul className="space-y-2">
                <li>English</li>
                <li>Karen</li>
                <li>Thai</li>
                {/* Add more languages here */}
            </ul>
        </section>

        <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Hobbies</h3>
            <ul className="space-y-2">
                <li>Playing Instrument</li>
                <li>Traveling</li>
                <li>Jogging</li>
                {/* Add more hobbies */}
            </ul>
        </section>
    </aside>
);

export default Sidebar;
