//Components
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

export default function MainSection() {
    return(
      <main className="shadow w-full max-w-[120rem] flex gap-10 px-5 py-15 bg-white">
        <SectionOne />
        <div className="flex flex-col gap-15 w-full">
          <SectionTwo />
          <SectionThree />
        </div>
      </main>
    );
}