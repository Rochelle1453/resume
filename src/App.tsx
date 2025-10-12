// import { useState } from 'react'

import Resume from "./components/Resume"


function App() {

  return (
    <>
      <div className="w-full h-screen">
        <div className="h-[340px] w-full bg-[url(bg.jpg)] bg-cover bg-no-repeat opacity-[.-20] " ></div>
        <div className="min-h-screen bg-gray-200 flex flex-row justify-center content-center">
          <Resume />
        </div>
      </div>
    </>
  )
}

export default App
