function AboutMe() {
    return (
        <div className="w-full max-w-[1100px] mx-auto px-4">

            {/* ABOUT ME */}
            <h1 className="text-2xl font-semibold mb-2">About Me</h1>
            <hr className="my-2 border-2 border-violet-300 w-[60px]" />

            <h3 className="text-base leading-relaxed">
                I'm Rochelle, a 3rd-year Bachelor of Science in Information Technology (BSIT) student,
                passionate about learning new technologies and enhancing my skills in IT to prepare
                for future opportunities in the tech industry.
            </h3>

            {/* SKILLS - FULL WIDTH */}
            <div className="mt-10 mb-10">
                <h1 className="text-xl font-semibold mb-4">What I'm Doing</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* SKILL CARD */}
                    <div className="flex flex-col items-center text-center bg-gray-100 rounded-xl p-6 border-2 border-violet-300 shadow-md">
                        <img className="w-10 mb-3" src="../web-design.png" alt="WebDesign" />
                        <h4 className="font-semibold text-md dark:text-purple-800">WEB DESIGN</h4>
                        <p className="mt-2 text-sm dark:text-gray-600">Creating clean and modern website layouts.</p>
                    </div>

                    <div className="flex flex-col items-center text-center bg-gray-100 rounded-xl p-6 border-2 border-violet-300 shadow-md">
                        <img className="w-10 mb-3" src="../strategic.png" alt="ProblemDesign" />
                        <h4 className="font-semibold text-md dark:text-purple-800">PROBLEM-SOLVING</h4>
                        <p className="mt-2 text-sm dark:text-gray-600">Debugging, troubleshooting, and logical thinking.</p>
                    </div>

                    <div className="flex flex-col items-center text-center bg-gray-100 rounded-xl p-6 border-2 border-violet-300 shadow-md">
                        <img className="w-10 mb-3" src="../development.png" alt="WebDevelopment" />
                        <h4 className="font-semibold text-md dark:text-purple-800">WEB DEVELOPMENT</h4>
                        <p className="mt-2 text-sm dark:text-gray-600">Building responsive pages using HTML, CSS, and JS.</p>
                    </div>

                    <div className="flex flex-col items-center text-center bg-gray-100 rounded-xl p-6 border-2 border-violet-300 shadow-md">
                        <img className="w-10 mb-3" src="../adaptation.png" alt="Adaptability" />
                        <h4 className="font-semibold text-md dark:text-purple-800">ADAPTABILITY</h4>
                        <p className="mt-2 text-sm dark:text-gray-600">Fast learner, open to new tools and technologies.</p>
                    </div>
                </div>
            </div>

            {/* TWO COLUMN LAYOUT - LANGUAGES AND WORK EXPERIENCE */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* LEFT COLUMN - LANGUAGES */}
                <div>
                    <h1 className="text-xl font-semibold mb-4">Languages</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-gray-100 border-2 border-violet-300 rounded-xl p-5 shadow-md text-center">
                            <h4 className="font-semibold dark:text-purple-800">English</h4>
                            <p className="text-sm text-gray-700">Professional Working Proficiency</p>
                        </div>

                        <div className="bg-gray-100 border-2 border-violet-300 rounded-xl p-5 shadow-md text-center">
                            <h4 className="font-semibold dark:text-purple-800">Filipino</h4>
                            <p className="text-sm text-gray-700">Conversational</p>
                        </div>

                        <div className="bg-gray-100 border-2 border-violet-300 rounded-xl p-5 shadow-md text-center">
                            <h4 className="font-semibold dark:text-purple-800">Cebuano</h4>
                            <p className="text-sm text-gray-700">Native / Fluent</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN - WORK EXPERIENCE */}
                <div>
                    <h1 className="text-xl font-semibold mb-4">Work Experience</h1>

                    <div className="bg-gray-100 border-2 border-violet-300 rounded-xl p-5 shadow-md">
                        <h3 className="font-semibold text-lg dark:text-purple-800">Chamberlyn SP Cordova</h3>
                        <p className="text-sm text-gray-700">2024 – 2025</p>
                        <ul className="text-sm mt-2 list-disc ml-5">
                            <li className="dark:text-gray-600">MV Registration Renewal and Licensing</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutMe;