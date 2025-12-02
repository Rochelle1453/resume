// Resume.tsx
import { useState } from "react";
import AboutMe from "./AboutMe";
import Blog from "./Blog";
import MyProject from "./MyProject";
import Credentials from "./Credentials";
import VisualSection from "./VisualSection";

type ResumeProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

function Resume({ darkMode, setDarkMode }: ResumeProps) {
  const [activeTab, setActiveTab] = useState("aboutme");

  return (
    <div className="w-full max-w-6xl bg-transparent relative">

      {/* FIXED DARK MODE TOGGLE BUTTON */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 sm:top-5 sm:right-5 bg-violet-400 text-white p-2 sm:p-3 rounded-lg shadow-lg hover:bg-violet-500 hover:cursor-pointer transition-all duration-300 z-50 flex items-center justify-center"
        aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <img
          src={darkMode ? "/brightness.png" : "/moon.png"}
          alt={darkMode ? "Light Mode" : "Dark Mode"}
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
      </button>

      {/* Profile */}
      <div className="flex mt-[-70px] justify-center relative">
        <VisualSection />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 p-6">

        {/* Sidebar */}
        <div className="flex-shrink-0 w-full lg:w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
          <ul className="flex lg:flex-col justify-around lg:justify-start lg:space-y-3">

            {/* ABOUT */}
            <li
              className={`cursor-pointer p-2 rounded-md text-center transition-all ${
                activeTab === "aboutme"
                  ? "border-2 border-violet-300 shadow-md dark:border-violet-500"
                  : "hover:bg-violet-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("aboutme")}
            >
              <img className="w-6 sm:w-8 mx-auto " src="../woman.png" alt="About" />
              <p className="mt-1 text-xs sm:text-sm font-medium text-gray-800 dark:text-white">ABOUT</p>
            </li>

            {/* CREDENTIALS */}
            <li
              className={`cursor-pointer p-2 rounded-md text-center transition-all ${
                activeTab === "credentials"
                  ? "border-2 border-violet-300 shadow-md dark:border-violet-500"
                  : "hover:bg-violet-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("credentials")}
            >
              <img className="w-6 sm:w-8 mx-auto" src="../cert.png" alt="Credentials" />
              <p className="mt-1 text-xs sm:text-sm font-medium text-gray-800 dark:text-white">CREDENTIALS</p>
            </li>

            {/* BLOG */}
            <li
              className={`cursor-pointer p-2 rounded-md text-center transition-all ${
                activeTab === "blog"
                  ? "border-2 border-violet-300 shadow-md dark:border-violet-500"
                  : "hover:bg-violet-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("blog")}
            >
              <img className="w-6 sm:w-8 mx-auto " src="../blog.png" alt="Blog" />
              <p className="mt-1 text-xs sm:text-sm font-medium text-gray-800 dark:text-white">BLOG</p>
            </li>

            {/* PROJECT */}
            <li
              className={`cursor-pointer p-2 rounded-md text-center transition-all ${
                activeTab === "myproject"
                  ? "border-2 border-violet-300 shadow-md dark:border-violet-500"
                  : "hover:bg-violet-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("myproject")}
            >
              <img className="w-6 sm:w-8 mx-auto" src="../database.png" alt="Project" />
              <p className="mt-1 text-xs sm:text-sm font-medium text-gray-800 dark:text-white">PROJECT</p>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg shadow-md p-6">
          {activeTab === "aboutme" && <AboutMe />}
          {activeTab === "credentials" && <Credentials />}
          {activeTab === "blog" && <Blog />}
          {activeTab === "myproject" && <MyProject />}
        </div>
      </div>
    </div>
  );
}

export default Resume;