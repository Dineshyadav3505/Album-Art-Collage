"use client"
import HeroSection from '@/components/HeroSection'
import CoursesSection from '@/components/CoursesSection'
import React, { useEffect, useState } from 'react'
import Footer from '@/components/Footer'

const Home = () => {

  const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

  return (
    <div className="min-h-screen bg-back/[.96] antialiased bg-grid-white/[0.2]">
      <HeroSection/>
      <CoursesSection />  

    </div>
  )
}

export default Home;