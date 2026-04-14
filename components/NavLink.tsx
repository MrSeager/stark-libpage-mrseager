//Components
import Link from "next/link";

interface NavLinkProps {
    text: string;
    link: string;
}

export default function NavLink({ text, link }: NavLinkProps) {
    return(
        <Link 
            href={link}
            className="uppercase flex gap-1 items-center cursor-pointer border border-2 border-transparent rounded-md px-3 duration-500
                        hover:border-[#381fd1]"
        >
            {text}
        </Link>
    );
}