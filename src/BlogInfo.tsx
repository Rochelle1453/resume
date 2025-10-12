type BlogItem = {
  id: number;
  title: string;
  date: string;
  description: string;
};

type BlogInfoProps = {
  information: BlogItem[];
};
function BlogInfo({ information }: BlogInfoProps) {
  return(
    <div>
        <div className="text-center m-[20px]">
        <h1 className="text-3xl font-bold mb-[10px]">My Blog</h1>
        <p>Welcome to my personal blog</p>
        </div>
        <hr className="my-2 border-1 border-purple-300 mb-[20px]" />
        <div>
            {information.map((info) => (
                <div key={info.id} className="mb-6 p-4 border rounded  border-2 border-violet-300 shadow-md">
                    <h3 className="text-xl font-bold">{info.title}</h3>
                    <p className="text-gray-500 text-sm">{info.date}</p>
                    <p className="mt-2">{info.description}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default BlogInfo;
