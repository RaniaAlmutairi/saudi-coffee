import { Link } from 'react-router';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { motion } from 'motion/react';

export function Cart() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F5E6D3] to-white flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <div className="w-32 h-32 rounded-full bg-[#F5E6D3] flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-16 h-16 text-[#6D4C41]" />
          </div>
          <h2 className="text-3xl font-bold text-[#2B1D17] mb-4 font-['Cairo']">
            السلة فارغة
          </h2>
          <p className="text-gray-600 mb-8 font-['Cairo']">
            ابدأ بإضافة منتجات رائعة إلى سلتك
          </p>
          <Link
            to="/products"
            className="inline-block bg-gradient-to-r from-[#6D4C41] to-[#3E2723] text-white px-8 py-3 rounded-xl hover:shadow-xl transition-all font-['Cairo']"
          >
            تسوق الآن
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = cartTotal;
  const vat = subtotal * 0.15;
  const shipping = subtotal >= 200 ? 0 : 25;
  const total = subtotal + vat + shipping;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5E6D3] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" dir="rtl">
        <h1 className="text-4xl font-bold text-[#2B1D17] mb-8 font-['Cairo']">
          سلة التسوق
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-[#F5E6D3] hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-6">
                  {/* Image */}
                  <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.nameAr}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-[#2B1D17] mb-1 font-['Cairo']">
                          {item.nameAr}
                        </h3>
                        <p className="text-sm text-gray-600 font-['Cairo']">
                          {item.categoryAr} • {item.weight}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors p-2 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center bg-[#F5E6D3] rounded-xl overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-[#D4A574] transition-colors"
                        >
                          <Minus className="w-4 h-4 text-[#2B1D17]" />
                        </button>
                        <span className="px-4 font-bold text-[#2B1D17] font-['Cairo']">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-[#D4A574] transition-colors"
                        >
                          <Plus className="w-4 h-4 text-[#2B1D17]" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-left">
                        <p className="text-2xl font-bold text-[#2B1D17] font-['Cairo']">
                          {(item.price * item.quantity).toFixed(2)} ريال
                        </p>
                        <p className="text-sm text-gray-600 font-['Cairo']">
                          {item.price} ريال للوحدة
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#F5E6D3] sticky top-24">
              <h2 className="text-2xl font-bold text-[#2B1D17] mb-6 font-['Cairo']">
                ملخص الطلب
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700 font-['Cairo']">
                  <span>المجموع الفرعي</span>
                  <span>{subtotal.toFixed(2)} ريال</span>
                </div>
                <div className="flex justify-between text-gray-700 font-['Cairo']">
                  <span>ضريبة القيمة المضافة (15%)</span>
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
                {subtotal < 200 && (
                  <div className="bg-[#F5E6D3] rounded-lg p-3 text-sm text-[#6D4C41] font-['Cairo']">
                    أضف {(200 - subtotal).toFixed(2)} ريال للحصول على شحن مجاني
                  </div>
                )}
              </div>

              <div className="border-t border-[#F5E6D3] pt-4 mb-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-xl font-bold text-[#2B1D17] font-['Cairo']">
                    الإجمالي
                  </span>
                  <span className="text-3xl font-bold text-[#2B1D17] font-['Cairo']">
                    {total.toFixed(2)} ريال
                  </span>
                </div>
                <p className="text-sm text-gray-600 text-left mt-1 font-['Cairo']">
                  شامل جميع الضرائب والرسوم
                </p>
              </div>

              <Link
                to="/checkout"
                className="block w-full bg-gradient-to-r from-[#D4A574] to-[#B8956A] text-[#2B1D17] py-4 rounded-xl font-bold hover:shadow-2xl transition-all text-center mb-3 font-['Cairo'] text-lg"
              >
                إتمام الطلب
              </Link>

              <Link
                to="/products"
                className="block w-full border-2 border-[#6D4C41] text-[#6D4C41] py-3 rounded-xl hover:bg-[#6D4C41] hover:text-white transition-colors text-center font-['Cairo']"
              >
                متابعة التسوق
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
