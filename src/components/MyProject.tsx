import Project from "./Project";

function MyProject() {
    const details = [
        {
            id: 1,
            href: "https://www.facebook.com/rochelle.andales.90/",
            imageId: 'folder.png',
            title: 'OS',
            date: '10/10/2025',
        },
        {
            id: 2,
            href: "https://www.facebook.com/rochelle.andales.90/",
            imageId: 'folder.png',
            title: 'OS',
            date: '10/10/2025',
        },
        {
            id: 3,
            href: "https://www.facebook.com/rochelle.andales.90/",
            imageId: 'folder.png',
            title: 'OS',
            date: '10/10/2025',
        },
        {
            id: 4,
            href: "https://www.facebook.com/rochelle.andales.90/",
            imageId: 'folder.png',
            title: 'OS',
            date: '10/10/2025',
        },
        {
            id: 5,
            href: "https://www.facebook.com/rochelle.andales.90/",
            imageId: 'folder.png',
            title: 'OS',
            date: '10/10/2025',
        },
    ];
    return (
        <div>
            <Project details={details} />
        </div>
    )
}

export default MyProject;