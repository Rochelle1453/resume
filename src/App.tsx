import Resume from "./components/Resume";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="w-full min-h-screen flex-col bg-gray-200 dark:bg-gray-900 dark:text-white transition-all">

        {/* BG BANNER */}
        <div
          className="h-[340px] w-full bg-center bg-cover bg-no-repeat opacity-[.-20]"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        ></div>

        {/* CONTENT */}
        <div className="flex-1 flex justify-center items-center px-4">
          <Resume darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* FOOTER */}
        <footer className="text-center py-6 text-sm text-gray-700 dark:text-gray-300">
          © 2025 Rochelle Andales. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;
