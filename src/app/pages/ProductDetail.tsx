import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { Star, ShoppingCart, Heart, Share2, Minus, Plus, Package, Truck, Shield } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../contexts/CartContext';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#2B1D17] mb-4 font-['Cairo']">
            المنتج غير موجود
          </h2>
          <Link
            to="/products"
            className="text-[#6D4C41] hover:text-[#3E2723] font-['Cairo']"
          >
            العودة للمنتجات
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success('تمت الإضافة إلى السلة', {
      description: `${quantity} × ${product.nameAr}`,
    });
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    window.location.href = '/cart';
  };

  const subtotal = product.price * quantity;
  const vat = subtotal * 0.15;
  const total = subtotal + vat;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5E6D3] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" dir="rtl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm font-['Cairo']">
          <Link to="/" className="text-[#6D4C41] hover:text-[#3E2723]">
            الرئيسية
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/products" className="text-[#6D4C41] hover:text-[#3E2723]">
            المنتجات
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">{product.nameAr}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="sticky top-24">
              {/* Main Image */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-4 aspect-square">
                <img
                  src={product.images[selectedImage]}
                  alt={product.nameAr}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-1 aspect-square rounded-xl overflow-hidden border-4 transition-all ${
                      selectedImage === index
                        ? 'border-[#6D4C41] scale-95'
                        : 'border-transparent hover:border-[#F5E6D3]'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.nameAr} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Category */}
            <div className="inline-block bg-[#F5E6D3] text-[#6D4C41] px-4 py-1.5 rounded-full text-sm font-['Cairo'] mb-4">
              {product.categoryAr}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-[#2B1D17] mb-4 font-['Cairo']">
              {product.nameAr}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[#D4A574] text-[#D4A574]'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-['Cairo'] text-gray-600">
                {product.rating} ({product.reviews} تقييم)
              </span>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-br from-[#F5E6D3] to-white rounded-2xl p-6 mb-6 border border-[#D4A574]/30">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-5xl font-bold text-[#2B1D17] font-['Cairo']">
                  {product.price}
                </span>
                <span className="text-xl text-gray-600 font-['Cairo']">ريال</span>
              </div>
              <div className="space-y-1 text-sm font-['Cairo'] text-gray-600">
                <div className="flex justify-between">
                  <span>المجموع الفرعي:</span>
                  <span>{subtotal.toFixed(2)} ريال</span>
                </div>
                <div className="flex justify-between">
                  <span>ضريبة القيمة المضافة (15%):</span>
                  <span>{vat.toFixed(2)} ريال</span>
                </div>
                <div className="flex justify-between font-bold text-[#2B1D17] text-base pt-2 border-t border-[#D4A574]/30">
                  <span>الإجمالي:</span>
                  <span>{total.toFixed(2)} ريال</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#2B1D17] mb-3 font-['Cairo']">
                وصف المنتج
              </h3>
              <p className="text-gray-700 leading-relaxed font-['Cairo']">
                {product.descriptionAr}
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 border border-[#F5E6D3]">
                <p className="text-sm text-gray-600 mb-1 font-['Cairo']">المنشأ</p>
                <p className="font-bold text-[#2B1D17] font-['Cairo']">{product.originAr}</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#F5E6D3]">
                <p className="text-sm text-gray-600 mb-1 font-['Cairo']">التحميص</p>
                <p className="font-bold text-[#2B1D17] font-['Cairo']">{product.roastLevelAr}</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#F5E6D3]">
                <p className="text-sm text-gray-600 mb-1 font-['Cairo']">الوزن</p>
                <p className="font-bold text-[#2B1D17] font-['Cairo']">{product.weight}</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#F5E6D3]">
                <p className="text-sm text-gray-600 mb-1 font-['Cairo']">التقييم</p>
                <p className="font-bold text-[#2B1D17] font-['Cairo']">{product.rating}/5</p>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-[#2B1D17] mb-3 font-['Cairo']">
                الكمية
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-white border-2 border-[#F5E6D3] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-[#F5E6D3] transition-colors"
                  >
                    <Minus className="w-5 h-5 text-[#6D4C41]" />
                  </button>
                  <span className="px-6 font-bold text-lg text-[#2B1D17] font-['Cairo']">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-[#F5E6D3] transition-colors"
                  >
                    <Plus className="w-5 h-5 text-[#6D4C41]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-[#6D4C41] to-[#3E2723] text-white py-4 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center justify-center gap-2 font-['Cairo'] text-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                أضف للسلة
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-gradient-to-r from-[#D4A574] to-[#B8956A] text-[#2B1D17] py-4 rounded-xl font-bold hover:shadow-2xl transition-all font-['Cairo'] text-lg"
              >
                اشتر الآن
              </button>
            </div>

            <div className="flex gap-3 mb-8">
              <button className="flex-1 border-2 border-[#F5E6D3] text-[#6D4C41] py-3 rounded-xl hover:bg-[#F5E6D3] transition-colors flex items-center justify-center gap-2 font-['Cairo']">
                <Heart className="w-5 h-5" />
                المفضلة
              </button>
              <button className="flex-1 border-2 border-[#F5E6D3] text-[#6D4C41] py-3 rounded-xl hover:bg-[#F5E6D3] transition-colors flex items-center justify-center gap-2 font-['Cairo']">
                <Share2 className="w-5 h-5" />
                مشاركة
              </button>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-full bg-[#F5E6D3] flex items-center justify-center">
                  <Package className="w-5 h-5 text-[#6D4C41]" />
                </div>
                <span className="font-['Cairo'] text-gray-700">منتج أصلي 100%</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-full bg-[#F5E6D3] flex items-center justify-center">
                  <Truck className="w-5 h-5 text-[#6D4C41]" />
                </div>
                <span className="font-['Cairo'] text-gray-700">توصيل مجاني للطلبات فوق 200 ريال</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-full bg-[#F5E6D3] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#6D4C41]" />
                </div>
                <span className="font-['Cairo'] text-gray-700">ضمان استرجاع المبلغ خلال 7 أيام</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
