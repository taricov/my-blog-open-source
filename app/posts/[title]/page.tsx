import posts from "@/data/posts.json";

 const Post = ({ params: {title}}: any) => {

    const thisPost = posts.data.filter(post => post.title === title)[0]

    return (
        <>
    <div>{thisPost.title}</div>
    <div>tags: {thisPost.tags.join(", ")}</div>
        </>
    )
}  

export default Post;