import ProfilePic from "./ProfilePic";


function VisualSection(){
    return(
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
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 rounded-md p-3 shadow-sm">
                        <h4 className="font-semibold text-gray-700">EMAIL</h4>
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
    )
}

export default VisualSection;