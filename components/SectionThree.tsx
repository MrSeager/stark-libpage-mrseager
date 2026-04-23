//Components
import Link from "next/link";
import SectionThreeItem from "./SectionThreeItem";

export default function SectionThree() {
    return(
        <div className="flex flex-col gap-3 text-[#10284b]">
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <h3 className="text-center md:text-start font-bold text-[55px] text-base/13">Featured Collections</h3>
                <Link 
                    href={'/'}
                    className="uppercase underline duration-300 text-[#381fd1] font-semibold
                                hover:opacity-50"
                >
                    View all
                </Link>
            </div>
            <p className="text-center md:text-start text-base/6">Handpicked and curated collections around accessibility.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 perspective-1000">
                <SectionThreeItem 
                    bgImg={"bg-[url(/images/library_collection_Collection_Boundless_Disability_Employment_c297d236d9.png)]"}
                    bg={"bg-[#f6f6eb] bg-cover"} 
                    text={"Disability Employment"}
                />
                <SectionThreeItem 
                    bgImg={"bg-[url(/images/library_collection_making_accessible_color_combos_42c8d90a99.png)]"}
                    bg={"bg-[#f3f2fc] bg-contain"} 
                    text={"Making Accessible Color Combos"}
                />
                <SectionThreeItem 
                    bgImg={"bg-[url(/images/library_collection_Inclusive_Social_Media_b9669e6d39.png)]"}
                    bg={"bg-[#f6f6eb] bg-contain"} 
                    text={"Tips and Tricks for Inclusive Social Media"}
                />
            </div>
        </div>
    );
}