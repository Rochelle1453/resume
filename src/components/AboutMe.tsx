function AboutMe() {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-[10px]">About Me</h1>
            <hr className="my-2 border-2 border-violet-300 w-[60px]" />
            <h3>
                I’m Rochelle, a 3rd-year Bachelor of Science in Information Technology (BSIT) student, passionate about learning new technologies and enhancing my skills in IT to prepare for future opportunities in the tech industry.
            </h3>
            <h1 className="text-xl font-semibold mt-[30px] my-[10px]">What I'm Doing</h1>
            <div className="grid grid-cols-2 gap-4 gap-x-[10px] ">
                <div className="grid grid-rows-2 gap-y-[10px] w-[350px] ">
                    <div className="flex flex-col items-center text-center bg-gray-100 rounded-md mt-[10px] p-[30px] border-2 border-violet-300 shadow-md">
                        <img className="w-[35px] color-blue" src="../web-design.png" alt="WebDesign" />
                        <h4 className="font-semibold text-md">WEB DESIGN</h4>
                        <p className="mt-2 text-small">Focusing on planning and creating the visual appearance and overall user experience of websites, using graphic design, layout, and typography.</p>
                    </div>
                    <div className="flex flex-col items-center text-center bg-gray-100 rounded-md mb-[10px] p-[30px]  border-2 border-violet-300 shadow-md">
                        <img className="w-[35px]" src="../strategic.png" alt="ProblemDesign" />
                        <h4 className="font-semibold text-md">PROBLEM-SOLVING</h4>
                        <p className="mt-2 text-small">Applying logical and analytical thinking to debug code or troubleshoot network issues.</p>
                    </div>
                </div>
                <div className="grid grid-rows-2 gap-y-[10px]">
                    <div className="flex flex-col items-center text-center bg-gray-100 rounded-md mt-[10px] p-[30px]  border-2 border-violet-300 shadow-md">
                        <img className="w-[35px]" src="../development.png" alt="WebDevelopment" />
                        <h4 className="font-semibold text-md">WEB DEVELOPMENT</h4>
                        <p className="mt-2 text-small">Creating and maintaining websites using coding languages such as HTML, CSS, and JavaScript.</p>
                    </div>
                    <div className="flex flex-col items-center text-center bg-gray-100 rounded-md mb-[10px] p-[30px]  border-2 border-violet-300 shadow-md">
                        <img className="w-[35px]" src="../adaptation.png" alt="Adaptability" />
                        <h4 className="font-semibold text-md">ADAPTABILITY</h4>
                        <p className="mt-2 text-small">Staying current with rapid technological changes through a commitment to lifelong learning.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;