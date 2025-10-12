import BlogInfo from "../BlogInfo";

function Blog() {

    const information = [
        {
            id: 1,
            title: 'Welcome to My Blog',
            date: 'October 9, 2025',
            description: "Hello! This is my first blog post. I'll be sharing my thoughts and experiences here. Thanks for visiting!"
        },
        {
            id: 2,
            title: 'My Second Post',
            date: 'October 10, 2025',
            description: 'Today I want to share some thoughts about everyday life and the little things that make us happy.'
        },
        {
            id: 3,
            title: 'Learning Something New',
            date: 'October 12, 2025',
            description: "Every day is an opportunity to learn and grow. Here's what I discovered recently..."
        },
    ];
    return (
        <div>
            <BlogInfo information={information} />
        </div >
    )
}

export default Blog;



