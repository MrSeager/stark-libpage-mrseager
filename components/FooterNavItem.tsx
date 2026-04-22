//Components
import Link from "next/link";

interface FooterLinksProp {
    text: string;
    navLink: string;
}

interface FooterNavItemProps {
    text: string;
    footerLinks: FooterLinksProp[];
}

export default function FooterNavItem({ text, footerLinks }: FooterNavItemProps) {
    return(
        <div className="flex flex-col gap-2 items-start">
            <h5 className="uppercase font-bold text-base/5">{text}</h5>
            {footerLinks.map((link, index) => (
                <Link 
                    key={index} 
                    href={link.navLink}
                    className="duration-300 font-semibold border-b-2 border-transparent text-base/5
                                hover:border-[#f6f6eb] hover:translate-x-1"
                >
                    {link.text}
                </Link>
            ))}
        </div>
    );
}