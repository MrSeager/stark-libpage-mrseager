//Components
import Link from "next/link";
//Icons
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function MainSection() {
    return(
      <main className="shadow w-full max-w-[120rem] flex gap-3 p-5 bg-white">
        <div className="flex flex-col gap-3 items-start w-[25%]">
            <h1>Search Library</h1>            
            <form className="relative">
                <input title="search" type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-heading bg-transparent rounded border-1 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " />
                <label className="absolute text-sm text-body duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"><IoIosSearch size={25} /></label>
            </form>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Collection</Link>
            <button type="button">Categories</button>
        </div>
        <div className="">
            
        </div>
      </main>
    );
}