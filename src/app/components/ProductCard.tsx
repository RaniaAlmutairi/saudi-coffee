import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../../data/products';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success('تمت الإضافة إلى السلة بنجاح', {
      description: product.nameAr,
      duration: 2000,
    });
  };

  const getBadgeStyles = (badge?: string) => {
    switch (badge) {
      case 'bestseller':
        return 'bg-[#D4A574] text-[#2B1D17]';
      case 'specialty':
        return 'bg-[#6D4C41] text-white';
      case 'fresh':
        return 'bg-emerald-600 text-white';
      default:
        return '';
    }
  };

  const getBadgeText = (badge?: string) => {
    switch (badge) {
      case 'bestseller':
        return 'الأكثر مبيعاً';
      case 'specialty':
        return 'مختصة';
      case 'fresh':
        return 'طازج';
      default:
        return '';
    }
  };

  return (
    <Link to={`/product/${product.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-[#F5E6D3]"
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.nameAr}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {product.badge && (
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold font-['Cairo'] ${getBadgeStyles(product.badge)}`}>
              {getBadgeText(product.badge)}
            </div>
          )}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-[#6D4C41] font-['Cairo']">
            {product.categoryAr}
          </div>
        </div>

        {/* Content */}
        <div className="p-5" dir="rtl">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-[#D4A574] text-[#D4A574]'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-gray-600 mr-2 font-['Cairo']">
              ({product.reviews})
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-lg mb-1 text-[#2B1D17] line-clamp-1 font-['Cairo']">
            {product.nameAr}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2 font-['Cairo']">
            {product.descriptionAr}
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-bold text-[#2B1D17] font-['Cairo']">
              {product.price}
            </span>
            <span className="text-sm text-gray-600 font-['Cairo']">ريال</span>
            <span className="text-xs text-gray-500 font-['Cairo']">شامل الضريبة</span>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-gradient-to-r from-[#6D4C41] to-[#3E2723] text-white py-2.5 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 font-['Cairo']"
            >
              <ShoppingCart className="w-4 h-4" />
              أضف للسلة
            </button>
            <Link
              to={`/product/${product.id}`}
              className="px-4 py-2.5 border-2 border-[#6D4C41] text-[#6D4C41] rounded-xl hover:bg-[#6D4C41] hover:text-white transition-colors font-['Cairo']"
            >
              التفاصيل
            </Link>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
