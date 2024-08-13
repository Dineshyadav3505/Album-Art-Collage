import HeroSection from '@/components/HeroSection'
import CoursesSection from '@/components/CoursesSection'
import React from 'react'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className="min-h-screen bg-back/[.96] antialiased bg-grid-white/[0.2]">
      <HeroSection/>
      <CoursesSection />  

    </div>
  )
}

export default page