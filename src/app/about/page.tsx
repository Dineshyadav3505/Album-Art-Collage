"use client";
import React from 'react'
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen py-28 rounded-md bg-black flex flex-col px-5 items-center justify-center relative w-full">
      <BackgroundGradient className="rounded-[22px] max-w-7xl  p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <p className=" text-black mt-4 mb-2 text-center text-xl lg:text-3xl dark:text-neutral-200">
          About Us
        </p>

        {data.map((item, index) => (
          <div key={index} className="mb-6">
            {item.content}
          </div>
        ))}
      </BackgroundGradient>

      <ShootingStars />
      <StarsBackground />
    </div>
  )
}

export default AboutUsPage

const data = [
  {
    section: "Our Mission",
    content: (
      <>
        <p className="text-black mt-4 mb-2 text-sm lg:text-xl dark:text-neutral-200">
          Our Mission
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          At Harmony Institute, our mission is to nurture and inspire the next generation of musicians, composers, and music industry professionals. We believe that music is a universal language that transcends boundaries, and we are committed to providing a creative and supportive environment where students can explore their passion for music.
        </p>
      </>
    ),
  },
  {
    section: "Our Vision",
    content: (
      <>
        <p className="text-black mt-4 mb-2 text-sm lg:text-xl dark:text-neutral-200">
          Our Vision
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          We envision a world where music education is accessible to all, fostering creativity, collaboration, and innovation. Our goal is to empower students with the skills, knowledge, and confidence they need to succeed in the ever-evolving music landscape.
        </p>
      </>
    ),
  },
  {
    section: "Our Values",
    content: (
      <>
        <p className="text-black mt-4 mb-2 text-sm lg:text-xl dark:text-neutral-200">
          Our Values
        </p>
        <ul className="text-sm text-neutral-600 dark:text-neutral-400">
          <li>Creativity: We encourage our students to think outside the box and express themselves through their music.</li>
          <li>Collaboration: We foster a community where students can work together, share ideas, and learn from one another.</li>
          <li>Excellence: We strive for the highest standards in music education, providing our students with the tools they need to excel.</li>
          <li>Inclusivity: We welcome students from all backgrounds and experiences, promoting diversity in our programs and community.</li>
        </ul>
      </>
    ),
  },
  {
    section: "Our Programs",
    content: (
      <>
        <p className="text-black mt-4 mb-2 text-sm lg:text-xl dark:text-neutral-200">
          Our Programs
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Harmony Institute offers a wide range of programs designed to cater to various interests and career paths in the music industry, including:
        </p>
        <ul className="text-sm text-neutral-600 dark:text-neutral-400">
          <li><strong>Bachelor of Music (B.M.):</strong> A comprehensive program focusing on performance, composition, and music theory.</li>
          <li><strong>Diploma in Music Production:</strong> Learn the art of recording, mixing, and producing music in a state-of-the-art studio environment.</li>
          <li><strong>Certificate in Music Business:</strong> Gain insights into the music industry, covering topics like marketing, management, and entrepreneurship.</li>
          <li><strong>Workshops and Masterclasses:</strong> Participate in hands-on workshops led by industry professionals and guest artists.</li>
        </ul>
      </>
    ),
  },
  {
    section: "Our Faculty",
    content: (
      <>
        <p className="text-black mt-4 mb-2 text-sm lg:text-xl dark:text-neutral-200">
          Our Faculty
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Our faculty consists of experienced musicians, educators, and industry professionals dedicated to guiding students on their musical journeys. With a wealth of knowledge and diverse backgrounds, our instructors provide personalized attention and mentorship to help students reach their full potential.
        </p>
      </>
    ),
  },
  {
    section: "Facilities",
    content: (
      <>
        <p className="text-black mt-4 mb-2 text-sm lg:text-xl dark:text-neutral-200">
          Facilities
        </p>
        <ul className="text-sm text-neutral-600 dark:text-neutral-400">
          <li><strong>State-of-the-Art Recording Studios:</strong> Experience hands-on training in professional-grade studios.</li>
          <li><strong>Performance Spaces:</strong> Showcase your talent in our concert halls and practice rooms.</li>
          <li><strong>Music Library:</strong> Access a vast collection of scores, recordings, and educational resources.</li>
        </ul>
      </>
    ),
  },
  {
    section: "Student Life",
    content: (
      <>
        <p className="text-black mt-4 mb-2 text-sm lg:text-xl dark:text-neutral-200">
          Student Life
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          At Harmony Institute, we believe that learning extends beyond the classroom. Our vibrant student community offers various extracurricular activities, including:
        </p>
        <ul className="text-sm text-neutral-600 dark:text-neutral-400">
          <li><strong>Music Clubs and Ensembles:</strong> Join fellow musicians in bands, orchestras, and choirs.</li>
          <li><strong>Concerts and Events:</strong> Attend and participate in performances, workshops, and festivals throughout the year.</li>
          <li><strong>Networking Opportunities:</strong> Connect with industry professionals and alumni to build valuable relationships.</li>
        </ul>
      </>
    ),
  },
  {
    section: "Join Us",
    content: (
      <>
        <p className="text-black mt-4 mb-2 text-sm lg:text-xl dark:text-neutral-200">
          Join Us
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Whether you are a budding musician or an aspiring industry professional, Harmony Institute is the perfect place to pursue your passion for music. Join our community and embark on a transformative journey that will shape your future in the world of music.
        </p>
      </>
    ),
  },
  {
    section: "Contact Us",
    content: (
      <>
        <p className="text-black mt-4 mb-2 text-sm lg:text-xl dark:text-neutral-200">
          Contact Us
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          For more information about our programs, admissions, or campus life, please contact us at:
        </p>
        <ul className="text-sm text-neutral-600 dark:text-neutral-400">
          <li><strong>Email:</strong> info@harmonyinstitute.com</li>
          <li><strong>Phone:</strong> (123) 456-7890</li>
          <li><strong>Address:</strong> 123 Music Lane, City, State, ZIP</li>
        </ul>
      </>
    ),
  },
];