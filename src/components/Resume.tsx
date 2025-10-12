import { useState } from "react";
import AboutMe from "./AboutMe";
import Blog from "./Blog";
import MyProject from "./MyProject";
import VisualSection from "./VisualSection";

function Resume() {
  const [activeTab, setActiveTab] = useState("aboutme");

  return (
    <div className="h-screen w-3/4 ">
      <div className="flex flex-row justify-center content-stretch ">
        <VisualSection />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 m-10">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-32 max-h-screen flex-shrink-0 bg-white rounded-lg shadow-lg p-6">
            <ul className="space-y-2">
              <li
                className={`cursor-pointer p-2 rounded ${activeTab === "aboutme" ? " border-2 border-violet-300 shadow-md" : ""}`}
                onClick={() => setActiveTab("aboutme")}
              >
                <div className=" justify-items-center"> 
                <img className="w-[35px]" src="../woman.png" alt="AboutMe" />
                <p className="mt-[10px] font-medium">ABOUT  </p>
                </div>
              </li>
              <li
                className={`cursor-pointer p-2 rounded ${activeTab === "blog" ? " border-2 border-violet-300 shadow-md" : ""}`}
                onClick={() => setActiveTab("blog")}
              >
                <div className=" justify-items-center"> 
                <img className="w-[35px]" src="../blog.png" alt="Blog" />
                <p className="mt-[10px] font-medium">BLOG</p>
                </div>
              </li>
              <li
                className={`cursor-pointer p-2 rounded ${activeTab === "myproject" ? " border-2 border-violet-300 shadow-md" : ""}`}
                onClick={() => setActiveTab("myproject")}
              >
                <div className=" justify-items-center"> 
                <img className="w-[35px]" src="../database.png" alt="MyProject" />
                <p className="mt-[10px] font-medium">PROJECT</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Dynamic content area */}
          <div className="w-full p-6 bg-white rounded-lg">
            {activeTab === "aboutme" && <AboutMe />}
            {activeTab === "blog" && <Blog />}
            {activeTab === "myproject" && <MyProject />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
