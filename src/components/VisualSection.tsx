import React, { useState } from 'react';

function ProfilePic() {
    return (
        <div>
            <img
                className="mt-[-80px] rounded-[30%] w-[180px] border-2 border-violet-200"
                src="../unnamed.jpg"
                alt="profile"
            />
        </div>
    );
}

function VisualSection() {
    const [isGenerating, setIsGenerating] = useState(false);

    const downloadCV = () => {
        setIsGenerating(true);

        const printWindow = window.open('', '_blank');

        if (printWindow) {
            printWindow.document.write(`
<!DOCTYPE html>
<html>
<head>
    <title>Rochelle Andales - Resume</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: Arial, sans-serif; 
            display: flex; 
            min-height: 100vh; 
            color: #333; 
        }

        /* SIDEBAR */
        .sidebar {
            width: 28%;
            background: #f3f0ff;
            padding: 30px 25px;
            border-right: 3px solid #a78bfa;
        }

        .profile-pic {
            width: 150px;
            height: 150px;
            margin: 0 auto 25px auto;
            border-radius: 50%;
            border: 4px solid #a78bfa;
            object-fit: cover;
        }

        /* Uniform sidebar titles */
        .side-title {
            font-size: 18px;
            font-weight: bold;
            color: #4c1d95;
            margin-bottom: 15px;
            
        }

        .contact-title {
            font-size: 18px;
            font-weight: bold;
            color: #4c1d95;
            margin-bottom: 15px;
            margin-top: 10px;
            
        }
        
        .side-section { 
            margin-bottom: 50px; 
        }

        .side-section h3 {
            font-size: 15px;
            color: #7c3aed;
            font-weight: bold;
            margin-bottom: 6px;
        }

        .side-section p, 
        .side-section li {
            font-size: 13px;
            margin-bottom: 5px;
            line-height: 1.4;
        }

        ul { padding-left: 18px; }

        /* MAIN CONTENT */
        .main {
            width: 72%;
            padding: 40px;
        }

        .name { 
            font-size: 32px; 
            font-weight: bold; 
            color: #4c1d95;
            margin-top: 10px; 
        }
        .subtitle {
            font-size: 16px;
            margin-bottom: 70px;
            color: #555;
        }

        .section { margin-bottom: 30px; }

        .section h2 {
            font-size: 20px;
            color: #4c1d95;
            border-bottom: 2px solid #a78bfa;
            padding-bottom: 5px;
            margin-bottom: 12px;
        }

        .item { margin-bottom: 15px; }
        .item h3 { font-size: 16px; font-weight: bold; }
        .item span { font-size: 13px; color: #666; }

        @media print {
            body { zoom: 96%; }
        }
    </style>
</head>

<body>

    <!-- SIDEBAR -->
    <div class="sidebar">

        <img src="../unnamed.jpg" class="profile-pic" />

        <!-- CONTACT -->
        <div class="side-section">
            <div class="contact-title">CONTACT</div>

            <h3>Gmail</h3>
            <p>hoperochelleandales</p>

            <h3>Phone</h3>
            <p>0975 322 1337</p>

            <h3>Location</h3>
            <p>Bang Bang, Cordova, Cebu</p>

            <h3>Birthday</h3>
            <p>September 12, 2004</p>
        </div>

        <!-- LANGUAGES -->
        <div class="side-section">
            <div class="side-title">LANGUAGES</div>
                <ul>
                    <li>English</li>
                    <li>Filipino</li>
                    <li>Cebuano</li>
                </ul>
        </div>

        <!-- SKILLS (Moved to sidebar) -->
        <div class="side-section">
            <div class="side-title">SKILLS</div>

            <ul>
                <li>Web Design</li>
                <li>Problem Solving</li>
                <li>Web Development</li>
                <li>Adaptability</li>
            </ul>
        </div>

    </div>

    <!-- MAIN SECTION -->
    <div class="main">
        <h1 class="name">ROCHELLE ANDALES</h1>
        <p class="subtitle">BSIT 3B — Information Technology Student</p>

        <!-- ABOUT -->
        <div class="section">
            <h2>About Me</h2>
            <p>
                I am a 3rd-year Bachelor of Science in Information Technology student
                passionate about web development, design, and problem-solving.
                Dedicated, adaptable, and continuously improving my skills to prepare
                for future opportunities in the tech industry.
            </p>
        </div>

        <!-- EDUCATION -->
        <div class="section">
            <h2>Educational Attainment</h2>

            <div class="item">
                <h3>Bachelor of Science in Information Technology</h3>
                <span>Cordova Public College • 2023 – Present</span><br />
                <span>Gabi, Cordova, Cebu</span>
            </div>

            <div class="item">
                <h3>Cordova National High School</h3>
                <span>2022 – 2023</span>
            </div>

            <div class="item">
                <h3>Pilipog Elementary School</h3>
                <span>2015 – 2016</span>
            </div>
        </div>

        <!-- CERTIFICATIONS -->
        <div class="section">
            <h2>Certifications</h2>
            <div class="item">
                <h3>Creative Web Design</h3>
                <span>TESDA</span>
            </div>
        </div>

        <!-- EXPERIENCE -->
        <div class="section">
            <h2>Work Experience</h2>
            <div class="item">
                <h3>Chamberlyn SP Cordova</h3>
                <span>2024 — 2025</span>
                <ul>
                    <li>MV Registration Renewal and Licensing</li>
                </ul>
            </div>
        </div>

    </div>

</body>
</html>

            `);

            printWindow.document.close();

            printWindow.onload = () => {
                setTimeout(() => {
                    printWindow.print();
                    setIsGenerating(false);
                }, 250);
            };
        } else {
            alert('Please allow pop-ups to download your CV');
            setIsGenerating(false);
        }
    };

    return (
        <div className="w-full bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <ProfilePic />
                <div className="text-center sm:text-left">
                    <h1 className="text-2xl font-bold italic"><b>Rochelle Andales</b></h1>
                    <p className="text-gray-700">BSIT 3B</p>

                    <div className="flex justify-center sm:justify-start gap-4 mt-4">
                        <a href="https://www.facebook.com/rochelle.andales.90/">
                            <img className="w-[20px]" src="../facebook.png" alt="facebook" />
                        </a>
                        <a href="https://www.instagram.com/itz_rchll_21/?hl=en">
                            <img className="w-[20px]" src="../instagram.png" alt="instagram" />
                        </a>
                        <a href="https://github.com/Rochelle1453">
                            <img className="w-[20px]" src="../social.png" alt="github" />
                        </a>
                    </div>

                    <button
                        onClick={downloadCV}
                        disabled={isGenerating}
                        className="mt-4 bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto sm:mx-0"
                    >
                        {isGenerating ? 'Preparing CV...' : 'Download CV'}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded-md p-3 shadow-sm">
                    <h4 className="font-semibold text-gray-700">GMAIL</h4>
                    <p className="italic text-gray-600 text-sm break-words">hoperochelleandales@gmail.com</p>
                </div>
                <div className="bg-gray-100 rounded-md p-3 shadow-sm">
                    <h4 className="font-semibold text-gray-700">CONTACT</h4>
                    <p className="italic text-gray-600 text-sm">0975 322 1337</p>
                </div>
                <div className="bg-gray-100 rounded-md p-3 shadow-sm">
                    <h4 className="font-semibold text-gray-700">BIRTHDAY</h4>
                    <p className="italic text-gray-600 text-sm">September 12, 2004</p>
                </div>
                <div className="bg-gray-100 rounded-md p-3 shadow-sm">
                    <h4 className="font-semibold text-gray-700">LOCATION</h4>
                    <p className="italic text-gray-600 text-sm">Bang Bang, Cordova, Cebu.</p>
                </div>
            </div>
        </div>
    );
}

export default VisualSection;
