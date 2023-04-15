import type { PostProps } from '../components/PostCard'
import  { PostCard } from '../components/PostCard'

async function getPosts(){
  const res = await fetch("http://localhost:3000/api/posts")
  if (!res.ok){
    throw new Error("someting went wrong")
  }
  return res.json()
}

  export default async function Posts(){
    const allPosts = await getPosts()
    console.log(allPosts)
  return (
    <main 
    className="min-h-screen pb-24 h-[1300px] w-screen">

{
  allPosts.data.map((post:PostProps) =><PostCard {...post} key={post.title}/>)
}
    </main>
  )
}
