//Components
import Link from "next/link";
import { ReactNode } from "react";

interface FooterNavLinkProps {
  href: string;
  icon: ReactNode;
  className?: string;
}

export default function FooterNavLink({ href, icon, className }: FooterNavLinkProps) {
  return (
    <Link
      href={href}
      className={`ratio-1/1 rounded-full p-1 bg-[#f6f6eb] duration-300
                  hover:scale-105 hover:-translate-y-1 inline-flex items-center justify-center ${className}`}
    >
      {icon}
    </Link>
  );
}
