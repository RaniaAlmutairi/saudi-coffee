import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../../data/products';
import { motion } from 'motion/react';

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      if (searchQuery) {
        return (
          product.nameAr.includes(searchQuery) ||
          product.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.descriptionAr.includes(searchQuery)
        );
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5E6D3] to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2B1D17] to-[#3E2723] text-white py-16" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 font-['Cairo']"
          >
            متجر القهوة المختصة
          </motion.h1>
          <p className="text-[#F5E6D3] text-lg font-['Cairo']">
            اكتشف مجموعتنا المتنوعة من أجود أنواع القهوة
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" dir="rtl">
        {/* Filters */}
        <div className="mb-8 space-y-6">
          {/* Search and Sort */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث عن القهوة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 pl-4 py-3 border-2 border-[#F5E6D3] rounded-xl focus:border-[#6D4C41] focus:outline-none font-['Cairo']"
              />
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-gray-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border-2 border-[#F5E6D3] rounded-xl focus:border-[#6D4C41] focus:outline-none font-['Cairo'] bg-white"
              >
                <option value="featured">مميز</option>
                <option value="price-low">السعر: من الأقل للأعلى</option>
                <option value="price-high">السعر: من الأعلى للأقل</option>
                <option value="rating">الأعلى تقييماً</option>
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-full font-['Cairo'] transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#6D4C41] to-[#3E2723] text-white shadow-lg'
                    : 'bg-white border-2 border-[#F5E6D3] text-[#2B1D17] hover:border-[#6D4C41]'
                }`}
              >
                {category.nameAr}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-6">
          <p className="text-gray-600 font-['Cairo']">
            عرض {filteredProducts.length} منتج
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 rounded-full bg-[#F5E6D3] flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-[#6D4C41]" />
            </div>
            <h3 className="text-2xl font-bold text-[#2B1D17] mb-2 font-['Cairo']">
              لا توجد نتائج
            </h3>
            <p className="text-gray-600 font-['Cairo']">
              جرب البحث بكلمات أخرى أو اختر فئة مختلفة
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
