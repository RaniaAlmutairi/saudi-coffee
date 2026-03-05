import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2B1D17] to-[#1a110d] text-[#F5E6D3] border-t border-[#6D4C41]/20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-['Cairo'] text-[#D4A574]">عن قهوة سعودية</h3>
            <p className="text-sm text-[#F5E6D3]/80 leading-relaxed font-['Cairo']">
              نقدم أجود أنواع القهوة المختصة من مختلف أنحاء العالم. نحرص على جودة المنتج وسرعة التوصيل لعملائنا الكرام.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-['Cairo'] text-[#D4A574]">روابط سريعة</h3>
            <ul className="space-y-2 text-sm font-['Cairo']">
              <li>
                <Link to="/" className="hover:text-[#D4A574] transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#D4A574] transition-colors">
                  المنتجات
                </Link>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D4A574] transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4A574] transition-colors">
                  تواصل معنا
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4A574] transition-colors">
                  سياسة الخصوصية
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-['Cairo'] text-[#D4A574]">تواصل معنا</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4A574]" />
                <a href="tel:+966501234567" className="hover:text-[#D4A574] transition-colors font-['Cairo']">
                  +966 50 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4A574]" />
                <a href="mailto:info@saudicoffee.sa" className="hover:text-[#D4A574] transition-colors">
                  info@saudicoffee.sa
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4A574] mt-1" />
                <span className="font-['Cairo']">الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-['Cairo'] text-[#D4A574]">تابعنا</h3>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#3E2723] hover:bg-[#D4A574] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#3E2723] hover:bg-[#D4A574] flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#3E2723] hover:bg-[#D4A574] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            {/* Payment Methods */}
            <h4 className="font-bold text-sm mb-3 font-['Cairo'] text-[#D4A574]">طرق الدفع</h4>
            <div className="flex gap-2 flex-wrap">
              <div className="bg-white rounded px-2 py-1 text-xs font-bold text-[#2B1D17]">mada</div>
              <div className="bg-white rounded px-2 py-1 text-xs font-bold text-[#2B1D17]">VISA</div>
              <div className="bg-white rounded px-2 py-1 text-xs font-bold text-[#2B1D17]">Apple Pay</div>
              <div className="bg-white rounded px-2 py-1 text-xs font-bold text-[#2B1D17]">STC Pay</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#6D4C41]/20 pt-6 text-center">
          <p className="text-sm text-[#F5E6D3]/60 font-['Cairo']">
            © 2026 قهوة سعودية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
