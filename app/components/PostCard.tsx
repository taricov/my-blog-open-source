import Image from "next/image"
import Link from "next/link"

export interface PostProps {
    title : string
    createdAt: string
    tags: string[]
    featured: boolean
    body: string
}

export const PostCard = ({...post}: PostProps) => {

    return (
        <>
  <div className="flex items-center justify-center h-screen">
      <Link className="rounded-lg relative block w-1/4 bg-gray-900 group overflow-hidden" href="#">
        <Image width={100} height={100} className=" absolute inset-0 object-cover w-full h-full group-hover:opacity-50 duration-300 transition-all"
          src="../../public/next.svg" alt="someting" />
        <div className="relative p-2">
          <div className="mt-40">
            <div
              className="w-full transition-all ease-in-out translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-500">
              <div className="flex-col items-center justify-center text-center">
                  <h2>{post.title}</h2>
                <p className="text-sm text-white">
{post.createdAt}
                </p>
                <p className="text-sm text-white">
keywords: {post.tags.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
        </>
    )
}  
