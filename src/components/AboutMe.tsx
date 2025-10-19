function AboutMe() {
    return (
        <div className="w-full max-w-[900px] mx-auto px-4">
            <h1 className="text-2xl font-semibold mb-2">About Me</h1>
            <hr className="my-2 border-2 border-violet-300 w-[60px]" />
            <h3 className="text-base leading-relaxed">
                I’m Rochelle, a 3rd-year Bachelor of Science in Information Technology (BSIT) student, passionate about learning new technologies and enhancing my skills in IT to prepare for future opportunities in the tech industry.
            </h3>
            <h1 className="text-xl font-semibold mt-8 mb-4">What I'm Doing</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div className="flex flex-col items-center text-center bg-gray-100 rounded-xl p-6 border-2 border-violet-300 shadow-md">
                        <img className="w-10 mb-3" src="../web-design.png" alt="WebDesign" />
                        <h4 className="font-semibold text-md">WEB DESIGN</h4>
                        <p className="mt-2 text-sm">Focusing on planning and creating the visual appearance and overall user experience of websites, using graphic design, layout, and typography.</p>
                    </div>
                    <div className="flex flex-col items-center text-center bg-gray-100 rounded-xl p-6 border-2 border-violet-300 shadow-md">
                        <img className="w-10 mb-3" src="../strategic.png" alt="ProblemDesign" />
                        <h4 className="font-semibold text-md">PROBLEM-SOLVING</h4>
                        <p className="mt-2 text-sm">Applying logical and analytical thinking to debug code or troubleshoot network issues.</p>
                    </div>

                    <div className="flex flex-col items-center text-center bg-gray-100 rounded-xl p-6 border-2 border-violet-300 shadow-md">
                        <img className="w-10 mb-3" src="../development.png" alt="WebDevelopment" />
                        <h4 className="font-semibold text-md">WEB DEVELOPMENT</h4>
                        <p className="mt-2 text-sm">Creating and maintaining websites using coding languages such as HTML, CSS, and JavaScript.</p>
                    </div>
                    <div className="flex flex-col items-center text-center bg-gray-100 rounded-xl p-6 border-2 border-violet-300 shadow-md">
                        <img className="w-10 mb-3" src="../adaptation.png" alt="Adaptability" />
                        <h4 className="font-semibold text-md">ADAPTABILITY</h4>
                        <p className="mt-2 text-sm">Staying current with rapid technological changes through a commitment to lifelong learning.</p>
                    </div>
                </div>
        </div>
    )
}

export default AboutMe;