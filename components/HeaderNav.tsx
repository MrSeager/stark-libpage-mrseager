"use client";
//Components
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import NavProductLink from "./NavProductLink";
//Icons
import { CgStark } from "react-icons/cg";
import { TiArrowSortedDown } from "react-icons/ti";

export default function HeaderNav() {
    const [productOpen, setProductOpen] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return(
        <header className="shadow w-full max-w-[120rem] bg-[#f6f6eb] text-[#381fd1] font-bold">
            <nav className="relative w-full flex justify-center items-center gap-3 py-3">
                <CgStark size={30} className="text-white bg-[#381fd1] rounded-full p-1" />
                <button 
                    type="button"
                    onClick={() => setProductOpen(!productOpen)}
                    className="uppercase flex gap-1 items-center cursor-pointer border border-2 border-transparent rounded-md px-3 duration-300
                                hover:border-[#381fd1]"
                    >
                    Product <TiArrowSortedDown />
                </button>
                <div className={`z-100 absolute grid grid-cols-3 grid-cols-[150px_150px_1fr] gap-3 p-3 rounded-md top-12 left-85 bg-white shadow-lg font-light duration-300 overflow-hidden
                                ${productOpen ? '' : 'scale-0 -translate-x-70 -translate-y-25'}`}>
                    <NavProductLink 
                        productName="Some name 1"
                        productDis="Some product discription 1"
                    />
                    <NavProductLink 
                        productName="Some name 2"
                        productDis="Some product discription 2"
                    />
                    <Link 
                        href={'/'} 
                        className="p-2 rounded-lg row-span-2 flex flex-col items-center justify-between bg-[#f3f2fc] border border-transparent duration-300
                                    hover:border-[#381fd1]">
                        <Image 
                            src={'/images/white-paper-callout_ngwp4t.png'}
                            alt="Product logo"
                            width={80}
                            height={80}
                        />
                        <div className="flex flex-col gap-1">
                            <h1 className="text-start w-full text-lg leading-tight">Some name for product</h1>
                            <p className="text-start text-wrap text-[#10284b] leading-snug">Some description for<br /> some another product</p>
                        </div>
                    </Link>
                    <NavProductLink 
                        productName="Some name 3"
                        productDis="Some product discription 3"
                    />
                    <NavProductLink 
                        productName="Some name 4"
                        productDis="Some product discription 4"
                    />
                </div>
                <NavLink 
                    text="Link"
                    link="/"
                />
                <NavLink 
                    text="Blog"
                    link="/"
                />
                <NavLink 
                    text="Library"
                    link="/"
                />
                <NavLink 
                    text="Support"
                    link="/"
                />
                <NavLink 
                    text="Log in"
                    link="/"
                />
                <button
                    type="button"
                    className="uppercase flex gap-1 items-center cursor-pointer border border-2 border-[#381fd1] bg-[#381fd1] text-white rounded-md px-3 duration-300
                                hover:bg-transparent hover:text-[#381fd1]"
                >
                    30-day free team trial
                </button>
            </nav>
        </header>
    );
}