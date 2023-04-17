"use client";

import { easeInOut, motion, useScroll, useTransform } from "framer-motion"
import {useRef } from "react"


  export function Header() {
      const headerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target:headerRef,
        offset:["start end", "end start"]
    })
// console.log(scrollYProgress)
const height =useTransform(scrollYProgress, [0,0.7, 1], ["600px","600px", "100px"])
const position =useTransform(scrollYProgress, [0,1], ["sticky","fixed"])
const background =useTransform(scrollYProgress, [0,0.9, 1], ["","", "rgba(0,200,20,1)"])
const fontSz =useTransform(scrollYProgress, [0,0.9, 1], ["500px","500px", "220px"])
const samuraiColor =useTransform(scrollYProgress, [0,0.6, 1], ["white","white", "red"])
  return (
    <div>
        
        <motion.header 
        ref={headerRef}
        style={{height, position, background}}
      className="w-screen flex items-end justify-center z-10">

{/* <motion.h1 
style={{fontSize:fontSz}}
className='text-5xl uppercase text-slate-200'>the <motion.span style={{color: samuraiColor}}>samurai</motion.span><span>nation</span></motion.h1> */}


<div style={{width: fontSz}} className="flex py-3">

<svg className="mr-3" width="106" height="71" viewBox="0 0 106 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.16895 71V14.0645H0.800781V0.53125H31.6309V14.0645H23.2627V71H9.16895ZM35.5547 71V0.53125H49.5684V25.7158H56.2148V0.53125H70.2285V71H56.2148V39.0488H49.5684V71H35.5547ZM76.4746 71V0.53125H104.662V14.1445H90.8086V27.8779H104.102V41.1309H90.8086V57.2666H105.583V71H76.4746Z" fill="white"/>
</svg>


<svg className="mr-1" width="272" height="73" viewBox="0 0 272 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path style={{fill:samuraiColor}} d="M18.8594 72.6406C12.4264 72.6406 7.7819 71.0391 4.92578 67.8359C2.09635 64.6328 0.681641 59.5345 0.681641 52.541V45.6543H14.6152V54.4629C14.6152 56.0911 14.8555 57.3724 15.3359 58.3066C15.8431 59.2142 16.7106 59.668 17.9385 59.668C19.2197 59.668 20.1006 59.2943 20.5811 58.5469C21.0882 57.7995 21.3418 56.5716 21.3418 54.8633C21.3418 52.7012 21.1283 50.8994 20.7012 49.458C20.2741 47.9899 19.5267 46.6019 18.459 45.2939C17.418 43.9593 15.9632 42.4111 14.0947 40.6494L7.76855 34.6436C3.04395 30.1859 0.681641 25.0876 0.681641 19.3486C0.681641 13.3428 2.06966 8.76497 4.8457 5.61523C7.64844 2.46549 11.6924 0.890625 16.9775 0.890625C23.4372 0.890625 28.015 2.6123 30.7109 6.05566C33.4336 9.49902 34.7949 14.7308 34.7949 21.751H20.4609V16.9062C20.4609 15.9453 20.1807 15.1979 19.6201 14.6641C19.0863 14.1302 18.3522 13.8633 17.418 13.8633C16.2969 13.8633 15.4694 14.1836 14.9355 14.8242C14.4284 15.4382 14.1748 16.2389 14.1748 17.2266C14.1748 18.2142 14.4417 19.2819 14.9756 20.4297C15.5094 21.5775 16.5638 22.8988 18.1387 24.3936L26.2666 32.2012C27.8949 33.7493 29.3896 35.391 30.751 37.126C32.1123 38.8343 33.2067 40.8363 34.0342 43.1318C34.8617 45.4007 35.2754 48.1768 35.2754 51.46C35.2754 58.0798 34.0475 63.2715 31.5918 67.0352C29.1628 70.7721 24.9186 72.6406 18.8594 72.6406ZM38.0781 72L44.8848 1.53125H68.7881L75.4746 72H62.1416L61.1406 60.6289H52.6523L51.7715 72H38.0781ZM53.6533 49.3779H60.0596L56.9766 13.543H56.3359L53.6533 49.3779ZM79.7988 72V1.53125H101.26L107.186 44.4932L113.071 1.53125H134.732V72H121.84V21.2305L113.752 72H101.1L92.5312 21.2305V72H79.7988ZM157.274 72.6406C151.402 72.6406 147.078 70.999 144.302 67.7158C141.526 64.4059 140.138 59.5479 140.138 53.1416V1.53125H153.831V52.5811C153.831 53.7555 153.898 54.89 154.031 55.9844C154.165 57.0521 154.472 57.9329 154.952 58.627C155.433 59.321 156.207 59.668 157.274 59.668C158.369 59.668 159.156 59.3343 159.637 58.667C160.117 57.973 160.411 57.0788 160.518 55.9844C160.651 54.89 160.718 53.7555 160.718 52.5811V1.53125H174.411V53.1416C174.411 59.5479 173.023 64.4059 170.247 67.7158C167.471 70.999 163.147 72.6406 157.274 72.6406ZM179.816 72V1.53125H201.438C205.041 1.53125 207.764 2.35872 209.605 4.01367C211.447 5.64193 212.675 7.9375 213.289 10.9004C213.93 13.8366 214.25 17.2933 214.25 21.2705C214.25 25.1143 213.756 28.1839 212.769 30.4795C211.808 32.7751 209.979 34.3633 207.283 35.2441C209.499 35.6979 211.047 36.8057 211.928 38.5674C212.835 40.3024 213.289 42.5579 213.289 45.334V72H199.396V44.4131C199.396 42.3577 198.968 41.0898 198.114 40.6094C197.287 40.1022 195.939 39.8486 194.07 39.8486V72H179.816ZM194.15 27.6367H197.554C199.502 27.6367 200.477 25.5146 200.477 21.2705C200.477 18.5212 200.263 16.7194 199.836 15.8652C199.409 15.0111 198.608 14.584 197.434 14.584H194.15V27.6367ZM216.973 72L223.779 1.53125H247.683L254.369 72H241.036L240.035 60.6289H231.547L230.666 72H216.973ZM232.548 49.3779H238.954L235.871 13.543H235.23L232.548 49.3779ZM258.053 72V1.53125H271.666V72H258.053Z" fill="white"/>
</svg>

<svg width="206" height="73" viewBox="0 0 206 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.123047 72V1.53125H14.6172L21.1035 35.2842V1.53125H34.7168V72H20.9434L13.8965 36.7656V72H0.123047ZM39.041 72L45.8477 1.53125H69.751L76.4375 72H63.1045L62.1035 60.6289H53.6152L52.7344 72H39.041ZM54.6162 49.3779H61.0225L57.9395 13.543H57.2988L54.6162 49.3779ZM85.7666 72V15.0645H77.3984V1.53125H108.229V15.0645H99.8604V72H85.7666ZM111.512 72V1.53125H125.125V72H111.512ZM147.547 72.6406C141.915 72.6406 137.604 70.9456 134.614 67.5557C131.651 64.139 130.17 59.2142 130.17 52.7812V19.3086C130.17 13.276 131.638 8.69824 134.574 5.5752C137.537 2.45215 141.861 0.890625 147.547 0.890625C153.232 0.890625 157.543 2.45215 160.479 5.5752C163.442 8.69824 164.924 13.276 164.924 19.3086V52.7812C164.924 59.2142 163.429 64.139 160.439 67.5557C157.477 70.9456 153.179 72.6406 147.547 72.6406ZM147.667 59.668C149.802 59.668 150.87 57.5993 150.87 53.4619V19.0684C150.87 15.5983 149.829 13.8633 147.747 13.8633C145.398 13.8633 144.224 15.6383 144.224 19.1885V53.542C144.224 55.7308 144.491 57.3057 145.024 58.2666C145.558 59.2008 146.439 59.668 147.667 59.668ZM170.609 72V1.53125H185.104L191.59 35.2842V1.53125H205.203V72H191.43L184.383 36.7656V72H170.609Z" fill="white"/>
</svg>
</div>

</motion.header>
    </div>
  )
}
