import BrandImpactSection from "./BrandImpactSection";
import CampaignCTA from "./CampaignCTA";
import ClientTestimonials from "./ClientTestimonials";
import FAQSection from "./FAQSection";
import HomeBanner from "./HomeBanner/HomeBanner";
import PerfectAdSpace from "./PerfectAdSpace/PerfectAdSpace";
import TrustedBrands from "./TrustedBrands";

export default function Home(){
    return (
        <div className="font-poppins text-center border h-full flex flex-col justify-center items-center">
            <HomeBanner/>
            <PerfectAdSpace/>
            <BrandImpactSection/>
            <ClientTestimonials/>
            <TrustedBrands/>
            <CampaignCTA/>
            <FAQSection/>
        </div>
    )
}