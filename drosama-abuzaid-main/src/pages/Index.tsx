import { Helmet } from "react-helmet";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BiographySection } from "@/components/BiographySection";
import { BookingSection } from "@/components/BookingSection";
import { SurgeriesSection } from "@/components/SurgeriesSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dr. Osama Saeed Abuzaid - Consultant General, Laparoscopic, and Coloproctologist Surgeon in UAE</title>
        <meta 
          name="description" 
          content="Dr. Osama Saeed Abuzaid is a highly experienced consultant general surgeon in UAE, specializing in laparoscopic and colorectal surgery with over 20 years of experience." 
        />
        <meta 
          name="keywords" 
          content="general surgeon UAE, consultant surgeon Sharjah, laparoscopic surgery UAE, colorectal surgery Sharjah, Medcare Hospital" 
        />
      </Helmet>
      <main className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <SurgeriesSection />
        <BiographySection />
        <BookingSection />
      </main>
    </>
  );
};

export default Index;
