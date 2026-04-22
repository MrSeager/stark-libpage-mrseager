//Components
import HeaderNav from "@/components/HeaderNav";
import MainSection from "@/components/MainSection";
import FooterNav from "@/components/FooterNav";

export default function Home() {
  return (
    <div className="bg-white select-none flex flex-col flex-1 items-center justify-start bg-zinc-50 font-sans">
      <HeaderNav />
      <MainSection />
      <FooterNav />
    </div>
  );
}

// #f6f6eb #381fd1 #7b7b7c #10284b #f3f2fc #fedb63