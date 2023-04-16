
import Image from 'next/image'
import { Playfair_Display } from 'next/font/google'
import { Header } from '@/app/components/Header'
import { PostCard } from '@/app/components/PostCard'
import type { PostProps } from '@/app/components/PostCard'

async function getPosts(){
  const res = await fetch("http://localhost:3000/api/posts")
  if (!res.ok){
    throw new Error("someting went wrong")
  }
  return res.json()
}

  export default async function Home() {
    const allPosts = await getPosts()
    // console.log(allPosts)
  return (
    <main 
    className="min-h-screen pb-24 h-[1300px] w-screen">

<Header/>
<div className="pt-[1000px]">
{
  allPosts.data.filter((post:PostProps) => post.featured === true
  ).map((post:PostProps) => <PostCard {...post} key={post.title}/>)
}
  </div>
    </main>
  )
}
