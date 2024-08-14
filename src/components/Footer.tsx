
"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const Footer = () => {
    const data = [
        {title:"Explore", link1:"/", lable1:"Home", link2:"/about", lable2:"About", link3:"/contact", lable3:"contact", link4:"/courses", lable4:"our Courses"},
        {title:"Follow", link1:"/", lable1:"Twitter", link2:"/", lable2:"Instagram", link3:"/", lable3:"facebook",  },
    ]

  return (
    <div className='text-white relative h-auto lg:flex border-t-[.2px] bg-black'>
        <div className=" w-full lg:w-[35%] border-r-[.2px] py-3 px-8 flex justify-center items-center">
            <Image className=' object-cover bg-black' src="/img/logo.png" alt="" width={250} height={150} />
        </div> 
        <div className="flex flex-col lg:flex-row w-full lg:w-[75%]">
            {data.map((item, index)=>(
                <div key={index} className="w-[40%] flex flex-col pl-10 py-5">
                    <h6 className='text-sm capitalize text-zinc-600'>{item.title}</h6>
                    <Link href={`${item.link1}`} className='text-white capitalize text-base pt-3 py-1'>{item.lable1}</Link>
                    <Link href={`${item.link2}`} className='text-white capitalize text-base py-1'>{item.lable2}</Link>
                    <Link href={`${item.link3}`} className='text-white capitalize text-base py-1'>{item.lable3}</Link>
                    <Link href={`${item.link4}`} className='text-white capitalize text-base py-1'>{item.lable4}</Link>
                </div>
            ))}
            <div className=" w-full h-10 lg:w-[60%] flex px-10 lg:px-3 flex-col py-5">
            <h6 className='text-sm capitalize text-zinc-600'>join us </h6>
            
            <form action="" className='flex bg-black  pb-10 gap-3 w-full' >
                <input
                className=' bg-transparent focus:outline-none border-b-[.2px] w-64 px-1 py-3 border-white text-white' 
                type="email" 
                />

                <button type='submit' className=' hover:pl-3 duration-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>

            </form>

            </div>
        </div> 
        
    </div>
  )
}

export default Footer