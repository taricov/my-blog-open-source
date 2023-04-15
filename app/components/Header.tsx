"use client";

import { motion, useScroll, useTransform } from "framer-motion"
import {useRef } from "react"


  export function Header() {
      const headerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target:headerRef,
        offset:["end end", "end start"]
    })
// console.log(scrollYProgress)
const height =useTransform(scrollYProgress, [0,1], ["500px","100px"])
const position =useTransform(scrollYProgress, [0,1], ["sticky","fixed"])
const fontSz =useTransform(scrollYProgress, [0,1], ["4rem","2rem"])
  return (
    <div>
        
        <motion.header 
        ref={headerRef}
        style={{height, position}}

      className="w-screen flex items-end justify-center">

<motion.h1 
style={{fontSize:fontSz}}
className='text-5xl uppercase text-slate-200'>the <span>samurai</span><span>nation</span></motion.h1>
</motion.header>
    </div>
  )
}
