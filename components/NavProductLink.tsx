//Components
import Link from "next/link";

interface NavProductLinkProps {
    productName: string;
    productDis: string;
}

export default function NavProductLink({ productName, productDis }: NavProductLinkProps) {
    return(
        <Link
            href={'/'} 
            className="duration-300 p-3 rounded-md
                        hover:bg-[#f3f2fc]"
        >
            <h1 className="text-lg leading-tight">{productName}</h1>
            <p className="text-[#10284b] leading-snug">{productDis}</p>
        </Link>
    );
}