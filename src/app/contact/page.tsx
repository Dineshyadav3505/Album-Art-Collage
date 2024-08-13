"use client";
import React from 'react';
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const ContactUsPage = () => {
  return (
    <div className="h-screen rounded-md bg-black mt-12 flex flex-col px-5 items-center justify-center relative w-full">
      <BackgroundGradient className="rounded-[22px]  max-w-7xl p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <h1 className="text-black mt-4 mb-2 text-center text-xl lg:text-3xl dark:text-neutral-200">
          Contact Us
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          We would love to hear from you! Please reach out with any questions or inquiries you may have.
        </p>

        <div className="mb-6">
          <h2 className="text-black mt-4 mb-2 text-lg dark:text-neutral-200">Get in Touch</h2>
          <ul className="text-sm text-neutral-600 dark:text-neutral-400">
            <li><strong>Email:</strong> <a href="mailto:info@harmonyinstitute.com" className="text-blue-500 hover:underline">info@harmonyinstitute.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-500 hover:underline">(123) 456-7890</a></li>
            <li><strong>Address:</strong> 123 Music Lane, City, State, ZIP</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-black mt-4 mb-2 text-lg dark:text-neutral-200">Follow Us</h2>
          <ul className="text-sm text-neutral-600 dark:text-neutral-400">
            <li><a href="https://www.facebook.com/harmonyinstitute" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Facebook</a></li>
            <li><a href="https://www.instagram.com/harmonyinstitute" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Instagram</a></li>
            <li><a href="https://www.twitter.com/harmonyinstitute" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Twitter</a></li>
            <li><a href="https://www.linkedin.com/school/harmonyinstitute" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a></li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-black mt-4 mb-2 text-lg dark:text-neutral-200">Visit Us</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            We welcome visitors to our campus! Please contact us to schedule a tour or meeting.
          </p>
        </div>
      </BackgroundGradient>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default ContactUsPage;