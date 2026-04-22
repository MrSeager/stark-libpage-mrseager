//Components
import Link from "next/link";
import SectionTwoItem from "./SectionTwoItem";

export default function SectionTwo() {
    const data = [
        {img: '/images/uni_profile_93228_9c84b19231.jpg', category: 'Resources', text: 'Making Accessible Books'},
        {img: '/images/daisy_high_e2e14faca3.jpg', category: 'Resources', text: 'Inclusive Publishing'},
        {img: '/images/Screenshot_2023_03_20_at_3_58_45_PM_b615f86e7e.png', category: 'Resources', text: 'The APLN (Accessible Publishing...'},
        {img: '/images/uni_profile_93228_9c84b19231.jpg', category: 'Resources', text: 'The DAISY Consortium’s Accessible Publishing...'},
        {img: '/images/language_please_logo_d4b822280f.png', category: 'Resources', text: 'Language, Please: Style Guide & Resources for...'},
        {img: '/images/library_author_google_7723cb132a.png', category: 'Blogs & Articles', text: '4 steps to more inclusive, precise language'},
    ];

    return(
        <div className="flex flex-col gap-3 text-[#10284b]">
            <div className="flex justify-between items-center w-full">
                <h2 className="font-bold text-[55px] text-base/13">New in the Library</h2>
                <Link 
                    href={'/'}
                    className="uppercase underline duration-300 text-[#381fd1] font-semibold
                                hover:opacity-50"
                >
                    View all
                </Link>
            </div>
            <p className="text-base/6">Newly added accessibility resources, guides, and more.</p>
            <div className="grid grid-cols-3 gap-5">
                {data.map((item, index) => (
                    <SectionTwoItem 
                        key={index}
                        img={item.img}
                        category={item.category}
                        text={item.text}
                    />
                ))}
            </div>
        </div>
    );
}