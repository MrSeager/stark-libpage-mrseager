//Components
import Link from "next/link";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

export default function MainSection() {
    return(
      <main className="shadow w-full max-w-[120rem] flex gap-10 px-5 py-15 bg-white">
        <SectionOne />
        <div className="flex flex-col w-full">
          <SectionTwo />
        </div>
      </main>
    );
}