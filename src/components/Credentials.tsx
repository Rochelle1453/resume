function Credentials() {
  return (
    <div className="w-full max-w-[1100px] mx-auto px-4">

      <h1 className="text-2xl font-semibold mb-2">Credentials</h1>
      <hr className="my-2 border-2 border-violet-300 w-[60px]" />

      <div className="space-y-10 mt-6">

        {/* EDUCATION */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Educational Attainment</h2>

          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 border-2 border-violet-300 rounded-xl p-5 shadow-md">
              <h3 className="font-semibold text-lg">Pilipog Elementary School</h3>
              <p className="text-sm">2015 - 2016</p>
              <p className="text-sm mt-1">Pilipog, Cordova, Cebu</p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 border-2 border-violet-300 rounded-xl p-5 shadow-md">
              <h3 className="font-semibold text-lg">Cordova National High School</h3>
              <p className="text-sm">2022 - 2023</p>
              <p className="text-sm mt-1">Day-as, Cordova, Cebu</p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 border-2 border-violet-300 rounded-xl p-5 shadow-md">
              <h3 className="font-semibold text-lg">Bachelor of Science in Information Technology</h3>
              <p className="text-sm">Cordova Public College</p>
              <p className="text-sm">3rd Year • 2023 – Present</p>
              <p className="text-sm mt-1">Gabi, Cordova, Cebu</p>
            </div>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Certifications</h2>

          <div className="bg-gray-100 dark:bg-gray-800 border-2 border-violet-300 rounded-xl p-5 shadow-md">
            <h4 className="font-semibold">Creative Web Design</h4>
            <p className="text-sm">TESDA</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Credentials;