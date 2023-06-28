// 'use client'
import Image from "next/image";

import Hero from "@/components/Hero";

import { Navbar } from "@/components";


// const lato = Lato({
//   subsets: ["latin"],
//   weight: ["300", "400", "700", "900"],
// });


export default function Home() {
  return (
    <main className=''>
      <Navbar />
      <Hero />
    </main>
  );
}
