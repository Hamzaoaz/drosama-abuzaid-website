import { Microscope } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const surgeries = [
  {
    category: "جراحة المنظار",
    procedures: [
      "استئصال المرارة بالمنظار",
      "جراحة الارتجاع المعدي المريئي بالمنظار",
      "استئصال الزائدة الدودية بالمنظار",
      "إصلاح الفتق بالمنظار",
      "جراحة القولون والمستقيم بالمنظار",
    ]
  },
  {
    category: "جراحة القولون والمستقيم",
    procedures: [
      "سرطان القولون والمستقيم",
      "هبوط المستقيم",
      "البواسير والناسور والشرخ الشرجي",
      "دباسة البواسير",
    ]
  },
  {
    category: "الجراحة العامة",
    procedures: [
      "أورام وسرطان الثدي",
      "استئصال الغدة الدرقية",
      "الكيس العصعصي",
      "الأورام والكتل الرخوة",
    ]
  }
];

export const ArabicSurgeriesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm" dir="rtl">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-medical-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-medical-800 to-medical-600">
            الإجراءات الجراحية
          </h2>
          <p className="text-xl text-medical-700 max-w-2xl mx-auto">
            إجراءات جراحية متخصصة تتم بدقة وخبرة عالية
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {surgeries.map((category) => (
            <Card key={category.category} className="border-2 border-medical-100 hover:border-medical-500 transition-colors duration-300">
              <CardHeader className="flex flex-row items-center gap-4 bg-medical-50 rounded-t-lg">
                <div className="p-3 bg-white rounded-lg shadow-md">
                  <Microscope className="h-6 w-6 text-medical-600" />
                </div>
                <CardTitle className="text-xl text-medical-800">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {category.procedures.map((procedure, index) => (
                    <li key={index} className="text-medical-700 flex items-center gap-3 group">
                      <span className="w-2 h-2 bg-medical-500 rounded-full group-hover:scale-125 transition-transform" />
                      <span className="group-hover:text-medical-900 transition-colors">{procedure}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};