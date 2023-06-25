// 'use client'
import Image from "next/image";
// import { Lato } from "next/font/google";
// import { Nunito } from "next/font/google";
import Hero from '../components/Hero'

import { Navbar } from "@/components";

// const lato = Lato({
//   subsets: ["latin"],
//   weight: ["300", "400", "700", "900"],
// });

// const nunito = Nunito({
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
    </main>
  );
}
