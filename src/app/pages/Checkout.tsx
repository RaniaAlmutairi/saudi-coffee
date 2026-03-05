import { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { CreditCard, MapPin, Package, Phone, User, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [paymentMethod, setPaymentMethod] = useState<'mada' | 'apple' | 'stc' | 'cod'>('mada');

  const subtotal = cartTotal;
  const vat = subtotal * 0.15;
  const shipping = deliveryMethod === 'delivery' && subtotal < 200 ? 25 : 0;
  const total = subtotal + vat + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('تم تأكيد الطلب بنجاح!', {
      description: 'سيتم التواصل معك قريباً',
      duration: 3000,
    });
    setTimeout(() => {
      clearCart();
      window.location.href = '/';
    }, 2000);
  };

  const handleWhatsAppOrder = () => {
    const message = `مرحباً، أرغب في طلب:\n${cartItems
      .map((item) => `- ${item.nameAr} × ${item.quantity}`)
      .join('\n')}\n\nالإجمالي: ${total.toFixed(2)} ريال`;
    window.open(
      `https://wa.me/966501234567?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  if (cartItems.length === 0) {
    window.location.href = '/cart';
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5E6D3] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" dir="rtl">
        <h1 className="text-4xl font-bold text-[#2B1D17] mb-8 font-['Cairo']">
          إتمام الطلب
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Customer Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-[#F5E6D3]"
              >
                <h2 className="text-2xl font-bold text-[#2B1D17] mb-6 font-['Cairo'] flex items-center gap-2">
                  <User className="w-6 h-6 text-[#6D4C41]" />
                  معلومات العميل
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-[#2B1D17] mb-2 font-['Cairo']">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-[#F5E6D3] rounded-xl focus:border-[#6D4C41] focus:outline-none font-['Cairo']"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#2B1D17] mb-2 font-['Cairo']">
                      رقم الجوال *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border-2 border-[#F5E6D3] rounded-xl focus:border-[#6D4C41] focus:outline-none font-['Cairo']"
                      placeholder="05XXXXXXXX"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-[#2B1D17] mb-2 font-['Cairo']">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border-2 border-[#F5E6D3] rounded-xl focus:border-[#6D4C41] focus:outline-none"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Delivery Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-[#F5E6D3]"
              >
                <h2 className="text-2xl font-bold text-[#2B1D17] mb-6 font-['Cairo'] flex items-center gap-2">
                  <Package className="w-6 h-6 text-[#6D4C41]" />
                  طريقة الاستلام
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('delivery')}
                    className={`p-4 rounded-xl border-2 transition-all font-['Cairo'] ${
                      deliveryMethod === 'delivery'
                        ? 'border-[#6D4C41] bg-[#F5E6D3]'
                        : 'border-[#F5E6D3] hover:border-[#6D4C41]'
                    }`}
                  >
                    <MapPin className="w-6 h-6 text-[#6D4C41] mx-auto mb-2" />
                    <p className="font-bold text-[#2B1D17]">توصيل للمنزل</p>
                    <p className="text-sm text-gray-600">خلال 24-48 ساعة</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('pickup')}
                    className={`p-4 rounded-xl border-2 transition-all font-['Cairo'] ${
                      deliveryMethod === 'pickup'
                        ? 'border-[#6D4C41] bg-[#F5E6D3]'
                        : 'border-[#F5E6D3] hover:border-[#6D4C41]'
                    }`}
                  >
                    <Package className="w-6 h-6 text-[#6D4C41] mx-auto mb-2" />
                    <p className="font-bold text-[#2B1D17]">استلام من الفرع</p>
                    <p className="text-sm text-gray-600">جاهز خلال ساعتين</p>
                  </button>
                </div>

                {deliveryMethod === 'delivery' && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-top-4">
                    <div>
                      <label className="block text-sm font-bold text-[#2B1D17] mb-2 font-['Cairo']">
                        المدينة *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border-2 border-[#F5E6D3] rounded-xl focus:border-[#6D4C41] focus:outline-none font-['Cairo']"
                        placeholder="الرياض"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#2B1D17] mb-2 font-['Cairo']">
                        العنوان بالتفصيل *
                      </label>
                      <textarea
                        required
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-[#F5E6D3] rounded-xl focus:border-[#6D4C41] focus:outline-none resize-none font-['Cairo']"
                        placeholder="الحي، الشارع، رقم المبنى..."
                      />
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Payment Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-[#F5E6D3]"
              >
                <h2 className="text-2xl font-bold text-[#2B1D17] mb-6 font-['Cairo'] flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-[#6D4C41]" />
                  طريقة الدفع
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('mada')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === 'mada'
                        ? 'border-[#6D4C41] bg-[#F5E6D3]'
                        : 'border-[#F5E6D3] hover:border-[#6D4C41]'
                    }`}
                  >
                    <div className="bg-white rounded px-2 py-1 text-xs font-bold text-[#2B1D17] mb-2">
                      mada
                    </div>
                    <p className="text-xs text-gray-600 font-['Cairo']">بطاقة مدى</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('apple')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === 'apple'
                        ? 'border-[#6D4C41] bg-[#F5E6D3]'
                        : 'border-[#F5E6D3] hover:border-[#6D4C41]'
                    }`}
                  >
                    <div className="text-2xl mb-2">🍎</div>
                    <p className="text-xs text-gray-600 font-['Cairo']">Apple Pay</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('stc')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === 'stc'
                        ? 'border-[#6D4C41] bg-[#F5E6D3]'
                        : 'border-[#F5E6D3] hover:border-[#6D4C41]'
                    }`}
                  >
                    <div className="bg-purple-600 text-white rounded px-2 py-1 text-xs font-bold mb-2">
                      STC
                    </div>
                    <p className="text-xs text-gray-600 font-['Cairo']">STC Pay</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-[#6D4C41] bg-[#F5E6D3]'
                        : 'border-[#F5E6D3] hover:border-[#6D4C41]'
                    }`}
                  >
                    <div className="text-2xl mb-2">💵</div>
                    <p className="text-xs text-gray-600 font-['Cairo']">الدفع عند الاستلام</p>
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-[#F5E6D3] sticky top-24"
              >
                <h2 className="text-2xl font-bold text-[#2B1D17] mb-6 font-['Cairo']">
                  ملخص الطلب
                </h2>

                {/* Items */}
                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.nameAr}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-bold text-sm text-[#2B1D17] font-['Cairo']">
                          {item.nameAr}
                        </p>
                        <p className="text-sm text-gray-600 font-['Cairo']">
                          {item.quantity} × {item.price} ريال
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-3 mb-6 border-t border-[#F5E6D3] pt-4">
                  <div className="flex justify-between text-gray-700 font-['Cairo']">
                    <span>المجموع الفرعي</span>
                    <span>{subtotal.toFixed(2)} ریال</span>
                  </div>
                  <div className="flex justify-between text-gray-700 font-['Cairo']">
                    <span>ضريبة القيمة المضافة</span>
                    <span>{vat.toFixed(2)} ريال</span>
                  </div>
                  <div className="flex justify-between text-gray-700 font-['Cairo']">
                    <span>الشحن</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-600 font-bold">مجاني</span>
                      ) : (
                        `${shipping} ريال`
                      )}
                    </span>
                  </div>
                  <div className="border-t border-[#F5E6D3] pt-3">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xl font-bold text-[#2B1D17] font-['Cairo']">
                        الإجمالي
                      </span>
                      <span className="text-3xl font-bold text-[#2B1D17] font-['Cairo']">
                        {total.toFixed(2)} ريال
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D4A574] to-[#B8956A] text-[#2B1D17] py-4 rounded-xl font-bold hover:shadow-2xl transition-all mb-3 font-['Cairo'] text-lg"
                >
                  تأكيد الطلب
                </button>

                {/* WhatsApp Button */}
                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 font-['Cairo']"
                >
                  <MessageCircle className="w-5 h-5" />
                  طلب عبر واتساب
                </button>

                <p className="text-xs text-gray-500 text-center mt-4 font-['Cairo']">
                  بإتمام الطلب، أنت توافق على الشروط والأحكام
                </p>
              </motion.div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
