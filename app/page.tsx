
import Image from 'next/image'
import { Playfair_Display } from 'next/font/google'
import { Header } from './components/Header'
import { Post} from './components/Post'
import type { PostProps } from './components/Post'

async function getPosts(){
  const res = await fetch("http://localhost:3000/api/posts")
  if (!res.ok){
    throw new Error("someting went wrong")
  }
  return res.json()
}

  export default async function Home() {
    const allPosts = await getPosts()
    console.log(allPosts)
  return (
    <main 
    className="min-h-screen pb-24 h-[1300px] w-screen">

<Header/>
{
  allPosts.data.map((post:PostProps) =><Post {...post} key={post.title}/>)
}
    </main>
  )
}
