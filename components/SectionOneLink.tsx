//Components
import Link from "next/link";

interface SectionOneLinkProps {
    text: string;
    href: string;
}

export default function SectionOneLink({ text, href }: SectionOneLinkProps) {
    return(
        <Link 
            href={href}
            className="font-semibold duration-500
                        hover:text-[#381fd1]"
            >
            {text}
        </Link>
    );
}