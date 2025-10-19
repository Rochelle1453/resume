import { useState } from "react";
import AboutMe from "./AboutMe";
import Blog from "./Blog";
import MyProject from "./MyProject";
import VisualSection from "./VisualSection";

function Resume() {
  const [activeTab, setActiveTab] = useState("aboutme");

  return (
    <div className="w-full max-w-6xl bg-transparent">
      <div className="flex mt-[-70px] justify-center">
        <VisualSection />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 p-6">

          {/* Sidebar */}
          <div className="flex-shrink-0 w-full lg:w-40 bg-white rounded-lg shadow-lg p-4">
            <ul className="flex lg:flex-col justify-around lg:justify-start lg:space-y-3">
              <li
                className={`cursor-pointer p-2 rounded-md text-center transition-all ${activeTab === "aboutme" ? " border-2 border-violet-300 shadow-md" : "hover:bg-violet-100"}`}
                onClick={() => setActiveTab("aboutme")}
              >
                <div className=" justify-items-center"> 
                <img className="w-8 mx-auto" src="../woman.png" alt="AboutMe" />
                <p className="mt-1 text-sm font-medium">ABOUT  </p>
                </div>
              </li>
              <li
                className={`cursor-pointer p-2 rounded-md text-center transition-all${activeTab === "blog" ? " border-2 border-violet-300 shadow-md" : "hover:bg-violet-100"}`}
                onClick={() => setActiveTab("blog")}
              >
                <div className=" justify-items-center"> 
                <img className="w-8 mx-auto" src="../blog.png" alt="Blog" />
                <p className="mt-1 text-sm font-medium">BLOG</p>
                </div>
              </li>
              <li
                className={`cursor-pointer p-2 rounded-md text-center transition-all ${activeTab === "myproject" ? " border-2 border-violet-300 shadow-md" : "hover:bg-violet-100"}`}
                onClick={() => setActiveTab("myproject")}
              >
                <div className=" justify-items-center"> 
                <img className="w-8 mx-auto" src="../database.png" alt="MyProject" />
                <p className="mt-1 text-sm font-medium">PROJECT</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Dynamic content area */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-6">
            {activeTab === "aboutme" && <AboutMe />}
            {activeTab === "blog" && <Blog />}
            {activeTab === "myproject" && <MyProject />}
          </div>
        </div>
    </div>
  );
}

export default Resume;
