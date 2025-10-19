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
            <div className="text-center m-5">
                <h1 className="text-3xl font-bold mb-2">My Projects</h1>
                <p className="text-gray-700">A collection of my recent projects and works</p>
            </div>
            <hr className="my-4 border border-purple-300" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
                {details.map((d) => (
                    <div key={d.id} className="bg-gray-100 rounded-md p-3 border border-gray-200 shadow-md w-full max-w-[140px] hover:shadow-lg transition-all">
                        <a className="flex flex-col items-center text-center" href={d.href}>
                            <img className="w-[40px] mb-2" src={d.imageId} />
                            {/* <div className="text-center"> */}
                                <p className="text-sm font-medium italic">{d.title}</p>
                                <p text-xs text-gray-500>{d.date}</p>
                            {/* </div> */}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project;