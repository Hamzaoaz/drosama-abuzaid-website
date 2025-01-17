import { MapPin, Globe, Phone, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const locations = [
  {
    id: "medcare-sharjah",
    hospital: "مستشفى ميدكير",
    location: "الشارقة",
    address: "شارع الملك فيصل، القاسمية",
    city: "الشارقة",
    country: "الإمارات العربية المتحدة",
    bookingLink: "https://medcare.okadoc.com/en-ae/doctor/general-surgery/sharjah/osama-saeed-fuad-abuzaid?session_id=81490587-02be-402f-b7a4-556f46a0bb16.5u64-1736805524863t4mp4n",
    phoneNumber: "+9718006332273",
  },
  {
    id: "medcare-taawun",
    hospital: "مركز ميدكير الطبي - التعاون",
    location: "الشارقة",
    address: "التعاون، الشارقة",
    city: "الشارقة",
    country: "الإمارات العربية المتحدة",
    bookingLink: "https://www.medcare.ae/en/branches/view/medcare-medical-centre-sharjah.html",
    phoneNumber: "052 509 4473",
  ,
  {
    id: "bissan-medical",
    hospital: "مركز بيسان الطبي",
    location: "الشارقة",
    address: "شارع الكورنيش، المجاز",
    city: "الشارقة",
    country: "الإمارات العربية المتحدة",
    phoneNumber: "+971 6 573 7005",
  }
];

export const ArabicBookingSection = () => {
  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  useEffect(() => {
    const highlightLocation = () => {
      const hash = window.location.hash.replace('#booking-', '');
      locations.forEach(loc => {
        const card = document.getElementById(`card-${loc.id}`);
        if (card) {
          if (loc.id === hash) {
            card.classList.add('ring-2', 'ring-medical-500', 'ring-offset-2');
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          } else {
            card.classList.remove('ring-2', 'ring-medical-500', 'ring-offset-2');
          }
        }
      });
    };

    highlightLocation();
    window.addEventListener('hashchange', highlightLocation);
    return () => window.removeEventListener('hashchange', highlightLocation);
  }, []);

  return (
    <section id="booking-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-medical-50 via-white to-medical-50" dir="rtl">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-medical-900">
            احجز موعداً
          </h2>
          <Button 
            variant="outline" 
            className="border-2 border-medical-500 text-medical-700 hover:bg-medical-50"
            onClick={() => window.location.href = '/'}
          >
            <Globe className="ml-2 h-5 w-5" />
            English
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc) => (
            <Card 
              key={loc.hospital}
              id={`card-${loc.id}`}
              className="border-2 border-medical-100 hover:border-medical-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl bg-white"
            >
              <CardHeader className="bg-gradient-to-r from-medical-50 to-white">
                <CardTitle className="text-xl text-medical-800 flex items-center gap-2">
                  <span className="text-medical-500">
                    <Building className="h-5 w-5" />
                  </span>
                  {loc.hospital}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-medical-700">
                    <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{loc.address}</p>
                      <p>{loc.city}، {loc.country}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {loc.bookingLink && (
                    <Button 
                      className="w-full bg-medical-500 hover:bg-medical-600 transform transition-all duration-300 hover:scale-105"
                      onClick={() => window.open(loc.bookingLink, '_blank')}
                    >
                      احجز موعداً عبر الإنترنت
                    </Button>
                  )}
                  <Button 
                    className="w-full bg-medical-500 hover:bg-medical-600 transform transition-all duration-300 hover:scale-105"
                    onClick={() => handleCall(loc.phoneNumber)}
                  >
                    <Phone className="ml-2 h-5 w-5" />
                    اتصل للحجز
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-medical-50 rounded-xl border border-medical-100 text-center">
          <p className="text-medical-700">
            للاستشارات العاجلة أو الاستفسارات، يرجى الاتصال بمكاتبنا الطبية مباشرة
          </p>
        </div>
      </div>
    </section>
  );
};
