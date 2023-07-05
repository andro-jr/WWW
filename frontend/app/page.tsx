// 'use client'
import Image from "next/image";

import Hero from "@/components/Hero";

import { Navbar, Card, Service, DestinationOpt } from "@/components";
import { Recommended, Insights, Newsletter, Footer } from "@/components";
import DestinationList from "@/components/DestinationList";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <div className="container flex flex-col item-center justify-center max-w-[1500px] mx-auto">
        <DestinationList />
        <Recommended />
      </div>
      <Insights />
      <div className="container flex flex-col item-center justify-center max-w-[1500px] mx-auto">
        <Service />
      </div>
      <DestinationOpt />
      <div className="container flex flex-col item-center justify-center max-w-[1500px] mx-auto">
        <Newsletter />
      </div>

      <Footer />
    </main>
  );
}
