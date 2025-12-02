import Project from "./Project";

function MyProject() {
    const details = [
        {
            id: 1,
            href: "https://cpuscheduling.vercel.app/",
            imageId: 'folder.png',
            imageIdD: 'folder-dark.png',
            title: 'CPU Scheduling',
            date: '11/30/2025',
        },
        {
            id: 2,
            href: "https://apps-dev-midterm-proj.vercel.app/",
            imageId: 'folder.png',
            imageIdD: 'folder-dark.png',
            title: 'E-Commerce App',
            date: '09/27/2025',
        },
        {
            id: 3,
            href: "https://productcard-vert.vercel.app/",
            imageId: 'folder.png',
            imageIdD: 'folder-dark.png',
            title: 'Product Card',
            date: '08/18/2025',
        },
    ];
    return (
        <div>
            <Project details={details} />
        </div>
    )
}

export default MyProject;