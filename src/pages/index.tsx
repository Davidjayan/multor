import { ThirdSection } from "@/components/ThirdSection";
import { UIAboutSection } from "@/components/UIAboutSection";
import { UIBenefitSection } from "@/components/UIBenefitSection";
import { UIFeatureSection } from "@/components/UIFeatureSection";
import { UIFooter } from "@/components/UIFooter";
import { UIHeader } from "@/components/UIHeader";
import { UITestimonialSection } from "@/components/UITestimonialSection";
import { Poppins, Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className={`${workSans.className} w-full`}>
      <UIHeader/>
      <UIBenefitSection />
      <ThirdSection />
      <div className="md:w-[50%] w-[90%] container">
        <UITestimonialSection />
      </div>
      <div className="md:w-[50%] w-[90%] container">
        <UIFeatureSection />
      </div>
      <div className="md:w-[50%] w-[90%] container">
        <UIAboutSection />
      </div>
      <UIFooter />
    </main>
  );
}
