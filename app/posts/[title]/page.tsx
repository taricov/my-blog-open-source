import posts from "@/data/posts.json";

 const Post = ({ params: {title}}: any) => {

    const thisPost = posts.data.filter(post => post.title === title)[0]

    return (
        <>


<div className="post__layout" >
  <h1>{thisPost.title}</h1>
  <div className="metadata">
  <h4>Date: {thisPost.createdAt}</h4>
  <h4>Keywords: {thisPost.tags.join(", ")}</h4>
  </div>
  <p>{thisPost.body} </p>
</div>

<div className="overlay"></div>

        </>
    )
}  

export default Post;