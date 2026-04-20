'use client';
//Components
import Link from "next/link";
import { useState } from "react";
import SectionOneLink from "./SectionOneLink";
//Icons
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function SectionOne() {
    const [open, setOpen] = useState<boolean>(false);

    const categories = [
        {text: 'All', href: '/'},
        {text: 'Blogs & Articles', href: '/'},
        {text: 'Books', href: '/'},
        {text: 'Checklists', href: '/'},
        {text: 'Colors', href: '/'},
        {text: 'Community', href: '/'},
        {text: 'Companies & Organizations', href: '/'},
        {text: 'Courses & Certificates', href: '/'},
        {text: 'Design Pattersn', href: '/'},
        {text: 'Design Systems', href: '/'},
        {text: 'Emails', href: '/'},
        {text: 'Employment', href: '/'},
        {text: 'Gaming', href: '/'},
        {text: 'Guides', href: '/'},
        {text: 'Media', href: '/'},
        {text: 'Mobile', href: '/'},
        {text: 'Newsletters', href: '/'},
        {text: 'Plugins', href: '/'},
        {text: 'Podcasts & Videos', href: '/'},
        {text: 'Resources', href: '/'},
        {text: 'Software & Tools', href: '/'},
        {text: 'Web Standards', href: '/'},
    ]

    return(
        <div className="flex flex-col gap-2 w-[20%] text-[#7b7b7c]">
            <h1 className="text-[15px]">Search Library</h1>            
            <form className="relative w-full">
                <input title="search" type="text" id="floating_outlined" className="text-[15px] block px-2.5 pb-2 pt-3 w-full text-sm text-heading bg-transparent rounded border-1 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " />
                <label className="absolute text-sm text-body duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-1 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"><IoIosSearch size={25} /></label>
            </form>
            <div className="ps-5 flex flex-col gap-5">
                <SectionOneLink 
                    text="Home"
                    href="/"
                />
                <SectionOneLink 
                    text="Collection"
                    href="/"
                />
              <button 
                type="button"
                onClick={() => setOpen(!open)}
                className="cursor-pointer flex font-semibold justify-between items-center duration-500
                          hover:text-[#381fd1]"
              >
                Categories<MdKeyboardArrowDown size={23} className={`duration-500 ${!open ? 'rotate-0' : 'rotate-180'}`} />
              </button>
              <div className={`ps-5 flex flex-col gap-5 duration-500 overflow-hidden ${open ? 'h-full' : 'h-0'}`}>
                {categories.map((category, index) => (
                    <SectionOneLink 
                        key={index}
                        text={category.text}
                        href={category.href}
                    />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 duration-500 text-[#10284b] bg-[#f3f2fc] p-4 rounded-[10px]
                            hover:scale-103">
                <h1 className="text-[19px] text-base/6 font-bold">Constribute to Stark</h1>
                <p className="text-base/5 text-[14px]">Got any accessibility resources or news?</p>
                <button 
                    type="button" 
                    className="duration-500 font-semibold cursor-pointer bg-[#381fd1] text-[#f6f6eb] border border-[#381fd1] py-2 rounded-md
                                hover:bg-transparent hover:text-[#381fd1]"
                >
                    Submit a Resource
                </button>
            </div>
        </div>
    );
}