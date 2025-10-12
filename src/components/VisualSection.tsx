import ProfilePic from "./ProfilePic";


function VisualSection(){
    return(
        <div className="grid grid-cols-2 gap-4 m-[-80px] rounded-md px-5 bg-white w-full shadow-lg">
            <div className="flex flex-cols gap-10 ">
                <ProfilePic />
                <div className="m-[10px]">
                    <h1 className="text-2xl italic"><b>Rochelle Andales</b></h1>
                    <p>BSIT 3B</p>
                    <div className="flex flex-row gap-[20px] pt-[20px] mt-[10px]">
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
            <div className="grid grid-cols-2 gap-4 gap-x-[50px] ">
                <div className="grid grid-rows-2 gap-y-[10px]">
                    <div className="bg-gray-100 rounded-md mt-[10px] p-[8px] shadow-md">
                        <h4>EMAIL</h4>
                    <p className="italic">hoperochelleandales@gmail.com</p>
                    </div>
                    <div className="bg-gray-100 rounded-md mb-[10px] p-[8px] shadow-md">
                        <h4>CONTACT</h4>
                        <p className="italic">0975 322 1337</p>
                    </div>
                </div>
                <div className="grid grid-rows-2 gap-y-[10px]">
                    <div className="bg-gray-100 rounded-md mt-[10px] p-[8px] shadow-md">
                        <h4>BIRTHDAY</h4>
                    <p className="italic">September 12, 2004</p>
                    </div>
                    <div className="bg-gray-100 rounded-md mb-[10px] p-[8px] shadow-md">
                        <h4>LOCATION</h4>
                        <p className="italic">Bang Bang, Cordova, Cebu.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisualSection;