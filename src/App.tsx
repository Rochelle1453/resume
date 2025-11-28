import Resume from "./components/Resume"


function App() {

  return (
    <>
      <div className="w-full min-h-screen flex-col">
        <div className="h-[340px] w-full bg-[url(bg.jpg)] bg-center md:bg-center sm:bg-center bg-cover bg-no-repeat opacity-[.-20] " ></div>
        <div className="flex-1 bg-gray-200 flex justify-center item-center px-4">
          <Resume />
        </div>
      </div>
    </>
  )
}

export default App
