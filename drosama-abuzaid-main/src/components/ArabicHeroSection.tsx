import { Button } from "@/components/ui/button";
import { Award, Star, GraduationCap, Globe, MapPin, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ArabicHeroSection = () => {
  const navigate = useNavigate();
  
  const scrollToBooking = () => {
    const bookingSection = document.querySelector('#booking-section');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const achievements = [
    {
      icon: <Award className="h-5 w-5" />,
      text: "زمالة الكلية الملكية للجراحين"
    },
     {
      icon: <GraduationCap className="h-5 w-5" />,
      text: "البورد الأردني"
    },
      {
        icon: <Star className="h-5 w-5" />,
        text: "خبرة +20 عاماً"
    },
   
  ];

  const locations = [
    "مستشفى ميدكير الشارقة",
    "مركز بيسان الطبي",
    "مركز ميدكير الطبي - التعاون (قريباً)"
  ];

  return (
    <section className="relative bg-medical-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="absolute top-4 left-4">
          <Button 
            variant="outline" 
            className="border-2 border-medical-500 text-medical-700 hover:bg-medical-50"
            onClick={() => navigate('/')}
          >
            <Globe className="ml-2 h-5 w-5" />
            English
          </Button>
        </div>
        
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <div className="mb-8 relative inline-block">
            <div className="w-56 h-56 sm:w-64 sm:h-64 relative mb-6">
              <div className="absolute inset-0 bg-medical-500 rounded-full opacity-10 animate-pulse"></div>
              <img
                src="/lovable-uploads/bb2df379-2661-4c76-8b20-6884932129ee.png"
                alt="د. أسامة سعيد أبو زيد"
                className="rounded-full w-full h-full object-cover border-4 border-medical-100 shadow-xl"
              />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-medical-900 mb-6">
            د. أسامة سعيد أبو زيد
          </h1>
          <p className="text-xl sm:text-2xl text-medical-800 mb-4">
            استشاري الجراحة العامة والمنظار والمستقيم
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-medical-100 hover:border-medical-500 transition-colors"
              >
                <span className="text-medical-500">{achievement.icon}</span>
                <span className="text-medical-800 font-medium">{achievement.text}</span>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-medical-700 mb-8">
            زميل الكلية الملكية للجراحين في المملكة المتحدة مع خبرة تزيد عن 20 عاماً في الجراحة العامة وجراحة المنظار والمستقيم
          </p>

          <div className="mt-6 flex flex-col items-center">
            <ul className="space-y-4" dir="rtl">
              {locations.map((location, index) => (
                <li key={index} className="flex items-center justify-between gap-4 text-medical-700 w-full max-w-md">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-medical-500 flex-shrink-0" />
                    <span>{location}</span>
                  </div>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="border-medical-500 text-medical-700 hover:bg-medical-50"
                    onClick={scrollToBooking}
                  >
                    <Calendar className="ml-1 h-4 w-4" />
                    احجز
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
