"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";


const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive} >
                
                <Link href="/" className="flex gap-1 items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                    Home
                </Link>
                <Link href="/about"> About </Link>
                <Link href="/contact">contact </Link>
                <MenuItem setActive={setActive} active={active} item="Our Courses">
                    <div className="text-sm grid lg:grid-cols-2  gap-10 p-4">
                        <ProductItem
                        title="Basic Music Theory"
                        href="/courses"
                        src=""
                        description="Learn the basics of music theory and composition"
                        />
                        <ProductItem
                        title="Advanced Compositions"
                        href="/courses"
                        src=""
                        description="Learn how to compose music for films and games."
                        />
                        <ProductItem
                        title="Song Writing"
                        href="/courses"
                        src=""
                        description="Learn how to write songs and lyrics."
                        />
                        <ProductItem
                        title="Music Production"
                        href="/courses"
                        src=""
                        description="Learn how to produce music using DAWs."
                        />
                    </div>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default Navbar