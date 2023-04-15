
import Image from 'next/image'
import { Playfair_Display } from 'next/font/google'
import { Header } from './components/Header'




const inter = Playfair_Display({ 
  weight:["400", "500", "600", "700", "800", "900"],
  subsets: ['latin'] })


export default function Home() {
  return (
    <main 
    className="min-h-screen pb-24 h-[1300px] w-screen">

<Header/>
    </main>
  )
}
