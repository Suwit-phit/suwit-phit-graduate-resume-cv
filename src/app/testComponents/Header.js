// components/Header.js
const Header = () => (
    <section className="flex flex-col md:flex-row bg-custom-blue text-white p-8">
        <div className="w-full md:w-1/4 flex justify-center">
            <img
                src="/profile.jpg"
                alt="Profile Picture"
                className="rounded-full w-36 h-36 md:w-48 md:h-48 border-4 border-white"
            />
        </div>
        <div className="w-full md:w-3/4 md:pl-8">
            <h1 className="text-4xl font-bold">SAW TAR SO GAY HTOO HTOO</h1>
            <h2 className="text-custom-light-blue text-2xl font-semibold mt-4">Personal Profile</h2>
            <p className="mt-2">
                I am an independent and self-motivated university student with extensive volunteering
                and working experience...
            </p>
            <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> <a href="mailto:6431503130@lamduan.mfu.ac.th" className="text-custom-light-blue">6431503130@lamduan.mfu.ac.th</a></p>
                <p><strong>Phone:</strong> <a href="tel:+0934438586" className="text-custom-light-blue">093-443-8586</a></p>
                <p><strong>Website:</strong> <a href="https://mywebsite.com" className="text-custom-light-blue">mywebsite.com</a></p>
            </div>
        </div>
    </section>
);

export default Header;
