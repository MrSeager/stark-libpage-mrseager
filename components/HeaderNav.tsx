//Components
import Link from "next/link";
import NavLink from "./NavLink";
//Icons
import { CgStark } from "react-icons/cg";
import { TiArrowSortedDown } from "react-icons/ti";

export default function HeaderNav() {
    return(
        <header className="w-full max-w-[120rem] bg-[#f6f6eb] text-[#381fd1] font-bold">
            <nav className="w-full flex justify-center items-center gap-3 py-3">
                <CgStark size={30} className="text-white bg-[#381fd1] rounded-full p-1" />
                <button 
                    type="button" 
                    className="uppercase flex gap-1 items-center cursor-pointer border border-2 border-transparent rounded-md px-3 duration-500
                                hover:border-[#381fd1]"
                    >
                    Product <TiArrowSortedDown />
                </button>
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
                    className="uppercase flex gap-1 items-center cursor-pointer border border-2 border-[#381fd1] bg-[#381fd1] text-white rounded-md px-3 duration-500
                                hover:bg-transparent hover:text-[#381fd1]"
                >
                    30-day free team trial
                </button>
            </nav>
        </header>
    );
}