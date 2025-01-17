import { Stethoscope, Microscope, HeartPulse, Activity, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  {
    title: "Laparoscopic Surgery",
    description: "Advanced minimally invasive procedures including cholecystectomy, hernia repair, and colorectal surgery",
    icon: Microscope,
  },
  {
    title: "General Surgery",
    description: "Comprehensive surgical care for various conditions including breast surgery and thyroidectomy",
    icon: Stethoscope,
  },
  {
    title: "Colorectal Surgery",
    description: "Expert treatment of colorectal conditions including cancer, hemorrhoids, and fistulas",
    icon: HeartPulse,
  },
  {
    title: "Gastrointestinal Surgery",
    description: "Specialized procedures including anti-reflux surgery (GERD) and advanced digestive tract treatments",
    icon: Activity,
  },
];

export const ServicesSection = () => {
  const isMobile = useIsMobile();
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (title: string) => {
    setOpenItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-medical-900 mb-12">
          Specialized Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            isMobile ? (
              <Collapsible
                key={service.title}
                open={openItems[service.title]}
                onOpenChange={() => toggleItem(service.title)}
                className="border-2 border-medical-100 hover:border-medical-500 transition-colors rounded-lg bg-white"
              >
                <CollapsibleTrigger className="w-full p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <service.icon className="h-8 w-8 text-medical-500" />
                    <h3 className="text-xl text-medical-800">{service.title}</h3>
                  </div>
                  {openItems[service.title] ? (
                    <ChevronUp className="h-5 w-5 text-medical-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-medical-500" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="p-6 pt-0">
                  <p className="text-medical-700">{service.description}</p>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Card key={service.title} className="border-2 border-medical-100 hover:border-medical-500 transition-colors">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-medical-500 mb-4" />
                  <CardTitle className="text-xl text-medical-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medical-700">{service.description}</p>
                </CardContent>
              </Card>
            )
          ))}
        </div>
      </div>
    </section>
  );
};