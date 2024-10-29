// components/ProfileSection.js
const ProfileSection = () => (
    <div className="flex flex-col md:flex-row p-8 bg-blue-900 text-white">
        <div className="w-full md:w-1/4 flex justify-center">
            <img
                src="/profile.jpg"  // Replace this with the correct path to your image
                alt="Profile Image"
                className="rounded-full w-32 h-32 md:w-48 md:h-48"
            />
        </div>
        <div className="w-full md:w-3/4 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold">Saw Tar So Gay Htoo Htoo</h1>
            <p className="text-xl mt-2">
                I am an independent and self-motivated university student with extensive...
            </p>
            <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> 6431503130@lamduan.mfu.ac.th</p>
                <p><strong>Phone:</strong> 093-443-8586</p>
                <p><strong>Website:</strong> <a href="https://mywebsite.com" className="underline">https://mywebsite.com</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com" className="underline">https://github.com</a></p>
                <p><strong>Facebook:</strong> <a href="https://facebook.com" className="underline">https://facebook.com</a></p>
            </div>
        </div>
    </div>
);

export default ProfileSection;
