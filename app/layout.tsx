import './globals.css'
// import {motion } from "framer-motion"
import { Playfair_Display } from 'next/font/google'

export const metadata = {
  title: 'The Samurai Nation',
  description: 'A personal blog that has a podcast bears the same name The Samurai Nation TSN',
}

const playFair = Playfair_Display(
  {
    subsets: ["latin"],
    weight:[ "400", "500", "600", "700", "800", "900"]
  }
)


// const pageVariant = {
//   initial: { opacity: 0, y: 15}, 
//   animate: { opacity: 1, y: 0},
//   exit: { opacity: 0, y: 15},
//   transition: { duration: .5},
//  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{scrollBehavior: "smooth"}}>
      <body className={playFair.className}>
        {/* <motion.div>
        {children}
        </motion.div> */}

        {children}
        </body>
    </html>
  )
}
