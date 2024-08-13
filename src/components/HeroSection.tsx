import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { HoverBorderGradient } from "./ui/hover-border-gradient";

function HeroSection() {
  return (
    <div
    className="h-auto md:h-[45rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
        />
        <div className="p-4 relative z-10 w-full text-center" >
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Unleash Your Musical Potential</h1>
            <p
            className="mt-10 font-normal text-base md:text-lg text-neutral-300 px-5 lg:px-44 mx-auto"
            >Welcome to <span className=" font-semibold">Harmony Institute</span>, where we believe that every aspiring musician deserves the opportunity to shine. Our comprehensive programs are designed to nurture talent and foster creativity, offering a diverse range of courses in performance, composition, music theory, and technology.</p>

            <div className="mt-10 flex justify-center">
                <Link href={"/courses"}>
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                        <span>Explore More</span>
                    </HoverBorderGradient>
                </Link>
            </div>
        </div>        
    </div>
  )
}

export default HeroSection