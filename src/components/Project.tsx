type ProjItem = {
    id: number;
    href: string;
    imageId: string;
    title: string;
    date: string;
};

type ProjItemProps = {
    details: ProjItem[];
};
function Project({ details }: ProjItemProps) {
    return (
        <div>
            <div className="text-center m-[20px]">
                <h1 className="text-3xl font-bold mb-[10px]">My Projects</h1>
                <p>A collection of my recent projects and works</p>
            </div>
            <hr className="my-2 border-1 border-purple-300 mb-[20px]" />
            <div className="grid grid-cols-4 gap-2 gap-x-[10px] ">
                {details.map((d) => (
                    <div key={d.id} className="bg-gray-100 rounded-md mt-[10px] px-[5px] border-1 border-gray-300 shadow-lg ">
                        <a className="flex items-center space-x-3" href={d.href}>
                            <img className="w-[35px] color-blue " src={d.imageId} />
                            <div className="text-center">
                                <p className="mt-2 text-small italic">{d.title}</p>
                                <p>{d.date}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project;