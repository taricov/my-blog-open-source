// import {data} from "../posts"
import  path from "path"
import { promises as fs } from "fs"

export async function GET(request: Request){
  const postsFilePath = path.join(process.cwd(), "data")
  const postsData = await fs.readFile(postsFilePath + "/posts.json", "utf8")
  // console.log(postsData)
  return new Response(postsData)

} 
