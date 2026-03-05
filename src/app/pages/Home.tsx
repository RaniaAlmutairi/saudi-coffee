import { Link } from 'react-router';
import { Truck, Shield, CreditCard, Coffee, Award, Star } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../../data/products';
import { motion } from 'motion/react';

export function Home() {
  const featuredProducts = products.filter(p => p.badge === 'bestseller' || p.badge === 'specialty').slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5E6D3] to-white">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80"
            alt="Coffee"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B1D17]/90 via-[#2B1D17]/70 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center" dir="rtl">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Cairo'] leading-tight">
              تجربة قهوة مختصة
              <br />
              <span className="text-[#D4A574]">من المملكة</span>
            </h1>
            <p className="text-xl text-[#F5E6D3] mb-8 font-['Cairo'] leading-relaxed">
              اكتشف أجود أنواع القهوة المختصة من مختلف أنحاء العالم
              <br />
              نحمصها بعناية لنقدم لك أفضل تجربة قهوة
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/products"
                className="bg-gradient-to-r from-[#D4A574] to-[#B8956A] text-[#2B1D17] px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all text-lg font-['Cairo']"
              >
                تسوق الآن
              </Link>
              <a
                href="#about"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-lg font-['Cairo']"
              >
                اكتشف المزيد
              </a>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-[#6D4C41]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" dir="rtl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6D4C41] to-[#3E2723] flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2B1D17] font-['Cairo']">توصيل سريع</h3>
                  <p className="text-sm text-gray-600 font-['Cairo']">خلال 24-48 ساعة</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6D4C41] to-[#3E2723] flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2B1D17] font-['Cairo']">دفع آمن</h3>
                  <p className="text-sm text-gray-600 font-['Cairo']">جميع طرق الدفع متاحة</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6D4C41] to-[#3E2723] flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2B1D17] font-['Cairo']">ضمان الجودة</h3>
                  <p className="text-sm text-gray-600 font-['Cairo']">منتجات أصلية 100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" dir="rtl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-[#2B1D17] mb-4 font-['Cairo']"
            >
              منتجاتنا المميزة
            </motion.h2>
            <p className="text-gray-600 text-lg font-['Cairo']">
              اختيارات خاصة من أفضل أنواع القهوة المختصة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-block bg-gradient-to-r from-[#6D4C41] to-[#3E2723] text-white px-8 py-3 rounded-xl hover:shadow-xl transition-all font-['Cairo']"
            >
              عرض جميع المنتجات
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F5E6D3]" dir="rtl" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2B1D17] mb-4 font-['Cairo']">
              لماذا قهوة سعودية؟
            </h2>
            <p className="text-gray-600 text-lg font-['Cairo']">
              نقدم أفضل تجربة قهوة مختصة في المملكة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4A574] to-[#B8956A] flex items-center justify-center mb-6 mx-auto">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2B1D17] mb-3 text-center font-['Cairo']">
                قهوة طازجة
              </h3>
              <p className="text-gray-600 text-center font-['Cairo'] leading-relaxed">
                نحمص القهوة حسب الطلب لضمان أفضل نكهة وجودة
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4A574] to-[#B8956A] flex items-center justify-center mb-6 mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2B1D17] mb-3 text-center font-['Cairo']">
                جودة مضمونة
              </h3>
              <p className="text-gray-600 text-center font-['Cairo'] leading-relaxed">
                نختار أجود حبوب البن من أفضل المزارع حول العالم
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4A574] to-[#B8956A] flex items-center justify-center mb-6 mx-auto">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2B1D17] mb-3 text-center font-['Cairo']">
                خدمة مميزة
              </h3>
              <p className="text-gray-600 text-center font-['Cairo'] leading-relaxed">
                فريق متخصص لخدمتك وتقديم أفضل تجربة تسوق
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
