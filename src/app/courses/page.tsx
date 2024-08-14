"use client";
import React, { useState, useRef, useEffect } from "react";
import { SparklesCore } from "../../components/ui/sparkles";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import { cn } from "@/lib/utils";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const page = () => {

  return (
    <div className="bg-black pt-36 ">
        <div className="min-h-screen bg-black pb-24">
          <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
          </BentoGrid>
          
        </div>
    </div>
  )
}

export default page

const items = [
    {
      title: "Music Theory Fundamentals",
      description: "Master the building blocks of music and learn to read sheet music.",
      header: <img className="w-full h-full flex flex-1 min-h-[6rem] overflow-hidden rounded bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover" src="/img/1.png" alt="/" />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Art of Songwriting",
      description: "Explore the creative process of crafting memorable songs.",
      header: <img className="w-full h-full flex flex-1 min-h-[6rem] overflow-hidden rounded bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover" src="/img/2.png" alt="/" />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Music Production Essentials",
      description: "Learn the techniques and tools to create professional-sounding recordings.",
      header: <img className="w-full h-full flex flex-1 min-h-[6rem] overflow-hidden rounded bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover" src="/img/3.png" alt="/" />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The History of Rock Music",
      description:"Dive into the evolution of rock music and its cultural impact.",
      header: <img className="w-full h-full flex flex-1 min-h-[6rem] overflow-hidden rounded bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover" src="/img/5.png" alt="/" />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Music Entrepreneurship",
      description: "Explore the business side of the music industry and learn to thrive as an independent artist.",
      header: <img className="w-full h-full flex flex-1 min-h-[6rem] overflow-hidden rounded bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover" src="/img/4.png" alt="/" />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Music and the Brain",
      description: "Discover the fascinating relationship between music and human cognition.",
      header: <img className="w-full h-full flex flex-1 min-h-[6rem] overflow-hidden rounded bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover" src="/img/6.png" alt="/" />,
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "World Music Traditions",
      description: "Explore the rich diversity of musical styles from around the globe.",
      header: <img className="w-full h-full flex flex-1 min-h-[6rem] overflow-hidden rounded bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover" src="/img/7.png" alt="/" />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];