//Components
import Image from "next/image";

interface SectionTwoItemProps {
    img: string;
    category: string;
    text: string;
}

export default function SectionTwoItem({ img, category, text }: SectionTwoItemProps) {
    return(
        <div 
            className="flex flex-col gap-2 items-start p-5 border border-[#7b7b7c] rounded-lg aspect-6/4 duration-500
                        hover:border-[#381fd1]"
        >
            <div className="border overflow-hidden rounded-lg flex justify-center items-center aspect-square">
                <Image 
                    src={img}
                    alt={text}
                    height={40}
                    width={40}
                />
            </div>
            <h3 className="uppercase font-semibold text-[#381fd1]">{category}</h3>
            <h4 className="font-bold text-[28px]">{text}</h4>
        </div>
    );
}