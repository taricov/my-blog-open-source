

export interface PostProps {
    title : string,
    createdAt: string, 
    tags: string[],
    body: string
}

export const Post = ({...post}: PostProps) => {

    return (
        <>
        <div className="flex flex-col items-center justify-center">

        <h1 className="text-3xl">{post.title}</h1>
        <span>{post.createdAt}</span>
        <p>{post.tags}</p>
        <p>{post.body}</p>
        </div>
        </>
    )
}  
