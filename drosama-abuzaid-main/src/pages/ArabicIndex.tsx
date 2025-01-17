import { Helmet } from "react-helmet";
import { ArabicHeroSection } from "@/components/ArabicHeroSection";
import { ArabicServicesSection } from "@/components/ArabicServicesSection";
import { ArabicBiographySection } from "@/components/ArabicBiographySection";
import { ArabicBookingSection } from "@/components/ArabicBookingSection";
import { ArabicSurgeriesSection } from "@/components/ArabicSurgeriesSection";

const ArabicIndex = () => {
  return (
    <>
      <Helmet>
        <title>د. أسامة سعيد أبو زيد - استشاري الجراحة العامة في الإمارات</title>
        <meta 
          name="description" 
          content="د. أسامة سعيد أبو زيد استشاري الجراحة العامة في الإمارات، متخصص في الجراحة بالمنظار وجراحة القولون والمستقيم مع خبرة تزيد عن 20 عاماً" 
        />
      </Helmet>
      <main className="min-h-screen" dir="rtl">
        <ArabicHeroSection />
        <ArabicServicesSection />
        <ArabicSurgeriesSection />
        <ArabicBiographySection />
        <ArabicBookingSection />
      </main>
    </>
  );
};

export default ArabicIndex;