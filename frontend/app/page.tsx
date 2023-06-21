// 'use client'
import Image from 'next/image';
import { Lato } from 'next/font/google';
import { Nunito } from 'next/font/google';
import Hero from '@/components/Hero';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Navbar } from '@/components';
import NotificationProvider from '@/context/NotificationProvider';

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

const nunito = Nunito({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className=''>
      <Navbar />
      <Hero />
    </main>
  );
}
