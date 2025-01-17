import { GraduationCap, Award, Clock, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const BiographySection = () => {
  const qualifications = [
    {
      title: "Education",
      icon: GraduationCap,
      items: [
        "MBBS - Jordan University of Science and Technology",
        "Higher Specialization in General Surgery",
        "Jordanian Board of General Surgery Certification",
        "Member of Royal College of Surgeons (MRCS), UK"
      ]
    },
    {
      title: "Experience",
      icon: Clock,
      items: [
        "20+ years of clinical experience",
        "Fellowship in Laparoscopic & Colorectal Surgery, UK",
        "Programme Director at Islamic Hospital, Amman",
        "Clinical Assistant Professor, University of Sharjah"
      ]
    },
    {
      title: "Hospital Affiliations",
      icon: Building2,
      items: [
        "Medcare Hospital Sharjah",
        "NMC Royal Hospital, Sharjah",
        "Saudi German Hospital, Dubai",
        "Rotherham General Hospital NHS, UK"
      ]
    },
    {
      title: "Specializations",
      icon: Award,
      items: [
        "Advanced Laparoscopic Surgery",
        "Colorectal Surgery",
        "General Surgery",
        "Gastrointestinal Surgery"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-medical-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto relative">
              <div className="absolute inset-0 bg-medical-500 rounded-full opacity-10 animate-pulse"></div>
              <img
                src="/lovable-uploads/bb2df379-2661-4c76-8b20-6884932129ee.png"
                alt="Dr. Osama Saeed Abuzaid"
                className="rounded-full w-full h-full object-cover border-4 border-medical-100 shadow-xl"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-medical-500 text-white px-6 py-2 rounded-full shadow-lg">
                <span className="text-sm font-semibold">20+ Years Experience</span>
              </div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-medical-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-medical-800 to-medical-600">
            Professional Excellence
          </h2>
          <p className="text-xl text-medical-700 max-w-2xl mx-auto">
            Combining academic distinction with extensive surgical expertise to deliver exceptional patient care
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {qualifications.map((qual) => (
            <Card key={qual.title} className="border-2 border-medical-100 hover:border-medical-500 transition-colors duration-300 transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4 bg-medical-50 rounded-t-lg">
                <div className="p-3 bg-white rounded-lg shadow-md">
                  <qual.icon className="h-6 w-6 text-medical-600" />
                </div>
                <CardTitle className="text-xl text-medical-800">{qual.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {qual.items.map((item, index) => (
                    <li key={index} className="text-medical-700 flex items-center gap-3 group">
                      <span className="w-2 h-2 bg-medical-500 rounded-full group-hover:scale-125 transition-transform" />
                      <span className="group-hover:text-medical-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 p-8 bg-white rounded-2xl shadow-xl border border-medical-100">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-bold text-medical-900 mb-6">About Dr. Osama Saeed Abuzaid</h3>
              <p className="text-medical-700 leading-relaxed">
                Dr. Abuzaid brings over two decades of expertise in General and Laparoscopic Surgery. His journey spans multiple prestigious institutions across Jordan, the UK, and the UAE, where he has consistently demonstrated excellence in surgical care and medical education.
              </p>
              <p className="text-medical-700 leading-relaxed">
                As a member of the Royal College of Surgeons (MRCS), UK, and with extensive training in Laparoscopic & Colorectal Surgery, Dr. Abuzaid combines surgical expertise with a commitment to patient care. He is fluent in both Arabic and English, ensuring clear communication with his diverse patient base.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 bg-medical-50 px-4 py-2 rounded-full">
                  <Award className="h-5 w-5 text-medical-600" />
                  <span className="text-medical-800 font-medium">MRCS, UK</span>
                </div>
                <div className="flex items-center gap-2 bg-medical-50 px-4 py-2 rounded-full">
                  <Building2 className="h-5 w-5 text-medical-600" />
                  <span className="text-medical-800 font-medium">Medcare Hospital</span>
                </div>
                <div className="flex items-center gap-2 bg-medical-50 px-4 py-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-medical-600" />
                  <span className="text-medical-800 font-medium">Clinical Professor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};