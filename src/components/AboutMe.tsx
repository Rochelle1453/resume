function AboutMe() {
    return (
        <div className="w-full max-w-[1100px] mx-auto px-4">

            {/* ABOUT ME */}
            <h1 className="text-2xl font-semibold mb-2">About Me</h1>
            <hr className="my-2 border-2 border-violet-300 w-[60px]" />

            <h3 className="text-base leading-relaxed">
                I’m Rochelle, a 3rd-year Bachelor of Science in Information Technology (BSIT) student,
                passionate about learning new technologies and enhancing my skills in IT to prepare
                for future opportunities in the tech industry.
            </h3>

            {/* TWO COLUMN LAYOUT */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">

                {/* LEFT COLUMN */}
                <div className="space-y-10">

                    {/* SKILLS */}
                    <div>
                        <h1 className="text-xl font-semibold mb-4">What I'm Doing</h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* SKILL CARD */}
                            <div className="flex flex-col items-center text-center bg-gray-100 rounded-xl p-6 border-2 border-violet-300 shadow-md">
                                <img className="w-10 mb-3" src="../web-design.png" alt="WebDesign" />
                                <h4 className="font-semibold text-md">WEB DESIGN</h4>
                                <p className="mt-2 text-sm">Creating clean and modern website layouts.</p>
                            </div>

                            <div className="flex flex-col items-center text-center bg-gray-100 rounded-xl p-6 border-2 border-violet-300 shadow-md">
                                <img className="w-10 mb-3" src="../strategic.png" alt="ProblemDesign" />
                                <h4 className="font-semibold text-md">PROBLEM-SOLVING</h4>
                                <p className="mt-2 text-sm">Debugging, troubleshooting, and logical thinking.</p>
                            </div>

                            <div className="flex flex-col items-center text-center bg-gray-100 rounded-xl p-6 border-2 border-violet-300 shadow-md">
                                <img className="w-10 mb-3" src="../development.png" alt="WebDevelopment" />
                                <h4 className="font-semibold text-md">WEB DEVELOPMENT</h4>
                                <p className="mt-2 text-sm">Building responsive pages using HTML, CSS, and JS.</p>
                            </div>

                            <div className="flex flex-col items-center text-center bg-gray-100 rounded-xl p-6 border-2 border-violet-300 shadow-md">
                                <img className="w-10 mb-3" src="../adaptation.png" alt="Adaptability" />
                                <h4 className="font-semibold text-md">ADAPTABILITY</h4>
                                <p className="mt-2 text-sm">Fast learner, open to new tools and technologies.</p>
                            </div>
                        </div>
                    </div>

                    {/* LANGUAGES */}
                    <div>
                        <h1 className="text-xl font-semibold mb-4">Languages</h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-gray-100 border-2 border-violet-300 rounded-xl p-5 shadow-md text-center">
                                <h4 className="font-semibold">English</h4>
                                <p className="text-sm text-gray-700">Professional Working Proficiency</p>
                            </div>

                            <div className="bg-gray-100 border-2 border-violet-300 rounded-xl p-5 shadow-md text-center">
                                <h4 className="font-semibold">Filipino</h4>
                                <p className="text-sm text-gray-700">Conversational</p>
                            </div>

                            <div className="bg-gray-100 border-2 border-violet-300 rounded-xl p-5 shadow-md text-center">
        <h4 className="font-semibold">Cebuano</h4>
        <p className="text-sm text-gray-700">Native / Fluent</p>
    </div>
                        </div>

                    </div>

                </div>

                {/* RIGHT COLUMN */}
                <div className="space-y-10">

                    {/* EDUCATION */}
                    <div>
                        <h1 className="text-xl font-semibold mb-4">Educational Attainment</h1>

                        <div className="bg-gray-100 border-2 border-violet-300 rounded-xl p-5 shadow-md">
                            <h3 className="font-semibold text-lg">Pilipog Elementary School</h3>
                            <p className="text-sm text-gray-700">2015 - 2016</p>
                            <p className="text-sm mt-1">Pilipog, Cordova, Cebu.</p>
                        </div>

                        <div className="bg-gray-100 border-2 border-violet-300 rounded-xl p-5 shadow-md">
                            <h3 className="font-semibold text-lg">Cordova National High School</h3>
                            <p className="text-sm text-gray-700">2022 - 2023</p>
                            <p className="text-sm mt-1">Day-as, Cordova, Cebu.</p>
                        </div>

                        <div className="bg-gray-100 border-2 border-violet-300 rounded-xl p-5 shadow-md">
                            <h3 className="font-semibold text-lg">Bachelor of Science in Information Technology</h3>
                            <p className="text-sm text-gray-700">Cordova Public College</p>
                            <p className="text-sm text-gray-700">3rd Year • 2023 – Present</p>
                            <p className="text-sm mt-1">Gabi, Cordova, Cebu.</p>
                        </div>
                    </div>

                    {/* CERTIFICATIONS */}
                    <div>
                        <h1 className="text-xl font-semibold mb-4">Certifications</h1>

                        <div className="space-y-3">
                            <div className="bg-gray-100 border-2 border-violet-300 rounded-xl p-4 shadow-md">
                                <h4 className="font-semibold">Creative Web Design</h4>
                                <p className="text-sm text-gray-700">TESDA</p>
                            </div>
                        </div>
                    </div>

                    {/* WORK EXPERIENCE */}
                    <div>
                        <h1 className="text-xl font-semibold mb-4">Work Experience</h1>

                        <div className="bg-gray-100 border-2 border-violet-300 rounded-xl p-5 shadow-md">
                            <h3 className="font-semibold text-lg">Chamberlyn SP Cordova</h3>
                            <p className="text-sm text-gray-700">2024 – 2025</p>
                            <ul className="text-sm mt-2 list-disc ml-5">
                                <li>MV Registration Renewal and Licensing</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default AboutMe;
